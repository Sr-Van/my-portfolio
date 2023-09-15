const menuBtn = document.querySelector('.menu-btn')
const menuList = document.querySelector('.menu-list')
const menuOverlay = document.querySelector('#overlay')

const btnSendEmail = document.querySelector(".btn-send-submit")



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
    
btnSendEmail.addEventListener("click", () => {
    const myModal = new bootstrap.Modal(document.getElementById("myModal"));
    if(document.querySelector("#name-form").value == "") {
        return
    }
    myModal.show();
    setTimeout(() => {
        document.querySelector("#name-form").value = ""
        document.querySelector("#email-form").value = ""
        document.querySelector("#message-form").value = ""
    }, 3000);
})

