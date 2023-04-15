const prompt = require('prompt-sync')();


let option = prompt(" Presione 1 para prender la luz o 2 para apagarla.")

if(option === "1"){

    console.log("La luz está prendida.")
}else if(option>2){
    console.log("Valor Incorrecto.")
}else{
    console.log("La luz está apagada.")
}

