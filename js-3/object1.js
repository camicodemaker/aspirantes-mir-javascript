let pedro= {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    saluda: function(){
        console.log("hola, me llamo " + this.nombre); 
    }
}

console.log(pedro["edad"]);
pedro.estatura=1.8;
delete pedro.activo;

let llaves = Object.entries(pedro);

for (const [key, value] of Object.entries(pedro)) {
    console.log(`${key}: ${value}`);
  }
pedro.saluda();
console.log(pedro)