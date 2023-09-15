const langDiv = document.querySelector('.lang-btn')

const homeLink = document.getElementById('home-a')
const skillsLink = document.getElementById('skills-a')
const projectsLink = document.getElementById('projects-a')
const contactLink = document.getElementById('contact-a')
const langLabel = document.getElementById('lang-a')

const checkLangPt = document.querySelector('#flexSwitchCheckChecked')


const data = {
    "pt": {
        "Home" : "Inicio",
        "Skills" : "Habilidades",
        "Projects" : "Projetos",
        "Contact" : "Contato",
        "Lang" : "Lingua (PT)",
    }
}



langDiv.addEventListener('click', (e) => {
    if(checkLangPt.checked) {
        const lang = e.target.getAttribute('language')

        homeLink.textContent = data[lang].Home
        skillsLink.textContent = data[lang].Skills
        projectsLink.textContent = data[lang].Projects
        contactLink.textContent = data[lang].Contact
        langLabel.textContent = data[lang].Lang
    }
})

