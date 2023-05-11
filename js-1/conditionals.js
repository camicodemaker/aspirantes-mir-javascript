function calcularColor(numero) {
    var color;
    if (numero===1) {
        color="negro";
    } else if (numero===2) {
       color="blanco"; 
    } else if (numero===3) {
        color="azul";
    } else {
        color="verde";
    }

return "el color es: "+ color;
}

console.log(calcularColor(1)) 
console.log(calcularColor(2)) 
console.log(calcularColor(3)) 