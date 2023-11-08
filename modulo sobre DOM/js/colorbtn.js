function cambiarColorDeFondo() {
    const elementoObjetivo = document.getElementById('elemento-objetivo');
    elementoObjetivo.style.backgroundColor = 'lightblue';
    }
    
    const botonCambioColor = document.getElementById('boton-cambio-color');
    botonCambioColor.addEventListener('click', cambiarColorDeFondo);
