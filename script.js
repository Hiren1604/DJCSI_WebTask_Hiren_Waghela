let menuOpen = document.querySelector(".open");
let menuClose = document.querySelector(".close");
let menu = document.querySelector(".nav-menu");

menuOpen.addEventListener("click",()=> {
    menu.classList.add("active")
});

menuClose.addEventListener("click",()=> {
    menu.classList.remove("active");
});

const sr = ScrollReveal(
    {
        origin: "top",
        distance: "80px",
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        reset: true
    }
);
sr.reveal(`nav,.heading-container`)
sr.reveal(`.left, .com-left`, {origin: "left"});
sr.reveal(`.right, .com-right`, {origin: "right"});
sr.reveal(`.card`,{interval: 300, origin : "bottom"});
sr.reveal(`.test-card`,{interval: 300, origin: "top"});
sr.reveal(`.testimonial`, {interval: 300, origin: "bottom", delay: 500});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offsetPosition = target.offsetTop - document.querySelector('nav').offsetHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

