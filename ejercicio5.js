function generarIniciales(nombre) {
    let iniciales = "";
    
    // 1. Usar .split(' ') para dividir el nombre completo en un array de palabras
    const palabras = nombre.split(' '); 

    // 2. Recorrer cada palabra en el array
    for (const palabra of palabras) {
        // 3. Tomar la primera letra de la palabra (palabra[0])
        // y convertirla a mayúscula (toUpperCase())
        if (palabra.length > 0) { // Evita errores si hay dobles espacios
            iniciales += palabra[0].toUpperCase();
        }
    }
    
    return iniciales;
}

// Datos de prueba (J.P.G. -> JPG)
let nombre = "juan perez gomez";

// Imprime el resultado (Debe devolver "JPG")
console.log(generarIniciales(nombre));