var numeros = "";
var numerosW = ""; 

for(var i = 3; i < 20; i++){
    if(i%2 == 0){
        numeros+=i+" ";
    }
}
console.log(numeros);

var valor = 3;
while(valor < 19 ){
    valor++
     if(valor%2 == 0){
        numerosW+=" "+valor;
    }
}

console.log(numerosW);