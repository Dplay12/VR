import * as THREE from '../js/three.module.js';
export default function Obj11({ x, y, z }) {
    
    var g2 = new THREE.CylinderGeometry(5,5,2,50);
    var m2 = new THREE.MeshLambertMaterial({color:0xABABAB, side: THREE.DoubleSide});
    var mesh02 = new THREE.Mesh(g2,m2);
    //scene.add(mesh02);
    mesh02.position.set(0,1,0);
    mesh02.castShadow= true;

    var g3 = new THREE.CylinderGeometry(3,4,8,50);
    var m3 = new THREE.MeshLambertMaterial({color:0xABABAB, side: THREE.DoubleSide});
    var mesh03 = new THREE.Mesh(g3,m3);
    //scene.add(mesh03);
    mesh03.position.set(0,6,0);
    mesh03.castShadow= true;

    var g4 = new THREE.CylinderGeometry(2,2,50,50);
    var m4 = new THREE.MeshLambertMaterial({color:0xABABAB, side: THREE.DoubleSide});
    var mesh04 = new THREE.Mesh(g4,m4);
    //scene.add(mesh04);
    mesh04.position.set(0,30,0);
    mesh04.castShadow= true;

    var g5 = new THREE.TorusGeometry(3,1.5,50,50,10);
    var m5 = new THREE.MeshLambertMaterial({color: 0xABABAB, side: THREE.DoubleSide});
    var mesh05 = new THREE.Mesh(g5,m5);
    //scene.add(mesh05);
    mesh05.position.set(0,9,0);
    mesh05.rotation.set(1.57,0,0);
    mesh05.castShadow= true;

    var g6 = new THREE.TorusGeometry(3,1.5,50,50,10);
    var m6 = new THREE.MeshLambertMaterial({color: 0xABABAB, side: THREE.DoubleSide});
    var mesh06 = new THREE.Mesh(g6,m6);
    //scene.add(mesh06);
    mesh06.position.set(0,53.5,0);
    mesh06.rotation.set(1.57,0,0);
    mesh06.castShadow= true;

    var g7 = new THREE.BoxGeometry(10,10,10);
    var m7 = new THREE.MeshLambertMaterial({color: 0xF59116, side: THREE.DoubleSide, transparent: true, opacity: 0.5});
    var mesh07 = new THREE.Mesh(g7,m7);
    //scene.add(mesh07);
    mesh07.position.set(0,60,0);
    mesh07.castShadow= true;

    var g8 = new THREE.CylinderGeometry(4,4,2,50);
    var m8 = new THREE.MeshLambertMaterial({color: 0xABABAB, side: THREE.DoubleSide});
    var mesh08 = new THREE.Mesh(g8,m8);
    //scene.add(mesh08);
    mesh08.position.set(0,66,0);
    mesh08.castShadow= true;

    var g9 = new THREE.CylinderGeometry(2,2,1,50);
    var m9 = new THREE.MeshLambertMaterial({color: 0xABABAB, side: THREE.DoubleSide});
    var mesh09 = new THREE.Mesh(g9,m9);
    //scene.add(mesh09);
    mesh09.position.set(0,67,0);
    mesh09.castShadow= true;

    var poste = new THREE.Group();
    poste.add(mesh02, mesh03, mesh04,mesh05, mesh06,mesh07,mesh08,mesh09);
    poste.position.set(x, y, z);
    return poste;
    
    }
