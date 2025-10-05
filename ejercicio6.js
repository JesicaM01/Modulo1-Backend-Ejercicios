function calcularPromedio(calificaciones) {
    let sumaTotal = 0;
    
    // 1. Usar un bucle for para sumar todos los números
    for (let i = 0; i < calificaciones.length; i++) {
        sumaTotal += calificaciones[i]; 
    }

    // 2. Dividir la suma total entre la cantidad de elementos
    // Usamos .length para saber cuántos elementos hay
    const promedio = sumaTotal / calificaciones.length;
    
    return promedio;
}

// Datos de prueba (Suma: 8+9+10+7+6 = 40. Cantidad: 5. Promedio: 40/5 = 8)
let calificaciones = [8, 9, 10, 7, 6];

// Imprime el resultado (Debe devolver 8)
console.log(calcularPromedio(calificaciones))