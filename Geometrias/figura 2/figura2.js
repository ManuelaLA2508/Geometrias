const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x15C59A, 0.1, 28)
scene.background = new THREE.Color(0x78DDFA);

var loader = new THREE.TextureLoader();
loader.load(
    '../imagen/images.jfif', function(texture){
        scene.background = texture;
    }
);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement );

var geometry = new THREE.TorusKnotGeometry( 5, 1, 80, 10 );
var material = new THREE.MeshBasicMaterial( { color: 0x78DDFA  } );
var torusKnot = new THREE.Mesh( geometry, material );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
scene.add( torusKnot );

camera.position.z = 20

function animate() {
    requestAnimationFrame( animate );
    line.rotation.x += 0.04;
    line.rotation.y += 0,004;
    line.rotation.z += 0.04;
    torusKnot.rotation.x += 0.05;
    torusKnot.rotation.y += 0.06;
    torusKnot.rotation.z += 0.05;
    renderer.render( scene, camera);
}
animate()