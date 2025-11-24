import * as THREE from '../js/three.module.js';
export default function Obj4({ x, y, z }) {

    //Pirncipal caja
    
    var g1 = new THREE.BoxGeometry(10,10,10);
    var m1 = new THREE.MeshLambertMaterial({
        color: 0x6CC72E, side: THREE.DoubleSide
    });
    var mesh01 = new THREE.Mesh(g1,m1);
    mesh01.castShadow = true;
    //scene.add(mesh01);
    mesh01.position.set(0,0,0);

    var g2 = new THREE.BoxGeometry(11,4,11);
    var m2 = new THREE.MeshLambertMaterial({
        color: 0x6CC72E, side: THREE.DoubleSide
    });
    var mesh02 = new THREE.Mesh(g2,m2);
    mesh02.castShadow = true;
    //scene.add(mesh02);
    mesh02.position.set(0,6,0);

   // Cinta horizontal 1
    var g3 = new THREE.BoxGeometry(12,4.5,2);
    var m3 = new THREE.MeshLambertMaterial({
        color: 0xE31E24, side: THREE.DoubleSide
    });
    var mesh03 = new THREE.Mesh(g3,m3);
    mesh03.castShadow = true;
    //scene.add(mesh03);
    mesh03.position.set(0,6.2,0);

    // Cinta vertical 1
    var g4 = new THREE.BoxGeometry(2,4.5,12);
    var m4 = new THREE.MeshLambertMaterial({
        color: 0xE31E24, side: THREE.DoubleSide
    });
    var mesh04 = new THREE.Mesh(g4,m4);
    mesh04.castShadow = true;
    //scene.add(mesh04);
    mesh04.position.set(0,6.2,0);

    // Cinta horizontal 2
    var g3 = new THREE.BoxGeometry(11,10,2);
    var m3 = new THREE.MeshLambertMaterial({
        color: 0xE31E24, side: THREE.DoubleSide
    });
    var mesh03 = new THREE.Mesh(g3,m3);
    mesh03.castShadow = true;
    //scene.add(mesh03);
    mesh03.position.set(0,-0.1,0);

    // Cinta vertical 2
    var g4 = new THREE.BoxGeometry(2,10,11);
    var m4 = new THREE.MeshLambertMaterial({
        color: 0xE31E24, side: THREE.DoubleSide
    });
    var mesh04 = new THREE.Mesh(g4,m4);
    mesh04.castShadow = true;
    //scene.add(mesh04);
    mesh04.position.set(0,-0.1,0);

    //moño
    var g5 = new THREE.TorusGeometry(2,1,50,10);
    var m5 = new THREE.MeshLambertMaterial({
        color: 0xE31E24, side: THREE.DoubleSide
    }); 
    var mesh05 = new THREE.Mesh(g5,m5);
    mesh05.castShadow = true;
    //scene.add(mesh05);  
    mesh05.position.set(0,9,0);

    var g6 = new THREE.TorusGeometry(2,1,50,10);
    var m6 = new THREE.MeshLambertMaterial({
        color: 0xE31E24, side: THREE.DoubleSide
    }); 
    var mesh06 = new THREE.Mesh(g6,m6);
    mesh06.castShadow = true;
    //scene.add(mesh06);  
    mesh06.position.set(0,9,0);
    mesh06.rotation.set(0,1.57,0);

     var g7 = new THREE.TorusGeometry(2,1,50,10);
    var m7 = new THREE.MeshLambertMaterial({
        color: 0xE31E24, side: THREE.DoubleSide
    }); 
    var mesh07 = new THREE.Mesh(g7,m7);
    mesh07.castShadow = true;
    //scene.add(mesh07);  
    mesh07.position.set(0,9,0);
    mesh07.rotation.set(0,.785,0);

    var g8 = new THREE.TorusGeometry(2,1,50,10);
    var m8 = new THREE.MeshLambertMaterial({
        color: 0xE31E24, side: THREE.DoubleSide
    }); 
    var mesh08 = new THREE.Mesh(g8,m8);
    mesh08.castShadow = true;
    //scene.add(mesh08);  
    mesh08.position.set(0,9,0);
    mesh08.rotation.set(0,1.57,0);
    mesh08.rotation.set(0,-.785,0);

    var reg = new THREE.Group();
    reg.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08);
    reg.position.set(x, y, z);
    return reg;
}