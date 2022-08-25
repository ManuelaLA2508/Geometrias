const scene = new THREE.Scene ();
scene.fog = new THREE.Fog( 0xFF25fD, 0.1, 16)
scene.background = new THREE.Color(0x7733FF);


var loader = new THREE.TextureLoader();
loader.load(
    '../imagen/35285.jpg', function(texture){
        scene.background = texture; 
    }
);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement );

const geometry = new THREE.CylinderGeometry( 1, 1, 5, 15 );
const material = new THREE.MeshBasicMaterial( {color: 0xff, wireframe:true} );
const cylinder = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
scene.add( cylinder );

camera.position.z = 9

function animate() {
    requestAnimationFrame( animate );
    line.rotation.x += 0.04;
    line.rotation.y += 0,04;
    line.rotation.z += 0.04;
    cylinder.rotation.x += 0.05;
    cylinder.rotation.y += 0,04;
    cylinder.rotation.z += 0.05;
    renderer.render( scene, camera );
}
animate()
