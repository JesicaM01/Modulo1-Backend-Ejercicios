function filtrarPalabrasLargas(palabras, numeroMinimo) {
    // Usamos .filter() para crear un nuevo array que solo incluye 
    // las palabras cuya longitud (word.length) es mayor al numeroMinimo.
    return palabras.filter(word => word.length > numeroMinimo);
}

// Datos de prueba
let palabras = ["javascript", "html", "css", "nodejs"];
let numero = 5; // El filtro es: solo palabras con MÁS de 5 caracteres.

// Resultado esperado: ["javascript", "nodejs"]
console.log(filtrarPalabrasLargas(palabras, numero));