// escribe la función maxIndex acá
function maxIndex(array){
let indMayor=0;
let contador=0;
for (i=0; i<array.length;i++){
    if (array[i]>indMayor){
        indMayor=array[i]
        contador++
    }
}
return contador -1
}


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

