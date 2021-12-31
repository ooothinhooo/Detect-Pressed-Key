var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')

var any = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')

any.addEventListener('click', function(){
    any.classList.add('hide')
    box.classList.remove('hide')
})

document.addEventListener('keydown', e=>{

    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText =e.which
    eCode.innerText = e.code
    result.innerText = e.which

   any.classList.add('hide')
   box.classList.remove('hide')
})

