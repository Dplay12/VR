import * as THREE from '../js/three.module.js';
export default function Obj7({ x, y, z }) {
    
    //cuerpo del hombre de nieve
    var g1 = new THREE.SphereGeometry(10,32,32);
    var m1 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var cuerpo = new THREE.Mesh(g1, m1);
    cuerpo.position.set(0, 5, 0);
    cuerpo.castShadow = true;
    //scene.add(cuerpo);

    var g2 = new THREE.SphereGeometry(7,32,32);
    var m2 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var cuerpo1 = new THREE.Mesh(g2, m2);
    cuerpo1.position.set(0, 17, 0);
    cuerpo1.castShadow = true;
    //scene.add(cuerpo1);

    var g3 = new THREE.SphereGeometry(4,32,32);
    var m3 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var cabeza = new THREE.Mesh(g3, m3);
    cabeza.position.set(0, 27, 0);
    cabeza.castShadow = true;
    //scene.add(cabeza);

    //sombrero
    var g4 = new THREE.CylinderGeometry(5,5,1,32);
    var m4 = new THREE.MeshStandardMaterial({color: 0x000000});    
    var baseSombrero = new THREE.Mesh(g4, m4);
    baseSombrero.position.set(0, 30, 0);
    baseSombrero.castShadow = true;
    //scene.add(baseSombrero);

    var g5 = new THREE.CylinderGeometry(3,3,6,32);
    var m5 = new THREE.MeshStandardMaterial({color: 0x000000});         
    var copaSombrero = new THREE.Mesh(g5, m5);
    copaSombrero.position.set(0, 33, 0);    
    copaSombrero.castShadow = true;
    //scene.add(copaSombrero);

    //Rostro
    var g6 = new THREE.SphereGeometry(0.5,32,32);
    var m6 = new THREE.MeshStandardMaterial({color: 0x000000});     
    var ojoIzquierdo = new THREE.Mesh(g6, m6);
    ojoIzquierdo.position.set(-1.5, 27, 3.7);
    //scene.add(ojoIzquierdo);

    var ojoDerecho = new THREE.Mesh(g6, m6);
    ojoDerecho.position.set(1.5, 27, 3.7);
    //scene.add(ojoDerecho);

    var g7 = new THREE.SphereGeometry(1,32,32);
    var m7 = new THREE.MeshStandardMaterial({color: 0x000000});     
    var corbata = new THREE.Mesh(g7, m7);
    corbata.position.set(0, 17.5, 7.5);
    //scene.add(corbata);

    var cor1 = new THREE.Mesh(g7, m7);
    cor1.position.set(0, 17.5, 7.5);        
    //scene.add(cor1);

    var cor2 = new THREE.Mesh(g7, m7);
    cor2.position.set(0, 21.5, 6.5);        
    //scene.add(cor2);

    var cor3 = new THREE.Mesh(g7, m7);
    cor3.position.set(0, 13.5, 7 );        
    //scene.add(cor3);

    //Nariz
    var g7 = new THREE.ConeGeometry(0.5,3,32)   
    var m7 = new THREE.MeshStandardMaterial({color: 0xFF5733});
    var nariz = new THREE.Mesh(g7, m7);
    nariz.rotation.set(1.57,0,0);
    nariz.position.set(0, 26, 5);
    nariz.castShadow = true;
    //scene.add(nariz);

    var hombreNieve = new THREE.Group();
    hombreNieve.add(cuerpo, cuerpo1, cabeza, nariz, baseSombrero, copaSombrero, ojoIzquierdo, ojoDerecho, corbata, cor1, cor2, cor3);
    hombreNieve.position.set(x, y, z);
    return hombreNieve;
    
    }
