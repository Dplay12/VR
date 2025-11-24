import * as THREE from '../js/three.module.js';
import { RoundedBoxGeometry } from '../js/RoundedBoxGeometry.js';
export default function Obj4({ x, y, z }) {

    // paredes
    var g1 = new RoundedBoxGeometry(0.5, 5, 20, 5, 5);
    var m1 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared1 = new THREE.Mesh(g1, m1);
    pared1.position.set(-10, 0, 0);
    pared1.castShadow = true;
    //scene.add(pared1);

    var g2 = new RoundedBoxGeometry(0.5, 5, 20, 5, 5);
    var m2 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared2 = new THREE.Mesh(g2, m2);
    pared2.position.set(10, 0, 0);
    pared2.castShadow = true;
    //scene.add(pared2);

    var g3 = new RoundedBoxGeometry(0.5, 10, 3, 5, 5);
    var m3 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared3 = new THREE.Mesh(g3, m3);
    pared3.position.set(-10, 7, -8.5);
    pared3.castShadow = true;
    //scene.add(pared3);

    var g4 = new RoundedBoxGeometry(0.5, 10, 3, 5, 5);
    var m4 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared4 = new THREE.Mesh(g4, m4);
    pared4.position.set(-10, 7, 0);
    pared4.castShadow = true;
    //scene.add(pared4);

    var g5 = new RoundedBoxGeometry(0.5, 10, 3, 5, 5);
    var m5 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared5 = new THREE.Mesh(g5, m5);
    pared5.position.set(-10, 7, 8.5);
    pared5.castShadow = true;
    //scene.add(pared5);

    var g6 = new RoundedBoxGeometry(0.5, 10, 3, 5, 5);
    var m6 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared6 = new THREE.Mesh(g6, m6);
    pared6.position.set(10, 7, 8.5);
    pared6.castShadow = true;
    //scene.add(pared6);

    var g7 = new RoundedBoxGeometry(0.5, 10, 3, 5, 5);
    var m7 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared7 = new THREE.Mesh(g7, m7);
    pared7.position.set(10, 7, 0);
    pared7.castShadow = true;
    //scene.add(pared7);

    var g8 = new RoundedBoxGeometry(0.5, 10, 3, 5, 5);
    var m8 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared8 = new THREE.Mesh(g8, m8);
    pared8.position.set(10, 7, -8.5);
    pared8.castShadow = true;
    //scene.add(pared8);

    var g9 = new RoundedBoxGeometry(0.5, 5, 20, 5, 5);
    var m9 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared9 = new THREE.Mesh(g9, m9);
    pared9.position.set(-10, 13.5, 0);
    pared9.castShadow = true;
    //scene.add(pared9);

    var g10 = new RoundedBoxGeometry(0.5, 5, 20, 5, 5);
    var m10 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared10 = new THREE.Mesh(g10, m10);
    pared10.position.set(10, 13.5, 0);
    pared10.castShadow = true;
    //scene.add(pared10);

    var g11 = new RoundedBoxGeometry(20, 18.5, 0.5, 5, 5);
    var m11 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared11 = new THREE.Mesh(g11, m11);
    pared11.position.set(0, 7, -10);
    pared11.castShadow = true;
    //scene.add(pared11);

    var g12 = new RoundedBoxGeometry(8, 13, 0.5, 5, 5);
    var m12 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared12 = new THREE.Mesh(g12, m12);
    pared12.position.set(-6, 4, 10);
    pared12.castShadow = true;
    //scene.add(pared12);

    var g13 = new RoundedBoxGeometry(8, 13, 0.5, 5, 5);
    var m13 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared13 = new THREE.Mesh(g13, m13);
    pared13.position.set(6, 4, 10);
    pared12.castShadow = true;
    //scene.add(pared13);

    var g14 = new RoundedBoxGeometry(20, 8, 0.5, 5, 5);
    var m14 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared14 = new THREE.Mesh(g14, m14);
    pared14.position.set(0, 12, 10);
    pared14.castShadow = true;
    //scene.add(pared14);

    var g15 = new RoundedBoxGeometry(20, .5, 20, 5, 5);
    var m15 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared15 = new THREE.Mesh(g15, m15);
    pared15.position.set(0, -2.5, 0);
    pared15.castShadow = true;
    //scene.add(pared15);

    var g16 = new RoundedBoxGeometry(20, .5, 20, 5, 5);
    var m16 = new THREE.MeshLambertMaterial({ color: 0xB0823A
    });
    var pared16 = new THREE.Mesh(g16, m16);
    pared16.position.set(0, 16, 0);
    pared16.castShadow = true;
    //scene.add(pared16);

    var g17 = new RoundedBoxGeometry(5, 13, .5, 5, 5);
    var m17 = new THREE.MeshLambertMaterial({ color: 0x63461D
    });
    var puerta = new THREE.Mesh(g17, m17);
    puerta.position.set(0, 4, 9.5);
    puerta.castShadow = true;
    //scene.add(puerta);

    var g18 = new THREE.ConeGeometry(14.5, 10,100);
    var m18 = new THREE.MeshLambertMaterial({ color: 0x63461D
    });
    var techo1 = new THREE.Mesh(g18, m18);
    techo1.position.set(0, 21, 9);
    techo1.rotation.set(0,0,0);
    techo1.scale.set(.7,1,.1);
    techo1.castShadow = true;
    //scene.add(techo1);

    var g19 = new THREE.ConeGeometry(14.5, 10,100);
    var m19 = new THREE.MeshLambertMaterial({ color: 0x63461D
    });
    var techo2 = new THREE.Mesh(g19, m19);
    techo2.position.set(0, 21, -9);
    techo2.rotation.set(0,0,0);
    techo2.scale.set(.7,1,.1);
    techo2.castShadow = true;
    //scene.add(techo2);

    var g20 = new RoundedBoxGeometry(15, 22, 0.5, 5, 5);
    var m20 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF
    }); 
    var techo3 = new THREE.Mesh(g20, m20);
    techo3.position.set(-5, 21, 0);
    techo3.rotation.set(1.57,0.785,0);
    techo3.castShadow = true;
    //scene.add(techo3);

    var g21 = new RoundedBoxGeometry(15, 22, 0.5, 5, 5);
    var m21 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF
    }); 
    var techo4 = new THREE.Mesh(g21, m21);
    techo4.position.set(5, 21, 0);
    techo4.rotation.set(1.57,-0.785,0);
    techo4.castShadow = true;
    //scene.add(techo4);

    //Ventanas
    var g22 = new RoundedBoxGeometry(1, 9, 0.5, 5, 5);
    var m22 = new THREE.MeshLambertMaterial({ color: 0xFFFFFFF
    });
    var ventana1 = new THREE.Mesh(g22, m22);
    ventana1.position.set(-10.5, 6.5, 7.5);
    ventana1.rotation.set(0,1.57,0);
    ventana1.castShadow = true;
    //scene.add(ventana1);

    var ventana2 = new THREE.Mesh(g22, m22);
    ventana2.position.set(-10.5, 6.5, 1);
    ventana2.rotation.set(0,1.57,0);
    ventana2.castShadow = true;
    //scene.add(ventana2);

    var ventana3 = new THREE.Mesh(g22, m22);
    ventana3.position.set(-10.5, 6.5, -1);
    ventana3.rotation.set(0,1.57,0);
    ventana3.castShadow = true;
    //scene.add(ventana3);

    var ventana4 = new THREE.Mesh(g22, m22);
    ventana4.position.set(-10.5, 6.5, -7.5);
    ventana4.rotation.set(0,1.57,0);
    ventana4.castShadow = true;
    //scene.add(ventana4);

    var ventana5 = new THREE.Mesh(g22, m22);
    ventana5.position.set(-10.5, 6.5, -4);
    ventana5.rotation.set(0,1.57,0);
    ventana5.castShadow = true;
    //scene.add(ventana5);

    var ventana6 = new THREE.Mesh(g22, m22);
    ventana6.position.set(-10.5, 6.5, 4);
    ventana6.rotation.set(0,1.57,0);
    ventana6.castShadow = true;
    //scene.add(ventana6);

    var ventana7 = new THREE.Mesh(g22, m22);
    ventana7.position.set(10.5, 6.5, 7.5);
    ventana7.rotation.set(0,1.57,0);
    ventana7.castShadow = true;
    //scene.add(ventana7);

    var ventana8 = new THREE.Mesh(g22, m22);
    ventana8.position.set(10.5, 6.5, 1);
    ventana8.rotation.set(0,1.57,0);
    ventana8.castShadow = true;
    //scene.add(ventana8);

    var ventana9 = new THREE.Mesh(g22, m22);
    ventana9.position.set(10.5, 6.5, -1);
    ventana9.rotation.set(0,1.57,0);
    ventana9.castShadow = true;
    //scene.add(ventana9);

    var ventana10 = new THREE.Mesh(g22, m22);
    ventana10.position.set(10.5, 6.5, -7.5);
    ventana10.rotation.set(0,1.57,0);
    ventana10.castShadow = true;
    //scene.add(ventana10);

    var ventana11 = new THREE.Mesh(g22, m22);
    ventana11.position.set(10.5, 6.5, -4);
    ventana11.rotation.set(0,1.57,0);
    ventana11.castShadow = true;
    //scene.add(ventana11);

    var ventana12 = new THREE.Mesh(g22, m22);
    ventana12.position.set(10.5, 6.5, 4);
    ventana12.rotation.set(0,1.57,0);
    ventana12.castShadow = true;
    //scene.add(ventana12);

    var g23 = new RoundedBoxGeometry(7, 1, 0.5, 5, 5);
    var m23 = new THREE.MeshLambertMaterial({ color: 0xFFFFFFF
    });
    var ventana13 = new THREE.Mesh(g23, m23);
    ventana13.position.set(-10.5, 6.5, 4);
    ventana13.rotation.set(0,1.57,0);
    ventana13.castShadow = true;
    //scene.add(ventana13);

    var ventana14 = new THREE.Mesh(g23, m23);
    ventana14.position.set(-10.5, 6.5, -4);
    ventana14.rotation.set(0,1.57,0);
    ventana14.castShadow = true;
    //scene.add(ventana14);

    var ventana15 = new THREE.Mesh(g23, m23);
    ventana15.position.set(-10.5, 11, 4);
    ventana15.rotation.set(0,1.57,0);
    ventana15.castShadow = true;
    //scene.add(ventana15);

    var ventana16 = new THREE.Mesh(g23, m23);
    ventana16.position.set(-10.5, 2, 4);
    ventana16.rotation.set(0,1.57,0);
    ventana16.castShadow = true;
    //scene.add(ventana16);

    var ventana17 = new THREE.Mesh(g23, m23);
    ventana17.position.set(-10.5, 11, -4);
    ventana17.rotation.set(0,1.57,0);
    ventana17.castShadow = true;
    //scene.add(ventana17);

    var ventana18 = new THREE.Mesh(g23, m23);
    ventana18.position.set(-10.5, 2, -4);
    ventana18.rotation.set(0,1.57,0);
    ventana18.castShadow = true;
    //scene.add(ventana18);

    var ventana19 = new THREE.Mesh(g23, m23);
    ventana19.position.set(10.5, 6.5, 4);
    ventana19.rotation.set(0,1.57,0);
    ventana19.castShadow = true;
    //scene.add(ventana19);

    var ventana20 = new THREE.Mesh(g23, m23);
    ventana20.position.set(10.5, 6.5, -4);
    ventana20.rotation.set(0,1.57,0);
    ventana20.castShadow = true;
    //scene.add(ventana20);

    var ventana21 = new THREE.Mesh(g23, m23);
    ventana21.position.set(10.5, 11, 4);
    ventana21.rotation.set(0,1.57,0);
    ventana21.castShadow = true;
    //scene.add(ventana21);

    var ventana22 = new THREE.Mesh(g23, m23);
    ventana22.position.set(10.5, 2, 4);
    ventana22.rotation.set(0,1.57,0);
    ventana22.castShadow = true;
    //scene.add(ventana22);

    var ventana23 = new THREE.Mesh(g23, m23);
    ventana23.position.set(10.5, 11, -4);
    ventana23.rotation.set(0,1.57,0);
    ventana23.castShadow = true;
    //scene.add(ventana23);

    var ventana24 = new THREE.Mesh(g23, m23);
    ventana24.position.set(10.5, 2, -4);
    ventana24.rotation.set(0,1.57,0);
    ventana24.castShadow = true;
    //scene.add(ventana24);

    var g24= new RoundedBoxGeometry(5, 15, 4, 5, .5); 
    var chimenea = new THREE.Mesh(g24, m17);
    chimenea.position.set(-7, 19.5, -8);
    chimenea.castShadow = true;

    //scene.add(chimenea);

    var cas = new THREE.Group();
    cas.add(pared1, pared2, pared3, pared4, pared5, pared6, pared7, pared8, pared9, pared10, pared11, pared12, pared13, pared14, pared15, pared16, puerta, techo1, techo2, techo3, techo4, ventana1, ventana2, ventana3, ventana4, ventana5, ventana6, ventana7, ventana8, ventana9, ventana10, ventana11, ventana12, ventana13, ventana14, ventana15, ventana16, ventana17, ventana18, ventana19, ventana20, ventana21, ventana22, ventana23, ventana24,chimenea);
    cas.position.set(x, y, z);
    return cas;

    }
