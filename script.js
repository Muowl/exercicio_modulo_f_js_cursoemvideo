window.document.querySelector('input#buttone').addEventListener('click', adicionaSelect)
window.document.querySelector('input#buttone-select').addEventListener('click', informa)

var numeros = []

function adicionaSelect() {
    let num = window.document.querySelector('input#numero')
    if (num.value < 1 || num.value > 100) {
        alert('Digite um número entre 1 a 100')
    } else {
        let opt = window.document.createElement('option')
        opt.innerHTML = 'Valor: ' + num.value + ' adicionado'
        window.document.querySelector('select').appendChild(opt)
        let numConvertido = Number(num.value)
        numeros.push(numConvertido)
    }
}

function informa() {
    numeros.sort()
    //console.log(numeros) no caso do numeros ser let, não pude manipular o array da forma desejada
    let div = window.document.querySelector('div#final')
    let paragrafo = window.document.createElement('p')
    let tamanhoArray = numeros.length
    let somaArray = somar(tamanhoArray)
    paragrafo.innerHTML = `Ao todo temos ${numeros.length} números cadastrados<br>O maior valor encontrado foi ${numeros[tamanhoArray - 1]}<br>O menor valor encontrado foi ${numeros[0]}<br>Somando todos os vetores temos ${somaArray}<br>A média dos valores digitados é ${somaArray / tamanhoArray}`
    div.appendChild(paragrafo)
}

function somar(tamanho) {
    let contador = 0
    for (var i = 0; i < tamanho; i++) {
        contador += numeros[i]
    }
    return contador
}