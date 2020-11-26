function numerosPerfeitos() {
    var numero = document.getElementById("numero").value
    var divisores = []
    var j = 0
    var soma = 0
    for (var i = 1; i < numero; i++) {
        if(numero % i == 0){
            divisores[j] = i
            soma += i
            j++ 
        }
    }

    resultado1 = document.getElementById("divisores")
    resultado1.innerHTML = "Divisores do " + numero + ":" + divisores + " (Soma: " + soma + ")"
    
    resultado2 = document.getElementById("perfeito")
    
    if(soma == numero){
        resultado2.innerHTML = numero + " É um numero Perfeito"
    } else {
        resultado2.innerHTML = numero + "Não é um numero Perfeito"
    }
    
    console.log(divisores)
    console.log(soma)
}