function invertirPalabras(frase) {
    // 1. .split(' '): Convierte la frase en un array de palabras.
    // 2. .reverse(): Invierte el orden de las palabras en el array.
    // 3. .join(' '): Vuelve a unir el array en una cadena, usando un espacio.
    return frase.split(' ').reverse().join(' ');
}

// Datos de prueba
let frase = "Aprender a programar es divertido";

// Imprime el resultado 
// (Debe devolver "divertido es programar a Aprender")
console.log(invertirPalabras(frase));