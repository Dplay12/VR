import * as THREE from '../js/three.module.js';
export default function Obj2({ x, y, z }) {

    //Arbol
    var g1 = new THREE.ConeGeometry(5, 60, 50);
    var m1 = new THREE.MeshLambertMaterial({ color: 0x6E3D17});
    var mesh01 = new THREE.Mesh(g1, m1);
    mesh01.position.set(0,30,0);
    mesh01.castShadow = true;
    //scene.add(mesh01);

    var g2 = new THREE.ConeGeometry(25, 25, 50);
    var m2 = new THREE.MeshLambertMaterial({ color: 0x056300});
    var mesh02 = new THREE.Mesh(g2, m2);
    mesh02.position.set(0,30,0);
    mesh02.castShadow = true;
    //scene.add(mesh02);

    var g3 = new THREE.ConeGeometry(20, 20, 50);
    var m3 = new THREE.MeshLambertMaterial({ color: 0x056300});
    var mesh03 = new THREE.Mesh(g3, m3);
    mesh03.position.set(0,40,0);
    mesh03.castShadow = true;
    //scene.add(mesh03);

    var g4 = new THREE.ConeGeometry(15, 20, 50);
    var m4 = new THREE.MeshLambertMaterial({ color: 0x056300});
    var mesh04 = new THREE.Mesh(g4, m4);
    mesh04.position.set(0,50,0);
    mesh04.castShadow = true;
    //scene.add(mesh04);

    var g5 = new THREE.ConeGeometry(10, 20, 50);
    var m5 = new THREE.MeshLambertMaterial({ color: 0x056300});
    var mesh05 = new THREE.Mesh(g5, m5);
    mesh05.position.set(0,60,0);
    mesh05.castShadow = true;
    //scene.add(mesh05);

    var g6 = new THREE.ConeGeometry(5, 12, 50);
    var m6 = new THREE.MeshLambertMaterial({ color: 0x056300});
    var mesh06 = new THREE.Mesh(g6, m6);
    mesh06.position.set(0,68,0);
    mesh06.castShadow = true;
    //scene.add(mesh06);

    var ar1= new THREE.Group();
    ar1.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06);
    ar1.position.set(x,y,z);
    return ar1;
    }
