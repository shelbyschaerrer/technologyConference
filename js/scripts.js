// inject current year in footer
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

const hb = document.querySelector('#hamburgerBtn')
const pn = document.querySelector('#primaryNav')

hb.addEventListener('click', () => {
    hb.classList.toggle('open')
    pn.classList.toggle('open')
})