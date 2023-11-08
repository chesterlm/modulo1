// URL de la API falsa
const apiUrl = 'http://localhost:3000/usuarios';

function realizarSolicitudGET() {
    const getResultDiv = document.getElementById('get-result');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        getResultDiv.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
        getResultDiv.textContent = `Error al realizar la solicitud GET: ${error.message}`;
    });
}

function realizarSolicitudPOST() {
    const postResultDiv = document.getElementById('post-result');
    const nombreUsuarioInput = document.getElementById('nombre-usuario');
    const nombreUsuario = nombreUsuarioInput.value.trim();

    if (nombreUsuario !== '') {
        fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: nombreUsuario }),
        })
        .then(response => response.json())
        .then(data => {
            postResultDiv.textContent = `Usuario agregado: ${JSON.stringify(data)}`;
            nombreUsuarioInput.value = ''; // Limpiar el campo después de agregar
        })
        .catch(error => {
            postResultDiv.textContent = `Error al realizar la solicitud POST: ${error.message}`;
        });
    } else {
        postResultDiv.textContent = 'Por favor, ingrese un nombre de usuario.';
    }
}
