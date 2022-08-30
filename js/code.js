//Códigos para o Hot site Rubem Braga

//Cria um novo objeto da classe Date
const tempo = new Date()
const txtData = tempo.getFullYear() + ' - hora: ' + tempo.getHours() + ' minuto: ' + tempo.getMinutes()

//ELEMENTOS DOM
const spanData = document.getElementById('data')
const btFechar = document.getElementById('btFechar')
const divModal = document.getElementById('divModal')
const btHamburguer = document.getElementById('btHamburguer')
const navPhone = document.getElementById('navPhone')
const btFecharMenu = document.addEventListener('btFecharMenu')

//Insere txtData dentro do ID "data"
spanData.innerText = txtData


//AÇÕES DO USUÁRIO (eventos)

//Ao clicar no id "btFechar"
btFechar.addEventListener('click', function(){
    //oculta o divModal -  CSS display valor none (por javascript)
    divModal.style.display = 'none'
})
    

btHamburguer.addEventListener('click', function(){
    navPhone.style.display = 'block'
})

btFecharMenu.addEventListener('click', function(){
    navPhone.style.display = 'none'
})
