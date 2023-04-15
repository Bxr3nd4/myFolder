const prompt = require('prompt-sync')();


let puertas = prompt("Abrir o Cerrar puertas.(1/2)")

if(puertas==1){
    console.log("Puertas Abriendo.")
}else if(puertas>2){
    console.log("Valor Incorrecto.")
}else{
    console.log("Puertas Cerrando.")
}