var fecha = new Date();

var hora = fecha.getHours();

if(hora<12){
    alert("buenos dias");
}
else if(hora < 20 && hora > 12){
    alert("Buenas tardes");
}
else{
    alert("Buenas noches");
}