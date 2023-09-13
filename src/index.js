const menuBtn = document.querySelector('.menu-btn')
const menuList = document.querySelector('.menu-list')
const menuOverlay = document.querySelector('#overlay')


menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu-opened')
    menuOverlay.classList.toggle('overlay')
})

document.addEventListener('click', (e) => {
    target = e.target.getAttribute('data-js')
    if(target){
        menuOverlay.classList.remove('overlay')
        menuList.classList.toggle('menu-opened')

    }
})
