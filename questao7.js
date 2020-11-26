function decrescer(){
    var numero = document.getElementById("numero").value
    var original = numero

    var decrescente = []

    var i = 0
    while(numero >= 1){
        decrescente[i] = numero
        numero --
        i ++
    }

    var resultado = document.getElementById("resultado")
    resultado.innerHTML = "Entre " + original + "e 1: " + decrescente

    console.log(decrescente)
}