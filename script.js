// Sign-up and Sign-in
const loginContainer = document.querySelector(".sign-up");
const mainContainer = document.querySelector(".main-container");
const signUpTitle = document.querySelector(".sign-up-title");
const signInBtn = document.getElementById("sign-in");
const register = document.querySelector(".register");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameLabel = document.getElementById("name-label");

let counter = 1;
signInBtn.addEventListener('click', () => {
    counter++;
    if (counter % 2 === 0) {
        register.textContent = 'Login';
        signInBtn.textContent = 'Sign Up';
        signUpTitle.textContent = 'Welcome Back, Sign In';
        nameInput.style.display = 'none';
        nameLabel.style.display = 'none';
    } else {
        register.textContent = 'Register';
        signInBtn.textContent = 'Sign In';
        signUpTitle.textContent = 'Welcome to My Portfolio';
        nameInput.style.display = 'block';
        nameLabel.style.display = 'block';
    }
});

register.addEventListener('click', () => {
    const emailValid = emailInput.value.includes("@gmail.com");
    const passwordValid = passwordInput.value.length >= 8;
    if (register.textContent === "Register") {
        if (nameInput.value.length > 5 && emailValid && passwordValid) {
            mainContainer.style.display = 'block';
            loginContainer.style.display = 'none';
        }
    } else if (emailValid && passwordValid) {
        mainContainer.style.display = 'block';
        loginContainer.style.display = 'none';
    }
});

// Mobile Menu
const menu = document.getElementById("menubar");
const navbar2 = document.querySelector(".navbar2");
const close = document.getElementById("close");

menu.addEventListener('click', () => {
    navbar2.classList.add('active');
});

close.addEventListener('click', () => {
    navbar2.classList.remove('active');
});

// Contact Section
const contactBtn = document.getElementById("btn2");
const contactList = document.querySelector(".contact-list");
const emailCard = document.querySelector(".email-card");
const phoneCard = document.querySelector(".phone-card");
const smsCard = document.querySelector(".sms-card");
const back = document.getElementById("left-arrow");
const emailBtn = document.getElementById("btn3");
const phoneBtn = document.getElementById("btn4");
const smsBtn = document.getElementById("btn5");
const emailBack = document.getElementById("email-back");
const phoneBack = document.getElementById("phone-back");
const smsBack = document.getElementById("sms-back");

contactBtn.addEventListener('click', () => {
    contactList.style.display = 'block';
});

back.addEventListener('click', () => {
    contactList.style.display = 'none';
    emailCard.style.display = 'none';
    phoneCard.style.display = 'none';
    smsCard.style.display = 'none';
});

emailBtn.addEventListener('click', () => {
    emailCard.style.display = 'block';
    contactList.style.display = 'none';
});

emailBack.addEventListener('click', () => {
    emailCard.style.display = 'none';
    contactList.style.display = 'block';
});

phoneBtn.addEventListener('click', () => {
    phoneCard.style.display = 'block';
    contactList.style.display = 'none';
});

phoneBack.addEventListener('click', () => {
    phoneCard.style.display = 'none';
    contactList.style.display = 'block';
});

smsBtn.addEventListener('click', () => {
    smsCard.style.display = 'block';
    contactList.style.display = 'none';
});

smsBack.addEventListener('click', () => {
    smsCard.style.display = 'none';
    contactList.style.display = 'block';
});

// Skills
const viewSkillsBtn = document.getElementById("view-skills");
const hideSkillsBtn = document.getElementById("hide-skills");
const viewAllSkillsBtn = document.getElementById("view-all-skills");
const skill3 = document.querySelector(".skill3");
const skill4 = document.querySelector(".skill4");

viewSkillsBtn.addEventListener('click', () => {
    skill3.style.display = 'block';
    skill4.style.display = 'block';
    viewSkillsBtn.style.display = 'none';
    hideSkillsBtn.style.display = 'block';
    viewAllSkillsBtn.style.display = 'block';
});

hideSkillsBtn.addEventListener('click', () => {
    skill3.style.display = 'none';
    skill4.style.display = 'none';
    viewSkillsBtn.style.display = 'block';
    hideSkillsBtn.style.display = 'none';
    viewAllSkillsBtn.style.display = 'none';
});

viewAllSkillsBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById("skill").offsetTop,
        behavior: 'smooth'
    });
});

// Projects
const viewProjectsBtn = document.getElementById("view-projects");
const hideProjectsBtn = document.getElementById("hide-projects");
const viewAllProjectsBtn = document.getElementById("view-all-projects");
const project4 = document.querySelector(".project4");
const project5 = document.querySelector(".project5");
const project6 = document.querySelector(".project6");

viewProjectsBtn.addEventListener('click', () => {
    project4.style.display = 'block';
    project5.style.display = 'block';
    project6.style.display = 'block';
    viewProjectsBtn.style.display = 'none';
    hideProjectsBtn.style.display = 'block';
    viewAllProjectsBtn.style.display = 'block';
});

hideProjectsBtn.addEventListener('click', () => {
    project4.style.display = 'none';
    project5.style.display = 'none';
    project6.style.display = 'none';
    viewProjectsBtn.style.display = 'block';
    hideProjectsBtn.style.display = 'none';
    viewAllProjectsBtn.style.display = 'none';
});

viewAllProjectsBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById("project").offsetTop,
        behavior: 'smooth'
    });
});

// Dark Mode
const darkToggle = document.getElementById("light");
let darkMode = false;

darkToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark', darkMode);
    darkToggle.className = darkMode ? "fas fa-sun" : "fas fa-moon";
});

// Social Links and Footer Links
const socialLinks = [
    { link: "facebook-link", text: "facebook-text" },
    { link: "github-link", text: "github-text" },
    { link: "youtube-link", text: "youtube-text" },
    { link: "linkedin-link", text: "linkedin-text" },
    { link: "instagram-link", text: "instagram-text" },
    { link: "tiktok-link", text: "tiktok-text" },
];

const footerLinks = [
    { link: "footer-home", text: "body-text" },
    { link: "footer-about-me", text: "about-me-text" },
    { link: "footer-skill", text: "skill-text" },
    { link: "footer-project", text: "project-text" },
    { link: "footer-contact-to-me", text: "contact-to-me-text" },
];

socialLinks.forEach(({ link, text }) => {
    const element = document.getElementById(link);
    const textElement = document.getElementById(text);
    element.addEventListener('mouseenter', () => {
        textElement.style.display = 'block';
    });
    element.addEventListener('mouseleave', () => {
        textElement.style.display = 'none';
    });
});

footerLinks.forEach(({ link, text }) => {
    const element = document.getElementById(link);
    const textElement = document.getElementById(text);
    element.addEventListener('mouseenter', () => {
        textElement.style.display = 'block';
    });
    element.addEventListener('mouseleave', () => {
        textElement.style.display = 'none';
    });
});

// Fade-in on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
    observer.observe(element);
});

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});