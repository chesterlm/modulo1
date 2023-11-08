// Función tradicional
function sumarNumerosTradicional(num1, num2) {
    return num1 + num2;
    }
    
    // Función arrow
    const sumarNumerosArrow = (num1, num2) => num1 + num2;
    
    // Ejemplos de uso
    const resultadoTrad = sumarNumerosTradicional(5, 10);
    const resultadoArrow = sumarNumerosArrow(5, 10);
    
    console.log("Resultado con función tradicional:", resultadoTrad);
    console.log("Resultado con función arrow:", resultadoArrow);
    