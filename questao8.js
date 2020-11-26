function calcularPrevisao() {
    var numeroChinchilas = document.getElementById("N_chinchilas").value
    var Nm_anos = document.getElementById("anos").value

    var qtd = numeroChinchilas
    var ano
    if (numeroChinchilas >= 2) {
        for(var i = 1; i <= Nm_anos; i++){
            ano = document.createElement('h3')
            document.createTextNode(ano.innerHTML = i + "º Ano: " + numeroChinchilas + " Chinchilas")
            document.getElementById("previsao").appendChild(ano)
            numeroChinchilas *= 3
            console.log(ano)
        }
        

    }

}