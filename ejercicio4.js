 function contarVocales(texto) {
    let contador = 0;
    // 1. Convertir todo el texto a minúsculas para simplificar la comparación
    const textoMinusculas = texto.toLowerCase();

    // 2. Usar un bucle for para recorrer cada letra
    for (let i = 0; i < textoMinusculas.length; i++) {
        const letra = textoMinusculas[i];

        // 3. Verificar si la letra es una vocal
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            contador++;
        }
    }
    return contador;
}

// Datos de prueba (H(o)l(a) M(u)nd(o) -> 4 vocales)
let texto = "Hola Mundo";

// Imprime el resultado (Debe devolver 4)
console.log(contarVocales(texto));