var tempo = document.querySelector('.tempo')
var img = document.querySelector('.img')
var mensagemHoras = document.querySelector('.mensagem-horas')
var horas = new Date()
var atual = horas.getHours()
var min = new Date()
var minAtual = min.getMinutes()

function time() {

    if(atual >= 6 && atual < 12) {
        tempo.innerHTML = 'Bom Dia!'
        mensagemHoras.innerHTML = `São exatamente ${atual}:${minAtual}`
        img.src = 'img/dia.jpg'
    }else if(atual >=12 && atual < 18) {
        tempo.innerHTML = 'Boa Tarde!'
        mensagemHoras.innerHTML = `São exatamente ${atual}:${minAtual}`
        img.src = 'img/tarde.jpg'
    }else {
        tempo.innerHTML = 'Boa Noite!'
        mensagemHoras.innerHTML = `São exatamente ${atual}:${minAtual}`
        img.src = 'img/noite.jpg'
    }
    setTimeout('time()',500)
}

time()

