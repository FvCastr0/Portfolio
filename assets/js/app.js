window.sr = ScrollReveal({ reset: true })

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 70,
    }).go()
})
sr.reveal('.title', { delay: 2000 })
sr.reveal('.subtitle', { delay: 2300 })
sr.reveal('.btnAbout', { delay: 2450 })
sr.reveal('.icons', { delay: 2600 })
