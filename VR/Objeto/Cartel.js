import * as THREE from '../js/three.module.js';
import{RoundedBoxGeometry} from '../js/RoundedBoxGeometry.js';
import { FontLoader } from '../js/FontLoader.js';
import { TextGeometry } from '../js/TextGeometry.js';
export default function Obj3({ x, y, z }) {

    //Baston Pricipal
    var g1 = new THREE.CylinderGeometry(1.5, 1.5, 25, 32);
    var m1 = new THREE.MeshStandardMaterial({color: 0xFF0000});
    var baston = new THREE.Mesh(g1, m1);        
    baston.position.set(0, 10, 0);
    baston.castShadow = true;
    //scene.add(baston);

    var g2 = new THREE.CylinderGeometry(1.7, 1.7, 2, 32);
    var m2 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var baston2 = new THREE.Mesh(g2, m2);        
    baston2.position.set(0, 2, 0);
    baston2.rotation.set(0, 0, 0.185);
    baston2.castShadow = true;
    //scene.add(baston2);

    var g3 = new THREE.CylinderGeometry(1.7, 1.7, 2, 32);
    var m3 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var baston3 = new THREE.Mesh(g3, m3);        
    baston3.position.set(0, 6, 0);
    baston3.rotation.set(0, 0, 0.185);
    baston3.castShadow = true;
    //scene.add(baston3);

    var g4 = new THREE.CylinderGeometry(1.7, 1.7, 2, 32);
    var m4 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var baston4 = new THREE.Mesh(g4, m4);        
    baston4.position.set(0, 10, 0);
    baston4.rotation.set(0, 0, 0.185);
    baston4.castShadow = true;
    //scene.add(baston4);

    var g5 = new THREE.CylinderGeometry(1.7, 1.7, 2, 32);
    var m5 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var baston5 = new THREE.Mesh(g5, m5);        
    baston5.position.set(0, 14, 0);
    baston5.rotation.set(0, 0, 0.185);
    baston5.castShadow = true;
    //scene.add(baston5);

    var g6 = new THREE.CylinderGeometry(1.7, 1.7, 2, 32);
    var m6 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var baston6 = new THREE.Mesh(g6, m6);        
    baston6.position.set(0, 18, 0);
    baston6.rotation.set(0, 0, 0.185);
    baston6.castShadow = true;
    //scene.add(baston6);

    var g7 = new THREE.CylinderGeometry(1.7, 1.7, 2, 32);
    var m7 = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var baston7 = new THREE.Mesh(g7, m7);        
    baston7.position.set(0, 22, 0);
    baston7.rotation.set(0, 0, 0.185);
    baston6.castShadow = true;
    //scene.add(baston7);

    var g8 = new THREE.SphereGeometry(2, 32, 32);
    var m8 = new THREE.MeshStandardMaterial({color: 0xFFFF00});  
    var bola = new THREE.Mesh(g8, m8);        
    bola.position.set(0, 24, 0);  
    bola.castShadow = true;      
    //scene.add(bola);

    //cartel
    var g9 = new RoundedBoxGeometry(20, 12, 0.5, 10, 10);
    var m9 = new THREE.MeshStandardMaterial({color: 0x8B4513});
    var cartel = new THREE.Mesh(g9, m9);
    cartel.position.set(-10, 17, 0);
    cartel.castShadow = true;
    //scene.add(cartel);

    //Texto 1
    var loader = new FontLoader();

    var font = loader.parse(fontJSON);
    var g10 = new TextGeometry("Feliz", {
        font : font,
        size: 2,
        height: 2,
    });
    g10.center();

    var m10 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF,
        emissive: 0x0681CC,
        shading: THREE.FlatShading,
    });

    var mesh02 = new THREE.Mesh(g10,m10);
    //scene.add(mesh02);
    mesh02.position.set(-10,19,0);
    mesh02.castShadow = true;

    //texto 2
    var font = loader.parse(fontJSON);
    var g11 = new TextGeometry("Navidad", {
        font : font,
        size: 2,
        height: 2,
    });
    g11.center();

    var m11 = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF,
        emissive: 0x0681CC,
        shading: THREE.FlatShading,
    });

    var mesh03 = new THREE.Mesh(g11,m11);
    //scene.add(mesh03);
    mesh03.position.set(-10,16,0);
    mesh03.castShadow = true;

    var car = new THREE.Group();
    car.add(baston, baston2, baston3,baston4, baston5, baston6, baston7, bola, cartel, mesh02, mesh03);
    car.position.set(x, y, z);
    return car;

    }