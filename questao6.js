function verificaSaque() {
    var valorSaque = document.getElementById("valor").value


    var cedulaCem = 0;
    var cedulaCinquenta = 0;
    var cedulaDez = 0;

    while (valorSaque != 0) {
        if (valorSaque >= 100) {

            valorSaque -= 100;
            console.log(valorSaque)

            cedulaCem++;
        }

        else if (valorSaque >= 50) {

            valorSaque -= 50;

            cedulaCinquenta++;
        }

        else if (valorSaque >= 10) {

            valorSaque -= 10;

            cedulaDez++;
        } else if (valorSaque > 0 && valorSaque < 10) {
            alert("Valor Inválido para notas disponíveis: (100, 50, 10)")
            valorSaque = 0;
        }
    }


    var cem = document.getElementById("cem")
    cem.innerHTML = "Notas de R$ 100:" + cedulaCem
    console.log(cem)

    var cinquenta = document.getElementById('cinquenta')
    cinquenta.innerHTML = "Notas de R$ 50:" + cedulaCinquenta

    var dez = document.getElementById('dez')
    dez.innerHTML = "Notas de R$ 10:" + cedulaDez

}
