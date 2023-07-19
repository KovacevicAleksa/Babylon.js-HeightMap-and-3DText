import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = async () => {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);

  const groundFromHM = BABYLON.MeshBuilder.CreateGroundFromHeightMap('ground', '/heightmap.png', {
    width: 10,
    height: 10,
    subdivisions: 50,
    maxHeight: 2
  });

  groundFromHM.material = new BABYLON.StandardMaterial();
  groundFromHM.material.wireframe = true;


  return scene;
}

const scene = await createScene();

engine.runRenderLoop(function () {
  scene.render();
})


windows.addEventListener('resize', () => {
  engine.resize();
})
