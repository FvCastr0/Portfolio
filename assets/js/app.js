window.sr = ScrollReveal({ reset: false })
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 50,
    }).go()
})
sr.reveal('.title', { delay: 1500 })
sr.reveal('.subtitle', { delay: 1700 })
sr.reveal('.btnAbout', { delay: 2000 })
sr.reveal('.icons', { delay: 2300 })