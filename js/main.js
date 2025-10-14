// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Highlight active navigation link based on scroll position--2

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + hight) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// scroll reveal

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 300
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Social Media Marketer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*display icon up when scroll*/

document.addEventListener("DOMContentLoaded", function () {
    const iconTop = document.querySelector('.footer-iconTop');
    const homeSection = document.getElementById('home');
    const footer = document.querySelector('.footer');

    function updateIconPosition() {
        const homeBottom = homeSection.getBoundingClientRect().bottom + window.scrollY;
        const scrollY = window.scrollY || window.pageYOffset;
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;

        if (scrollY >= homeBottom && scrollY < footerTop - window.innerHeight) {
            iconTop.style.position = 'fixed';
            iconTop.style.right = '40px';
            iconTop.style.bottom = '40px';
            iconTop.style.zIndex = '1000';
        } else {
            iconTop.style.position = '';
            iconTop.style.right = '';
            iconTop.style.bottom = '';
            iconTop.style.zIndex = '';
        }
    }

    window.addEventListener('scroll', updateIconPosition);
});



// Optional: scroll to top when icon is clicked
if (iconUp) {
    iconUp.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
