const canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;

window.addEventListener('load', init);

let scene, camera, renderer, mesh;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, canvas.width / canvas.height, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvas.width, canvas.height);
    document.body.append(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    window.addEventListener('resize', () => {
        camera.aspect = canvas.width / canvas.height;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.width, canvas, height);
    })

    function animate() {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.01;

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}