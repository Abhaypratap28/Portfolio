
// Initialize AOS (if available)
if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 100 });
}

// Typed.js Effect (if available)
if (window.Typed) {
    new Typed('#typed', {
        strings: ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// Theme Toggle Logic with saved preference
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') html.classList.add('dark');
else html.classList.remove('dark');

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.classList.add('glass', 'shadow-lg', 'py-2');
        nav.classList.remove('py-4');
    } else {
        nav.classList.remove('glass', 'shadow-lg', 'py-2');
        nav.classList.add('py-4');
    }
});

// Skill Bar Animation on Scroll
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const observeSkills = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }
        });
    }, { threshold: 0.5 });

    observeSkills.observe(skillsSection);
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Form Submission (Simulated) - guard for missing form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you — I will get back to you soon!');
        e.target.reset();
    });
}


    