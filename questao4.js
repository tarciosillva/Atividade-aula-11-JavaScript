function rest(){
    var valor = document.getElementById('valor').value;

    var i = 1.00
    var ii = 1.75
    var iii = 3.00

    var parquimetro  = Number(valor)
    var vParq 
    var  Vi =  vParq  -  i
    var  Vii  =  vParq  -  ii
    var  Viii  =  vParq  -  iii

    if(parquimetro >= iii)
        document.getElementById('resposta').innerHTML  =  "Tempo: 120 m <br> Troco R$:"  +  Viii.toFixed( 2 );
    else if(parquimetro >= ii)
        document.getElementById('resposta').innerHTML  =  "Tempo: 60 m <br> Troco R$:"  +  Vii.toFixed( 2 );
    else if(parquimetro >= i)
        document.getElementById('resposta').innerHTML  =  "Tempo: 30 m <br> Troco R$:"  +  Vi.toFixed( 2 );
    else if( isNaN ( parquimetro )  ||  parquimetro  ==  ""  ) {
        alert ( "Digite um número válido" )
           
            return  document.getElementById( 'parquimetro' ).foco()
        }else 
            documento.getElementById ( 'resposta' ) . innerHTML  =  "Valor Insuficiente "

}
var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', rest);