function obtenerNumerosUnicos(numeros) {
    // 1. Crear un objeto Set a partir del array. Esto elimina automáticamente los duplicados.
    const setDeNumeros = new Set(numeros);

    // 2. Usar el operador spread (...) para convertir el Set de nuevo en un array.
    return [...setDeNumeros];
}

// Datos de prueba
let numeros = [1, 2, 3, 2, 4, 1, 5];

// Imprime el resultado (Debe devolver [1, 2, 3, 4, 5])
console.log(obtenerNumerosUnicos(numeros));