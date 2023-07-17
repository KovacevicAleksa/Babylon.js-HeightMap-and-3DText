import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = async () => {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultLight();
  //const camera = new BABYLON.UniversalCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
  const camera = new BABYLON.ArcRotateCamera('camera',0,0,10, new BABYLON.Vector3(0,0,0 ), scene);
  camera.attachControl(true);
  //camera.inputs.addMouseWheel();
  //camera.setTarget(BABYLON.Vector3.Zero());

  camera.setPosition(new BABYLON.Vector3(0, 0, -20));
  camera.lowerBetaLimit = Math.PI /4;
  camera.upperBetaLimit = Math.PI /2;

  camera.lowerRadiusLimit = 20;
  camera.upperRadiusLimit = 50;

/*
  const groundFromHM = BABYLON.MeshBuilder.CreateGroundFromHeightMap('ground', '/heightmap.png', {
    width: 10,
    height: 10,
    subdivisions: 50,
    maxHeight: 2
  });

  groundFromHM.material = new BABYLON.StandardMaterial();
  groundFromHM.material.wireframe = true;
  */

  const fontData = await (await fetch('/Montserrat_Regular.json')).json();
  const text = BABYLON.MeshBuilder.CreateText('','Test',fontData, {
    size:2,
    depth:0.1,
    resolution:64
  });

  return scene;
}

const scene = await createScene();

engine.runRenderLoop(function () {
  scene.render();
})


windows.addEventListener('resize', () => {
  engine.resize();
})