import * as THREE from '../js/three.module.js';
import{RoundedBoxGeometry} from '../js/RoundedBoxGeometry.js';
export default function Obj12({ x, y, z }) {

    var g1= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m1= new THREE.MeshLambertMaterial({color:  0x045400});
    var mesh1 = new THREE.Mesh(g1,m1);
    //scene.add(mesh1);

    var g2= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m2= new THREE.MeshLambertMaterial({color:  0x045400});
    var mesh2 = new THREE.Mesh(g2,m2);
    mesh2.rotation.set(0,0,1.57);
    //scene.add(mesh2);
    
    var g3= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m3= new THREE.MeshLambertMaterial({color: 0x045400});
    var mesh3 = new THREE.Mesh(g3,m3);
    mesh3.rotation.set(0,0,.785);
    //scene.add(mesh3);

    var g4= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m4= new THREE.MeshLambertMaterial({color: 0x045400});
    var mesh4 = new THREE.Mesh(g4,m4);
    mesh4.rotation.set(0,0,-.785);
   // scene.add(mesh4);

    var g5= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m5= new THREE.MeshLambertMaterial({color: 0x045400});
    var mesh5 = new THREE.Mesh(g5,m5);
    mesh5.rotation.set(1.57,0,0);
    //scene.add(mesh5);
    
    var g6= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m6= new THREE.MeshLambertMaterial({color: 0x045400});
    var mesh6 = new THREE.Mesh(g6,m6);
    mesh6.rotation.set(0.785,0,0);
    //scene.add(mesh6);
    
    var g7= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m7= new THREE.MeshLambertMaterial({color: 0x045400});
    var mesh7 = new THREE.Mesh(g7,m7);
    mesh7.rotation.set(-.785,0,0);
    //scene.add(mesh7);

    var g8= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m8= new THREE.MeshLambertMaterial({color:  0x045400});
    var mesh8 = new THREE.Mesh(g8,m8);
    mesh8.rotation.set(1.57,0,0.785);
    //scene.add(mesh8);
    
    var g9= new RoundedBoxGeometry(.5,3,.5,50,1);
    var m9= new THREE.MeshLambertMaterial({color:  0x045400});
    var mesh9 = new THREE.Mesh(g9,m9);
    mesh9.rotation.set(0.585,0,0.785);
    //scene.add(mesh9);
    
    var g10= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m10= new THREE.MeshLambertMaterial({color:  0x045400});
    var mesh10 = new THREE.Mesh(g10,m10);
    mesh10.rotation.set(-.585,0,0.785);
    //scene.add(mesh10);

    var g11= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m11= new THREE.MeshLambertMaterial({color:  0x045400});
    var mesh11 = new THREE.Mesh(g11,m11);
    mesh11.rotation.set(1.57,0,-0.785);
    //scene.add(mesh11);
    
    var g12= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m12= new THREE.MeshLambertMaterial({color:  0x045400});
    var mesh12 = new THREE.Mesh(g12,m12);
    mesh12.rotation.set(0.585,0,-0.785);
    //scene.add(mesh12);
    
    var g13= new RoundedBoxGeometry(.5,3,.5,1,1);
    var m13= new THREE.MeshLambertMaterial({color: 0x045400});
    var mesh13 = new THREE.Mesh(g13,m13);
    mesh13.rotation.set(-.585,0,-0.785);
    //scene.add(mesh13);

    var hoja = new THREE.Group();
    hoja.add(mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10);
    //scene.add(hoja);

    var hoja1 = hoja.clone();
    hoja1.position.set(4, 0, 0);
    //scene.add(hoja1);

    var hoja2 = hoja.clone();
    hoja2.position.set(3.7, 0, 1.52);
    //scene.add(hoja2);

    var hoja3 = hoja.clone();
    hoja3.position.set(1.52, 0, 3.7);
    //scene.add(hoja3);

    var hoja4 = hoja.clone();
    hoja4.position.set(0, 0, 4);
    //scene.add(hoja4);

    var hoja5 = hoja.clone();
    hoja5.position.set(2.82, 0, 2.82);
    //scene.add(hoja5);

    var hoja6 = hoja.clone();
    hoja6.position.set(-1.52, 0, 3.7);
    //scene.add(hoja6);

    var hoja7 = hoja.clone();
    hoja7.position.set(-2.82, 0, 2.82);
    //scene.add(hoja7);

    var hoja8 = hoja.clone();
    hoja8.position.set(-3.7, 0, 1.52);
    //scene.add(hoja8);

    var hoja9 = hoja.clone();
    hoja9.position.set(-4, 0, 0);
    //scene.add(hoja9);

    var hoja10 = hoja.clone();
    hoja10.position.set(-3.7, 0, -1.52);
    //scene.add(hoja10);

    var hoja11 = hoja.clone();
    hoja11.position.set(-2.82, 0, -2.82);
    //scene.add(hoja11);

    var hoja12 = hoja.clone();
    hoja12.position.set(-1.52, 0, -3.7);
    //scene.add(hoja12);

    var hoja13 = hoja.clone();
    hoja13.position.set(0, 0, -4);
    //scene.add(hoja13);

    var hoja14 = hoja.clone();
    hoja14.position.set(1.52, 0, -3.7);
    //scene.add(hoja14);

    var hoja15 = hoja.clone();
    hoja15.position.set(2.82, 0, -2.82);
    //scene.add(hoja15);

    var hoja16 = hoja.clone();
    hoja16.position.set(3.7, 0, -1.52);
    //scene.add(hoja16);

    //Moño
    var g14 = new THREE.ConeGeometry(5,10,30,1);
    var m14 = new THREE.MeshLambertMaterial({color:0xFF0000, side: THREE.DoubleSide });
    var mesh14 = new THREE.Mesh(g14,m14);
    //scene.add(mesh14);
    mesh14.position.set(1,1,3.5);
    mesh14.rotation.set(1.57,0,1.57);
    mesh14.scale.set(.3,0.3,.3);

    var g15 = new THREE.ConeGeometry(5,10,30,1);
    var m15 = new THREE.MeshLambertMaterial({color:0xFF0000, side: THREE.DoubleSide });
    var mesh15 = new THREE.Mesh(g15,m15);
    //scene.add(mesh15);
    mesh15.position.set(-1,1,3.5);
    mesh15.rotation.set(1.57,0,-1.57);
    mesh15.scale.set(.3,0.3,.3);

    var corona= new THREE.Group();
    corona.add( mesh14, mesh15,hoja1,hoja2,hoja3, hoja4, hoja5, hoja6, hoja7, hoja8, hoja9, hoja10,hoja11, hoja12, hoja13, hoja14, hoja15, hoja16
    );
    corona.position.set(x, y, z);
    return corona;
    
    }


