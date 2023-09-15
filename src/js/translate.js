const langDiv = document.querySelector('.lang-btn')

const homeLink = document.getElementById('home-a')
const skillsLink = document.getElementById('skills-a')
const projectsLink = document.getElementById('projects-a')
const contactLink = document.getElementById('contact-a')
const langLabel = document.getElementById('lang-a')

const checkLangPt = document.querySelector('#flexSwitchCheckChecked')



const showData = data => {

    const language = checkLangPt.checked ? 'pt' : 'en'

    const translate = data[0][language]

    homeLink.textContent = translate.Home
    skillsLink.textContent = translate.Skills
    projectsLink.textContent = translate.Projects
    contactLink.textContent = translate.Contact
    langLabel.textContent = translate.Lang

    
    
}

const getData = async () => {
    await fetch(`/data.json`).then(response => response.json().then(data => showData(data)))
}

langDiv.addEventListener('click', () => {
    getData()
})

