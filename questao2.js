function rest(){
    var numero = document.getElementById('numero').value;
    
    if (numero%2 == 0)
        document.getElementById('resposta').innerHTML = "Par";
    else
        document.getElementById('resposta').innerHTML = "Impar";
    
}
var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', rest);
