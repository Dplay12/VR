import * as THREE from '../js/three.module.js';
export default function Obj9({ x, y, z }) {

// Espacio para colocar los objetos

    var g1 = new THREE.CylinderGeometry(1, 1, 30, 32);
    var m1 = new THREE.MeshStandardMaterial({color: 0xFFF5CC});
    var palito = new THREE.Mesh(g1, m1);
    palito.position.set(0, 0, 0);
    palito.castShadow = true;
    //scene.add(palito);

    //paleta
    var g2 = new THREE.TorusGeometry(1, 1, 30, 100);
    var m2 = new THREE.MeshStandardMaterial({color: 0xFF0000});
    var paleta = new THREE.Mesh(g2, m2);
    paleta.position.set(0, 15, 0);
    paleta.castShadow = true;
    //scene.add(paleta);

    var g3 = new THREE.TorusGeometry(2, 1, 16, 100);
    var m3 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var paleta2 = new THREE.Mesh(g3, m3);   
    paleta2.position.set(0, 15, 0);
    paleta2.castShadow = true;
    //scene.add(paleta2);

    var g4 = new THREE.TorusGeometry(3, 1, 16, 100);
    var m4 = new THREE.MeshStandardMaterial({color: 0xFF0000});
    var paleta3 = new THREE.Mesh(g4, m4);
    paleta3.position.set(0, 15, 0);
    paleta3.castShadow = true;
    //scene.add(paleta3);

    var g5 = new THREE.TorusGeometry(4, 1, 16, 100);
    var m5 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var paleta4 = new THREE.Mesh(g5, m5);
    paleta4.position.set(0, 15, 0);
    paleta4.castShadow = true;
    //scene.add(paleta4);

    var g6 = new THREE.TorusGeometry(5, 1, 16, 100);
    var m6 = new THREE.MeshStandardMaterial({color: 0xFF0000});
    var paleta5 = new THREE.Mesh(g6, m6);
    paleta5.position.set(0, 15, 0);
    paleta5.castShadow = true;
    //scene.add(paleta5);

    var g7 = new THREE.TorusGeometry(6, 1, 16, 100);
    var m7 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var paleta6 = new THREE.Mesh(g7, m7);
    paleta6.position.set(0, 15, 0);
    paleta6.castShadow = true;
    //scene.add(paleta6);

    var g8 = new THREE.TorusGeometry(7, 1, 16, 100);
    var m8 = new THREE.MeshStandardMaterial({color: 0xFF0000});
    var paleta7 = new THREE.Mesh(g8, m8);
    paleta7.position.set(0, 15, 0);
    paleta7.castShadow = true;
    //scene.add(paleta7);

    var pal= new THREE.Group();
    pal.add(palito, paleta, paleta2, paleta3, paleta4, paleta5, paleta6, paleta7);
    pal.position.set(x, y, z);
    return pal;

    }
