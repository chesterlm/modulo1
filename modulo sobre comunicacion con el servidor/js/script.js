function guardarEnLocal() {
    const input = document.getElementById('local-input');
    const data = input.value.trim();
    
        if (data !== '') {
        localStorage.setItem('datoLocal', data);
        input.value = ''; // Limpiar el campo después de guardar
        }
    }
    
    function recuperarDeLocal() {
        const resultDiv = document.getElementById('local-result');
        const storedData = localStorage.getItem('datoLocal');
    
        if (storedData) {
        resultDiv.textContent = `Dato almacenado en localStorage: ${storedData}`;
        } else {
        resultDiv.textContent = 'No hay dato almacenado en localStorage.';
        }
    }
    
    function guardarEnSesion() {
        const input = document.getElementById('session-input');
        const data = input.value.trim();
    
        if (data !== '') {
        sessionStorage.setItem('datoSesion', data);
        input.value = ''; // Limpiar el campo después de guardar
        }
    }
    
    function recuperarDeSesion() {
        const resultDiv = document.getElementById('session-result');
        const storedData = sessionStorage.getItem('datoSesion');
    
        if (storedData) {
        resultDiv.textContent = `Dato almacenado en sessionStorage: ${storedData}`;
        } else {
        resultDiv.textContent = 'No hay dato almacenado en sessionStorage.';
        }
    }
    