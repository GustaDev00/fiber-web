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

    const material = new THREE.MeshLambertMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
    });

    const tube = new THREE.Mesh(new THREE.TorusGeometry(1, 0.4, 16, 100), material);
    tube.rotation.x = THREE.MathUtils.degToRad(90);
    scene.add(tube);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.enableZoom = true;
    controls.screenSpacePanning = false;

    controls.minDistance = 1;
    controls.maxDistance = 20;

    controls.maxPolarAngle = Math.PI / 2;

    renderer.setAnimationLoop(() => {
      tube.rotation.y += 0.009;
      tube.rotation.x += 0.001;

      controls.update();
      renderer.render(scene, camera);
    });
  }, []);

  // return <div ref={ref} style={{ width: "400px", height: "400px" }} />;

  return (
    <S.Abstract3d ref={containerRef}>
      <S.Img src="/imgs/abstract.png" />
    </S.Abstract3d>
  );
};
