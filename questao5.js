function rest(){
    var Va = document.getElementById('valor').value;
    var Vb = document.getElementById('valorB').value;
    var Vc = document.getElementById('valorC').value;

    var a  =  Número( Va )
    var b  =  Número( Vb )
    var c  =  Número( Vc )
    var somaAB  =  a + b
    var somaBC  =  b + c
    var somaAC  =  a + c

    console.log(a,b,c)
    if(a <= somaBC) {
        if(b <= somaAC){
            if(c <= somaAB){
                if(a == b && b == c && c == a) {
                    document.getElementById('resposta').innerHTML = "Lados podem formar um triângulo <br> Tipo: Equilátero";
                }
                else if (a != b && a != c && c!= b){
                    document.getElementById('resposta').innerHTML = "Lados podem formar um triângulo <br> Tipo: Escaleno";
                }
                else document.getElementById('resposta').innerHTML = "Lados podem formar um triângulo <br> Tipo: Isósceles";

            }
            else document.getElementById('resposta').innerHTML = "Não pode formar uma triângulo";
        }
        else document.getElementById('resposta').innerHTML = "Não pode formar uma triângulo";
    }
    else if (isNaN(a) || a == 0 || isNaN(b) || b == 0 || isNaN(c) || c == 0){
        return alert ( "Digite um número válido" )
    }
    else document.getElementById('resposta').innerHTML = "Não pode formar uma triângulo";


}
var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', rest);