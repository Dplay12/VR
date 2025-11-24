import * as THREE from '../js/three.module.js';
export default function Obj6({ x, y, z }) {

    var g1 = new THREE.SphereGeometry(5,20,20);(1.5, 4, .5, 25, 10);
    var m1 = new THREE.MeshStandardMaterial({color: 0x8B4513, side: THREE.DoubleSide});
    var mesh01 = new THREE.Mesh(g1, m1);       
    //scene.add(mesh01);
    mesh01.position.set(0,0,0);
    mesh01.scale.set(1,1,.3);
    mesh01.castShadow = true;

    var g2 = new THREE.SphereGeometry(5,20,20);
    var m2 = new THREE.MeshStandardMaterial({color: 0x8B4513 , side: THREE.DoubleSide});
    var mesh02 = new THREE.Mesh(g2, m2);       
    //scene.add(mesh02);
    mesh02.position.set(0,-12,0);
    mesh02.scale.set(.7,2,.3);
    mesh02.castShadow = true;

    var g3 = new THREE.SphereGeometry(5,20,20);
    var m3 = new THREE.MeshStandardMaterial({color: 0x8B4513 , side: THREE.DoubleSide});
    var mesh03 = new THREE.Mesh(g3, m3);       
    //scene.add(mesh03);
    mesh03.position.set(0,-8,0);
    mesh03.rotation.set(0,0,1.57);
    mesh03.scale.set(.7,2,.3);
    mesh03.castShadow = true;

    var g4 = new THREE.SphereGeometry(4.5,20,20);
    var m4 = new THREE.MeshStandardMaterial({color: 0x8B4513, side: THREE.DoubleSide});
    var mesh04 = new THREE.Mesh(g4, m4);       
    //scene.add(mesh04);
    mesh04.position.set(3.5,-22,0);
    mesh04.rotation.set(0,0,.555);
    mesh04.scale.set(.7,2,.3);
    mesh04.castShadow = true;

    var g5 = new THREE.SphereGeometry(4.5,20,20);
    var m5 = new THREE.MeshStandardMaterial({color: 0x8B4513, side: THREE.DoubleSide});
    var mesh05 = new THREE.Mesh(g5, m5);       
    //scene.add(mesh05);
    mesh05.position.set(-3.5,-22,0);
    mesh05.rotation.set(0,0,-0.555);
    mesh05.scale.set(.7,2,.3);
    mesh05.castShadow = true;

    var g6 = new THREE.SphereGeometry(1,20,20);
    var m6 = new THREE.MeshStandardMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
    var mesh06 = new THREE.Mesh(g6, m6);       
    //scene.add(mesh06);
    mesh06.position.set(2,1,1);
    mesh06.castShadow = true;

    var g7 = new THREE.SphereGeometry(1,20,20);
    var m7 = new THREE.MeshStandardMaterial({color: 0xFFFFFF,side: THREE.DoubleSide});
    var mesh07 = new THREE.Mesh(g7, m7);       
    //scene.add(mesh07);
    mesh07.position.set(-2,1,1);
    mesh07.castShadow = true;

    var g8 = new THREE.SphereGeometry(1,20,20);
    var m8 = new THREE.MeshStandardMaterial({color: 0xFF0000, side: THREE.DoubleSide});
    var mesh08 = new THREE.Mesh(g8, m8);       
    //scene.add(mesh08);
    mesh08.position.set(0,-7.5,1);
    mesh08.castShadow = true;

    var g9 = new THREE.SphereGeometry(1,20,20);
    var m9 = new THREE.MeshStandardMaterial({color: 0xFF0000,side: THREE.DoubleSide});
    var mesh09 = new THREE.Mesh(g9, m9);       
    //scene.add(mesh09);
    mesh09.position.set(0,-11,1);
    mesh09.castShadow = true;

    var g10 = new THREE.SphereGeometry(1,20,20);
    var mesh11 = new THREE.Mesh(g11, m11);       
    var m10 = new THREE.MeshStandardMaterial({color: 0xFF0000,});
    var mesh10 = new THREE.Mesh(g10, m10);       
    //scene.add(mesh10);
    mesh10.position.set(0,-14.5,1);
    mesh10.castShadow = true;

    var g11 = new THREE.SphereGeometry(1,20,20);
    var m11 = new THREE.MeshStandardMaterial({color: 0x24B300, side: THREE.DoubleSide});
    var mesh11 = new THREE.Mesh(g11, m11);       
    //scene.add(mesh11);
    mesh11.position.set(0,-3.5,1);
    mesh11.castShadow = true;

    var g12 = new THREE.ConeGeometry(1,3,500);
    var m12 = new THREE.MeshLambertMaterial({
        color:0x24B300, side: THREE.DoubleSide
    });
    var mesh12 = new THREE.Mesh(g12,m12);
    //scene.add(mesh12);
    mesh12.position.set(-1,-3.5,1);
    mesh12.rotation.set(0,0,-1.57);

    var g13 = new THREE.ConeGeometry(1,3,500);
    var m13 = new THREE.MeshLambertMaterial({
        color:0x24B300, side: THREE.DoubleSide
    });
    var mesh13 = new THREE.Mesh(g13,m13);
    //scene.add(mesh13);
    mesh13.position.set(1,-3.5,1);
    mesh13.rotation.set(0,0,1.57);

    var gall = new THREE.Group();
    gall.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13);
    gall.position.set(x, y, z);
    return gall;
}