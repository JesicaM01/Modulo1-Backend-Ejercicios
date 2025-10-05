function contarPersonas(edades) {
    let contador = 0;
    
    // Recorre todas las edades en el array
    for (let i = 0; i < edades.length; i++) {
        // La persona debe ser mayor de 12 Y menor de 60
        if (edades[i] > 12 && edades[i] < 60) {
            contador++; // Incrementa el contador si cumple
        }
    }
    return contador;
}

// Datos de prueba (el 61 es el único que no pasa la prueba)
let edades = [10, 15, 35, 8, 65, 12, 59]; 

// Ejecuta la función e imprime el resultado (debe ser 4 con este array)
console.log(contarPersonas(edades));