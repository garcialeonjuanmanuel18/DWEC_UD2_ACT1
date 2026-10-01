var entradaEntero = "45";
var entradaFloat = "19.95";

entradaEntero =parseInt(entradaEntero);
entradaFloat =parseFloat(entradaFloat);

var total = entradaEntero+entradaFloat;

alert(total);

total+=total*0.05;
alert(total);
var mensaje = ""
//condicion ? valorSiSeCumple : valorSiNoSeCumple;
total > 50 ? mensaje = "Envío gratuito" : mensaje = "Gastos de envío: 4.95€";

console.log(mensaje);