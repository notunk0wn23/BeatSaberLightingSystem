import * as three from 'three'

const scene = new three.Scene();
const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
camera.position.x = 2;

const geometry = new three.BoxGeometry();
const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new three.Mesh(geometry, material);
scene.add(cube);

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;


	renderer.render( scene, camera );
}
animate();