const langDiv = document.querySelector('.lang-btn')

const homeLink = document.getElementById('home-a')
const skillsLink = document.getElementById('skills-a')
const projectsLink = document.getElementById('projects-a')
const contactLink = document.getElementById('contact-a')
const langLabel = document.getElementById('lang-a')

const getElByClass = el => document.querySelector(el)

const firstTitle = getElByClass('.first-title')
const firstSubTitle = getElByClass('.first-subtitle')
const paragraphSub = getElByClass('.paragraph-sub')
const CardTextSkills = getElByClass('.card-text-skills')
const CardTextSchooling = getElByClass('.card-text-schooling')
const paragraphSchooling = getElByClass('.paragraph-schooling')
const liTextSoftSkills1 = getElByClass('.li-soft-skills-text-1')
const liTextSoftSkills2 = getElByClass('.li-soft-skills-text-2')
const liTextSoftSkills3 = getElByClass('.li-soft-skills-text-3')
const liTextSoftSkills4 = getElByClass('.li-soft-skills-text-4')
const liTextSoftSkills5 = getElByClass('.li-soft-skills-text-5')
const liTextSoftSkills6 = getElByClass('.li-soft-skills-text-6')

const titleProjects = getElByClass('.title-projects')
const ProjectParagraph1 = getElByClass('.project-paragraph-1')
const ProjectParagraph2 = getElByClass('.project-paragraph-2')
const ProjectParagraph3 = getElByClass('.project-paragraph-3')
const ProjectParagraph4 = getElByClass('.project-paragraph-4')


const titleContact = getElByClass('.title-contact')
const labelContact1 = getElByClass('.label-contact-1')
const labelContact3 = getElByClass('.label-contact-3')
const btnSendSubmit = getElByClass('.btn-send-submit')

const curriculum = getElByClass('.curriculum')
const spanAEnglish = getElByClass('.span-a-english')
const spanAPortuguese = getElByClass('.span-a-portuguese')

const userLang = navigator.language || navigator.userLanguage; 

const checkLangPt = document.querySelector('#flexSwitchCheckChecked')


const translateData = data => {

    const language = checkLangPt.checked ? 'pt' : 'en'

    const translate = data[0][language]

    homeLink.textContent = translate.Home
    skillsLink.textContent = translate.Skills
    projectsLink.textContent = translate.Projects
    contactLink.textContent = translate.Contact
    langLabel.textContent = translate.Lang

    firstTitle.textContent = translate.firstTitle
    firstSubTitle.textContent = translate.firstSubTitle
    paragraphSub.textContent = translate.paragraphSub

    CardTextSkills.textContent = translate.CardTextSkills
    CardTextSchooling.textContent = translate.CardTextSchooling
    paragraphSchooling.textContent = translate.paragraphSchooling
    liTextSoftSkills1.textContent = translate.liTextSoftSkills1
    liTextSoftSkills2.textContent = translate.liTextSoftSkills2
    liTextSoftSkills3.textContent = translate.liTextSoftSkills3
    liTextSoftSkills4.textContent = translate.liTextSoftSkills4
    liTextSoftSkills5.textContent = translate.liTextSoftSkills5
    liTextSoftSkills6.textContent = translate.liTextSoftSkills6

    titleProjects.textContent = translate.TitleProjects
    ProjectParagraph1.textContent = translate.ProjectParagraph1
    ProjectParagraph2.textContent = translate.ProjectParagraph2
    ProjectParagraph3.textContent = translate.ProjectParagraph3
    ProjectParagraph4.textContent = translate.ProjectParagraph4
    
    titleContact.textContent = translate.titleContact
    labelContact1.textContent = translate.labelContact1
    labelContact3.textContent = translate.labelContact3
    btnSendSubmit.textContent = translate.btnSendSubmit

    curriculum.textContent = translate.curriculum
    spanAEnglish.textContent = translate.spanAEnglish
    spanAPortuguese.textContent = translate.spanAPortuguese

}

const getData = async () => {
    await fetch(`/data.json`).then(response => response.json().then(data => translateData(data)))
}

langDiv.addEventListener('click', () => {
    getData()
})

if(userLang == "pt-BR") {
    checkLangPt.setAttribute('checked', 'checked')
    getData()
}
