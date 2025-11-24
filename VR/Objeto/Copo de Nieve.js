// CopoDeNieve.js
import * as THREE from '../js/three.module.js';

export default function Obj13({ x, y, z }) {

    // Geometría larga y delgada
    var geometry1 = new THREE.CylinderGeometry(0.1, 0.1, 10);

    // Material
    var material1 = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });

    // Grupo principal
    var copo = new THREE.Group();

    // BRAZO 1
    var brazo1 = new THREE.Group();

    var pieza1 = new THREE.Mesh(geometry1, material1);
    brazo1.add(pieza1);

    var ramita1 = new THREE.Mesh(geometry1, material1);
    ramita1.scale.set(1, 0.4, 1);
    ramita1.rotation.set(0, 0, 0.6);
    ramita1.position.set(0, 4, 0);
    brazo1.add(ramita1);

    copo.add(brazo1);

    // BRAZO 2
    var brazo2 = brazo1.clone();
    brazo2.rotation.set(0, 0, 1.047);
    copo.add(brazo2);

    // BRAZO 3
    var brazo3 = brazo1.clone();
    brazo3.rotation.set(0, 0, 2.094);
    copo.add(brazo3);

    // BRAZO 4
    var brazo4 = brazo1.clone();
    brazo4.rotation.set(0, 0, 3.142);
    copo.add(brazo4);

    // BRAZO 5
    var brazo5 = brazo1.clone();
    brazo5.rotation.set(0, 0, 4.189);
    copo.add(brazo5);

    // BRAZO 6
    var brazo6 = brazo1.clone();
    brazo6.rotation.set(0, 0, 5.236);
    copo.add(brazo6);

    // Posición final
    copo.position.set(x, y, z);

    return copo;
}
