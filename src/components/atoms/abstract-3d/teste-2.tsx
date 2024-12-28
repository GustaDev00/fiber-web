import * as S from "./styles";
import useAnimation from "./animation";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useEffect, useRef } from "react";

export const Abstract3d = () => {
  const { containerRef } = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);

    ref.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      ref.current.clientWidth / ref.current.clientHeight,
    );
    camera.position.set(0, 0, 6);

    const light = new THREE.HemisphereLight(0xfffffbb, 0x080820, 2);
    scene.add(light);

    const path = new THREE.Shape();

    path.moveTo(0.3, 1.5);
    path.quadraticCurveTo(0.3, 2.2, 0.9, 2.2);
    path.quadraticCurveTo(1.3, 2.2, 1.4, 1.7);
    path.quadraticCurveTo(1.5, 2.2, 1.9, 2.2);
    path.quadraticCurveTo(2.5, 2.2, 2.5, 1.5);
    path.quadraticCurveTo(2.5, 1, 1.4, 0.3);
    path.quadraticCurveTo(0.3, 1, 0.3, 1.5);

    // const geometry = new THREE.ShapeGeometry(path);

    const geometry = new THREE.ExtrudeGeometry(path, {
      depth: 0.2,
      bevelEnabled: true,
      bevelSize: 0.05,
      bevelThickness: 0.05,
      bevelSegments: 10,
      curveSegments: 64,
    });

    const material = new THREE.MeshLambertMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
    });

    const draw = new THREE.Mesh(geometry, material);

    scene.add(draw);

    const assis = new THREE.AxesHelper(5);
    scene.add(assis);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.enableZoom = true;
    controls.screenSpacePanning = false;

    controls.minDistance = 1;
    controls.maxDistance = 20;

    controls.maxPolarAngle = Math.PI / 2;
    controls.update();

    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }, []);

  return <div ref={ref} style={{ width: "400px", height: "400px" }} />;

  return <S.Abstract3d ref={containerRef} />;
};
