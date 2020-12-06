function CalcularCargaDistribuida(){
    // variáveis dinâmicas
    var carga = window.document.getElementById("TxtCargaId").value
    var comprimento = window.document.getElementById("TxtComprimentoId").value

    // variáveis estáticas (valores default)
    var legendaCarga = "<hr><p>A unidade de carga é <strong>kN</strong>.<br>"
    var legendaComprimento = "A unidade de comprimento é <strong>m</strong>"

    // variáveis estáticas para o cálculo
    var cortanteMaximo = carga * comprimento / 2
    var momentoMaximo = carga * Math.pow(comprimento, 2) / 8

    // exibindo resultados nos componentes div's
    VisorResultado.innerHTML = `<hr><p>O Cortante Máximo é: <strong>${cortanteMaximo}</strong> <br>O Momento Máximo é: <strong>${momentoMaximo}</strong>`

    //VisorLegenda.style.textAlign = 'center'
    VisorLegenda.innerHTML =  `${legendaCarga} ${legendaComprimento}.`
}

/*
    Fonte de pesquisa para a função matemática: Math.pow(base, expoente)
    -----------------------------------------------------------------------------------------
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
*/