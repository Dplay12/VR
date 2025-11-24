import * as THREE from '../js/three.module.js';
export default function Obj10({ x, y, z }) {
     // Asiento
var g1 = new THREE.BoxGeometry(20, 5, 15);
var m1 = new THREE.MeshStandardMaterial({color: 0xFF2600}); // marrón madera / cuero
var asiento = new THREE.Mesh(g1, m1);
asiento.position.set(0, 5, 0);
asiento.castShadow = true;
//scene.add(asiento);

// Respaldo
var g2 = new THREE.BoxGeometry(20, 29, 3);
var m2 = new THREE.MeshStandardMaterial({color: 0xFF2600});
var respaldo = new THREE.Mesh(g2, m2);
respaldo.position.set(0, 20, -6);
respaldo.castShadow = true;
//scene.add(respaldo);

// Apoyabrazos izquierdo
var g3 = new THREE.BoxGeometry(3, 8, 15);
var m3 = new THREE.MeshStandardMaterial({color: 0xFF2600});
var brazoIzq = new THREE.Mesh(g3, m3);
brazoIzq.position.set(-11.5, 8.5, 0);
brazoIzq.castShadow = true;
//scene.add(brazoIzq);

// Apoyabrazos derecho
var brazoDer = new THREE.Mesh(g3, m3);
brazoDer.position.set(11.5, 8.5, 0);
brazoDer.castShadow = true;
//scene.add(brazoDer);

// Cojín del asiento
var g4 = new THREE.BoxGeometry(18, 2, 13);
var m4 = new THREE.MeshStandardMaterial({color: 0xFF8169}); // tono más claro
var cojin = new THREE.Mesh(g4, m4);
cojin.position.set(0, 7.5, 0);
cojin.castShadow = true;
//scene.add(cojin);

// Cojín del respaldo
var g5 = new THREE.BoxGeometry(18, 28, 2);
var m5 = new THREE.MeshStandardMaterial({color: 0xFF8169});
var cojinRespaldo = new THREE.Mesh(g5, m5);
cojinRespaldo.position.set(0, 18, -5);
cojinRespaldo.castShadow = true;
//scene.add(cojinRespaldo);

// Patas del sillón
var g6 = new THREE.CylinderGeometry(0.8, 0.8, 3, 16);
var m6 = new THREE.MeshStandardMaterial({color: 0x3C2F2F});
var pata1 = new THREE.Mesh(g6, m6);
pata1.position.set(-8, 1.5, 6);
pata1.castShadow = true;
//scene.add(pata1);

var pata2 = new THREE.Mesh(g6, m6);
pata2.position.set(8, 1.5, 6);
pata2.castShadow = true;
//scene.add(pata2);

var pata3 = new THREE.Mesh(g6, m6);
pata3.position.set(-8, 1.5, -6);
pata3.castShadow = true;
//scene.add(pata3);

var pata4 = new THREE.Mesh(g6, m6);
pata4.position.set(8, 1.5, -6);
pata4.castShadow = true;
//scene.add(pata4);

    var silla= new THREE.Group();
    silla.add(asiento, respaldo, brazoIzq, brazoDer, cojin, cojinRespaldo, pata1, pata2, pata3, pata4);
    silla.position.set(x, y, z);
    return silla;
    
    }
