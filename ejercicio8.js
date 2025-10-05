function contarLetra(texto, letra) {
    let contador = 0;
    
    // 1. Convertir todo a minúsculas para no distinguir entre mayúsculas y minúsculas
    const textoMinusculas = texto.toLowerCase();
    const letraMinuscula = letra.toLowerCase();

    // 2. Usar un bucle for para recorrer el texto
    for (let i = 0; i < textoMinusculas.length; i++) {
        // 3. Comparar cada carácter con la letra de búsqueda
        if (textoMinusculas[i] === letraMinuscula) {
            contador++;
        }
    }
    
    return contador;
}

// Datos de prueba ("Programar es divertido", buscar la "r" - hay 3: P(r)og(r)ama(r))
let texto = "Programar es divertido";

// Imprime el resultado (Debe devolver 3)
console.log(contarLetra(texto, "r"));