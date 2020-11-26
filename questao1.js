function reserva(){
    var numero = document.getElementById('raiz').value;
    
    var saida =Math.sqrt(numero);

    if(saida == Math.floor(saida)){
        document.getElementById('resposta').innerHTML= saida; 
    }else{
       document.getElementById('resposta').innerHTML= "Nâo há raiz exata para " + numero;
       alert("Informe um número válido") 
    }
    
}
var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', reserva);
