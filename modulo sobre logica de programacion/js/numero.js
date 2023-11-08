    function encontrarNumeroMasGrande(lista) {
        if (lista.length === 0) {
        console.log("La lista está vacía.");
        return;
        }

        let numeroMasGrande = lista[0];

        for (let i = 1; i < lista.length; i++) {
        if (lista[i] > numeroMasGrande) {
            numeroMasGrande = lista[i];
        }
        }

        console.log("El número más grande es:", numeroMasGrande);
        document.write("<p>El número más grande es: " + numeroMasGrande + "</p>");
    }

    // Ejemplo de uso
    const numeros = [12, 5, 8, 21, 15, 7];
    encontrarNumeroMasGrande(numeros);