function ordenarNumeros(numeros) {
    // Usamos el método .sort() y una función de comparación (a - b)
    // para ordenar los números de menor a mayor.
    return numeros.sort((a, b) => a - b);
}

// Datos de prueba
let numeros = [5, 2, 9, 1, 7];

// Imprime el resultado (Debe devolver [1, 2, 5, 7, 9])
console.log(ordenarNumeros(numeros));