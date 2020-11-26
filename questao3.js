function rest(){
    var Vpremitida = document.getElementById('permitida').value;
    var Vcondutor = document.getElementById('condutor').value;

    var v20 = (Vpremitida * 0.2)
    console.log(Vcondutor)

    if(Vcondutor <= Vpremitida)
        document.getElementById('resposta').innerHTML = "Sem multa";
    else if(Vcondutor <= v20)
        document.getElementById('resposta').innerHTML = "Multa Leve";
    else if(Vcondutor > v20)
        document.getElementById('resposta').innerHTML = "Multa alta";

}
var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', rest);