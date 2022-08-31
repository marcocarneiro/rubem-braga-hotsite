//Códigos para o Hot site Rubem Braga

//Cria um novo objeto da classe Date
const tempo = new Date()
const txtData = tempo.getFullYear() + ' - hora: ' + tempo.getHours() + ' minuto: ' + tempo.getMinutes()

//ELEMENTOS DOM
const spanData = document.getElementById('data')
const btHamburguer = document.getElementById('btHamburguer')
const navPhone = document.getElementById('navPhone')
const btFecharMenu = document.getElementById('btFecharMenu')

//Insere txtData dentro do ID "data"
spanData.innerText = txtData


//AÇÕES DO USUÁRIO (eventos)   

btHamburguer.addEventListener('click', function(){
    navPhone.style.display = 'block'
})

btFecharMenu.addEventListener('click', function(){
    navPhone.style.display = 'none'
})
