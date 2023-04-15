const prompt = require('prompt-sync')();


let edad = prompt("Digite su edad.")

if(edad>=18){
    console.log("Puedes Ingresar.")
}else if(edad<=12){
    console.log("No puedes ingresar.")
}else if(edad>=13<=17){
    console.log("Puedes ingresar con un adulto responsable.")
}
