function manejarClicEnLista(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clic en el elemento de la lista:', event.target.textContent);
        }
    }
    
    const lista = document.getElementById('mi-lista');
    lista.addEventListener('click', manejarClicEnLista);
    