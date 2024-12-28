"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import * as S from "./styles";
import { createCamera } from "@/utils/create-camera";
import { createRenderer } from "@/utils/create-render";
import { loadHDRI } from "@/utils/load-hdri";
import { loadTexture } from "@/utils/load-texture";

const hdriURL = "./three/warehouse.hdr";
const heightMapURL = "./three/heightmap2.jpg";

export const MagicSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const params = {
      roughness: 0.1,
      iterations: 32,
      depth: 0.6,
      smoothing: 0.2,
      colorA: "#000000",
      colorB: "#00ffaa",
    };

    const scene = new THREE.Scene();
    const renderer = createRenderer();
    containerRef.current.appendChild(renderer.domElement);

    const camera = createCamera();
    camera.position.set(0, 0, 3);

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshStandardMaterial({ roughness: 0.2 });

    loadTexture(heightMapURL).then((heightMap: { minFilter: number }) => {
      heightMap.minFilter = THREE.NearestFilter;

      const uniforms = {
        iterations: { value: params.iterations },
        depth: { value: params.depth },
        smoothing: { value: params.smoothing },
        colorA: { value: new THREE.Color(params.colorA) },
        colorB: { value: new THREE.Color(params.colorB) },
        heightMap: { value: heightMap },
      };

      material.onBeforeCompile = (shader) => {
        shader.uniforms = { ...shader.uniforms, ...uniforms };

        shader.vertexShader =
          `
              varying vec3 v_pos;
              varying vec3 v_dir;
            ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
          /void main\(\) {/,
          (match) =>
            match +
            `
              v_dir = position - cameraPosition;
              v_pos = position;
            `,
        );

        shader.fragmentShader =
          `
              uniform vec3 colorA;
              uniform vec3 colorB;
              uniform sampler2D heightMap;
              uniform int iterations;
              uniform float depth;
              uniform float smoothing;
    
              varying vec3 v_pos;
              varying vec3 v_dir;
            ` + shader.fragmentShader;

        shader.fragmentShader = shader.fragmentShader.replace(
          /void main\(\) {/,
          (match) =>
            `
              vec3 marchMarble(vec3 rayOrigin, vec3 rayDir) {
                float perIteration = 1. / float(iterations);
                vec3 deltaRay = rayDir * perIteration * depth;
    
                vec3 p = rayOrigin;
                float totalVolume = 0.;
    
                for (int i = 0; i < iterations; i++) {
                  vec2 uv = equirectUv(normalize(p));
                  float heightMapVal = texture(heightMap, uv).r;
    
                  float height = length(p);
                  float cutoff = 1. - float(i) * perIteration;
                  float slice = smoothstep(cutoff, cutoff + smoothing, heightMapVal);
    
                  totalVolume += slice * perIteration;
                  p += deltaRay;
                }
                return mix(colorA, colorB, totalVolume);
              }
            ` + match,
        );

        shader.fragmentShader = shader.fragmentShader.replace(
          /vec4 diffuseColor.*;/,
          `
              vec3 rayDir = normalize(v_dir);
              vec3 rayOrigin = v_pos;
    
              vec3 rgb = marchMarble(rayOrigin, rayDir);
              vec4 diffuseColor = vec4(rgb, 1.);
            `,
        );
      };

      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
    });

    loadHDRI(hdriURL, renderer).then((envMap) => {
      scene.environment = envMap;
    });

    if (process.env.NODE_ENV === "development") {
      import("dat.gui").then(({ GUI }) => {
        const gui = new GUI();
        const params = {
          roughness: material.roughness,
        };

        gui.add(params, "roughness", 0, 1, 0.01).onChange((value) => {
          material.roughness = value;
        });
      });
    }

    let angle = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      angle += 0.01;
      camera.position.x = Math.sin(angle) * 3;
      camera.position.y = Math.sin(angle) * 0.5;
      camera.position.z = Math.cos(angle) * 3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <S.MagicSphere ref={containerRef} />;
};
