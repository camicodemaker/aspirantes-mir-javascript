function join(arreglo){
let str=0;
    for (i=0; i<arreglo.length; i++) {
        str=arreglo[i]
        str=str+" "+arreglo[i]
   } 
return str
}


console.log(join(["hola","amigos","mios"]))