// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Scroll Reveal Animation
const scrollElements = document.querySelectorAll('.scroll-reveal');

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
};

const revealElement = (element) => {
    element.classList.add('visible');
};

const handleScroll = () => {
    scrollElements.forEach((el) => {
        if (isInViewport(el)) {
            revealElement(el);
        }
    });
};

window.addEventListener('scroll', handleScroll);

// Trigger Scroll Animation on Page Load
handleScroll();

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Interactive Hover Effects for Team Cards
const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});

// Assignments Highlight on Hover
const assignmentCards = document.querySelectorAll('.assignment-card');

assignmentCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 15px 30px rgba(124, 58, 237, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '';
    });
});
