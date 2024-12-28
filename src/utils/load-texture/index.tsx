import * as THREE from "three";

export const loadTexture = async (url: string): Promise<THREE.Texture> => {
  const textureLoader = new THREE.TextureLoader();
  return new Promise<THREE.Texture>((resolve, reject) => {
    textureLoader.load(
      url,
      (texture) => {
        resolve(texture);
      },
      undefined,
      (error) => {
        reject(error);
      },
    );
  });
};
