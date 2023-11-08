function sumarNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0);
    const suma = numerosPares.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma;
    }
    
    // Ejemplo de uso
    const numerosEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultado = sumarNumerosPares(numerosEjemplo);
    
    console.log("La suma de los números pares es:", resultado);
    