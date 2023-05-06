// BOTÕES

const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const card4 = document.querySelector('#card4')

const botao1 = document.querySelector('#botao1')
const botao2 = document.querySelector('#botao2')
const botao3 = document.querySelector('#botao3')
const botao4 = document.querySelector('#botao4')



card1.addEventListener('mouseover',() => {
    botao1.style.display = 'block'
})
card1.addEventListener('mouseout',() => {
    botao1.style.display = 'none'
})


card2.addEventListener('mouseover',() => {
    botao2.style.display = 'block'
})
card2.addEventListener('mouseout',() => {
    botao2.style.display = 'none'
})

card3.addEventListener('mouseover',() => {
    botao3.style.display = 'block'
})
card3.addEventListener('mouseout',() => {
    botao3.style.display = 'none'
})


card4.addEventListener('mouseover',() => {
    botao4.style.display = 'block'
})
card4.addEventListener('mouseout',() => {
    botao4.style.display = 'none'
})

// ATENDIMENTO
const atendimento = document.querySelector('#atendimento')
const popUp = document.querySelector('#pop-upSec')
const x = document.querySelector('#x')

atendimento.addEventListener('click',() => {
    popUp.style.display = 'block'
})

x.addEventListener('click',() => {
    popUp.style.display = 'none'
})