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
    camera.position.set(0, 0, 20);

    const light = new THREE.HemisphereLight(0xfffffbb, 0x080820, 2);
    scene.add(light);

    const material = new THREE.MeshLambertMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
    });

    const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
    scene.add(cube);

    const circle = new THREE.Mesh(new THREE.CircleGeometry(0.5, 32), material);
    circle.position.x = -1;
    circle.rotation.x = THREE.MathUtils.degToRad(-90);

    scene.add(circle);

    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.5, 32), material);
    cone.position.x = 1;

    scene.add(cone);

    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 1, 32),
      material,
    );
    cylinder.position.z = 1.5;

    scene.add(cylinder);

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    plane.position.z = -1.5;

    scene.add(plane);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 64, 64),
      material,
    );
    sphere.position.z = -1;

    scene.add(sphere);

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
