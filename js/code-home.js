const btFechar = document.getElementById('btFechar')
const divModal = document.getElementById('divModal')

//Ao clicar no id "btFechar"
btFechar.addEventListener('click', function(){
    //oculta o divModal -  CSS display valor none (por javascript)
    divModal.style.display = 'none'
})