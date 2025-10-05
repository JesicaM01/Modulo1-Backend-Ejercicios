function platosBaratos(menu) {
    let listaBaratos = [];

    for (let plato in menu) {
        if (menu[plato] < 20) {
            listaBaratos.push(plato);
        }
    }
    return listaBaratos;
}

let menu = {
  "Ensalada": 15,
  "Sopa": 8,
  "Carne": 25,
  "Pasta": 18
};

console.log(platosBaratos(menu)); // Debe imprimir ["Ensalada", "Sopa", "Pasta"]