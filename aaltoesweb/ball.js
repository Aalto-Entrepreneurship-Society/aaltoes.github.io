
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('bg').appendChild(renderer.domElement);


const radius = 8;
const geometry = new THREE.IcosahedronGeometry(radius, 3); 

const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 15;
    

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.0004;
  sphere.rotation.y += 0.0004;
  renderer.render(scene, camera);
  }
animate();

  window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

