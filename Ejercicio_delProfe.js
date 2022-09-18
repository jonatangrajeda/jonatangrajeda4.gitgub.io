function botonazul(){
    var numero = prompt("ingrese un numero");
    if (isNaN(numero)){
        alert("no ingreso un numero");
    }
    if (numero.length === 0){
        return;
    }
    else if (isNaN(numero)==false){
        if (numero < 0) {
            alert("el numero ingresado es negativo")
        }
        else if (numero > 0) {
            alert("el numero ingresado es positivo")
        }
        
        else alert("el numero ingresado es 0 OMG")
    }
}