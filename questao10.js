function criarEstrelas() {
    numeroDeLinhas = document.getElementById("numeroDeLinhas").value
    var linha = 1
    
    for (var i = 1; i <= numeroDeLinhas; i++) {

        linha = document.createElement('p')
        var estrela = document.createTextNode("*")
        linha.appendChild(estrela)

        document.getElementById("estrelas").appendChild(linha)
    }

}