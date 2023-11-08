function operacionAsincronica() {
    return new Promise((resolve, reject) => {
      // Simulando una operación asincrónica, por ejemplo, una solicitud de datos
        setTimeout(() => {
            const exito = Math.random() > 0.5; // Simula si la operación fue exitosa o no
    
            if (exito) {
            resolve('Datos obtenidos exitosamente.');
            } else {
            reject('Error al obtener los datos. Inténtalo de nuevo.');
            }
        }, 2000); // Simula un retardo de 2 segundos
        });
    }
    
    function realizarOperacionAsincronica() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = 'Realizando operación asincrónica...';
    
        operacionAsincronica()
        .then((resultado) => {
            resultadoDiv.textContent = `Éxito: ${resultado}`;
        })
        .catch((error) => {
            resultadoDiv.textContent = `Error: ${error}`;
        });
    }
    