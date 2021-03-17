// show menu
const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// active menu 
const navLink = document.querySelectorAll('.nav-link')
function activeLink() {
    navLink.forEach(nav => nav.classList.remove('active'))
    this.classList.add('active')

    // mobile
    navMenu.classList.remove('show')
}

navLink.forEach(nav => nav.addEventListener('click', activeLink))

// SCROLL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home-title',{}); 
sr.reveal('.btn',{delay: 200}); 
sr.reveal('.home-img',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about-img',{}); 
sr.reveal('.about-subtitle',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills-subtitle',{}); 
sr.reveal('.skills-text',{}); 
sr.reveal('.skills-data',{interval: 200}); 
sr.reveal('.skills-img',{delay: 600});

/*SCROLL portfolio*/
sr.reveal('.portfolio-img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact-input',{interval: 200}); 
sr.reveal('.contact-subtitle', {delay: 400});
sr.reveal('.contact-text', {delay: 600});