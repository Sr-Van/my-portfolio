const menuBtn = document.querySelector('.menu-btn')
const menuList = document.querySelector('.menu-list')
const menuOverlay = document.querySelector('#overlay')

const menuButtons = overlay.querySelectorAll(`a[data-btn="btn"]`);

const btnSendEmail = document.querySelector(".btn-send-submit")
const btnCopyEmail = document.querySelector("#copy-btn")
const btnLinkedin = document.querySelector("#linkedin-btn")

const inputEmail = document.querySelector("#email-input")

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const closeMenu = () => {
    menuList.classList.add('menu-closed')
    menuList.classList.remove('menu-opened')
    setTimeout(() => {
        menuOverlay.classList.remove('overlay')
    }, 200);
}

setInterval(() => {
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth >= 1024) {
        closeMenu()
    }
}, 10000);


menuBtn.addEventListener('click', () => {
    if(menuList.classList.contains('menu-closed')) {
        menuOverlay.classList.add('overlay')
        menuList.classList.remove('menu-closed')
        menuList.classList.add('menu-opened')
        return
    }
    closeMenu()
})

document.addEventListener('click', (e) => {
    target = e.target.getAttribute('data-js')
    if(target){
        menuOverlay.classList.remove('overlay')
        menuList.classList.toggle('menu-opened')
        menuList.classList.toggle('menu-closed')
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

btnCopyEmail.addEventListener('click', () => {
    btnCopyEmail.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" viewBox="0 0 24 24">
        <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"></path>
        </svg>
        `

    setTimeout(() => {
        btnCopyEmail.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
        `
    }, 800);
    navigator.clipboard.writeText(inputEmail.value)
})

menuButtons.forEach(btn => {
    btn.addEventListener("click",() => {
        closeMenu()
    })
})