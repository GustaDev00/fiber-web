import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import * as THREE from "three";

export const loadHDRI = (url: string, renderer: THREE.WebGLRenderer) => {
  return new Promise<THREE.Texture>((resolve) => {
    const loader = new RGBELoader();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    loader.load(url, (texture) => {
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      texture.dispose();
      pmremGenerator.dispose();
      resolve(envMap);
    });
  });
};
