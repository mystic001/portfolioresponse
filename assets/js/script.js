var showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav__toogle', 'nav_menu');


const navlink = document.querySelectorAll('.nav_link');

function activeLink() {


    //This places the active link in the right position
    navlink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');


    //This removes the menu bar after the link has been clicked;
    const navMenu = document.querySelector('.nav_menu');
    navMenu.classList.toggle('show');

}

navlink.forEach(n => n.addEventListener('click', activeLink))

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


sr.reveal('.home__title,', {});
sr.reveal('.btn', {
    delay: 200
})

sr.reveal('.home__img', {
    delay: 400
})

sr.reveal('.home__social-icon', {
    interval: 200
})

sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {
    delay: 200
});
sr.reveal('.about__text', {
    delay: 400
});

sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {
    delay: 200
});
sr.reveal('.about__text', {
    delay: 400
});


sr.reveal('.skills__subtitle', {});

sr.reveal('.skills__text', {
    delay: 200
})
sr.reveal('.skills__data', {
    interval: 200
})

sr.reveal('.skills__img', {
    delay: 400
})


sr.reveal('.work__img', {
    interval: 200
})

sr.reveal('.contacts_input', {
    delay: 200
})