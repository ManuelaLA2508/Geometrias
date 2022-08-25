const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 0.1, 75)
scene.background = new THREE.Color(0x0000); 

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement );
var loader = new THREE.FontLoader();

var x = 0, y = 0;

var heartShape = new THREE.Shape();
heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
var geometry = new THREE.ShapeBufferGeometry( heartShape );
var material = new THREE.MeshBasicMaterial( { color: 0xFF00EC, wireframe:true } );
var mesh = new THREE.Mesh( geometry, material ) ;
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );
scene.add( mesh );

camera.position.z = 50

function animate() {
    requestAnimationFrame( animate );
    line.rotation.x += 0.04;
    line.rotation.y += 0,004;
    line.rotation.z += 0.04;
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.09;
    mesh.rotation.z -= 0.05;
    renderer.render( scene, camera);
}
animate()