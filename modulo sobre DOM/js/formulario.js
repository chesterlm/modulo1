function manejarEnvioFormulario(event) {
    event.preventDefault();
  
    const campoEntrada = document.getElementById('campo-entrada');
    const valorCampo = campoEntrada.value.trim();
  
    if (valorCampo === '') {
      alert('Por favor, ingrese un valor en el campo.');
    } else {
      console.log({ datoIngresado: valorCampo });
      alert('Formulario correctamente diligenciado');
    }
  }
  
  const formulario = document.getElementById('mi-formulario');
  formulario.addEventListener('submit', manejarEnvioFormulario);
  