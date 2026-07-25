// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

// ---------- Typing Animation ----------

const typingText = document.querySelector(".typing-text");

const words = [
    "AI & Data Science Student",
    "Machine Learning Enthusiast",
    "NLP Developer",
    "Frontend Developer",
    "Cybersecurity Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex++);
    }
    else {

        typingText.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {

        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {

            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Sticky Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "14px 8%";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
    }

    else {

        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";
    }

});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});


// ===============================
// Mobile Menu
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// ===============================
// Close Mobile Menu
// ===============================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ===============================
// Reveal on Scroll
// ===============================

const revealElements = document.querySelectorAll("section");

function reveal() {

    revealElements.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 120) {

            section.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// Console Message
// ===============================

console.log("Welcome to Gowthami's Portfolio 🚀");
window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.pageYOffset/totalHeight)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});
const topBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});