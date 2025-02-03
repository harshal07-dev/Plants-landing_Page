// Toggle btn 
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    navToggle.classList.toggle('ri-close-large-line');
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        navToggle.classList.toggle('ri-close-large-line');
    })
});

// show-scroll-up ***
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");
    
    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    } else {
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll",scrollUp);

// change background-header ***
const scrollHeader = () => {
    const header = document.getElementById("navbar");
    
    if(this.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500")
    } else {
        header.classList.remove("border-b", "border-yellow-500")
    }
}
window.addEventListener("scroll",scrollHeader);

// scroll sections active link ***
const activeLink = () => {
    const sections = document.querySelectorAll("section")
    const navLink = document.querySelectorAll(".nav-link")

    let current = "home"

    sections.forEach(section => {
        const sectionTop = section.offsetTop

        if(this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id")
        }
    })

    navLink.forEach(items => {
        items.classList.remove("active")

        if(items.href.includes(current)) {
            items.classList.add("active")
        }
    })
}
window.addEventListener("scroll", activeLink);

// swiper ***
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteration: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidePreviews: 1
        },
        768: {
            slidePreviews: 2
        },
        1024: {
            slidePreviews: 3
        },
    }
    });
// scroll reveal animation ***
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
}) 
sr.reveal(`.home__data , .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy__right`)
sr.reveal(`.home__image`, {delay: 500, scale: 0.5} )

sr.reveal(`.service__card, .popular_card`, {interval: 100})

sr.reveal(`.about__leaf`, {delay: 100, origin: "right"})
sr.reveal(`.about__item__1-content , .about__item__2-img`, {origin: "right"})
sr.reveal(`.about__item__2-content , .about__item__1-img`, {origin: "left"})

sr.reveal(`.review__leaf, .footer__floral`, {delay: 1000, origin: "left"})
