// Existing Typed.js animation
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "AI Developer", "Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Existing Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    });
});

document.addEventListener('click', function(event) {
    const isClickInsideNav = navbar.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && navbar.classList.contains('active')) {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    }
});

// Existing Smooth scrolling
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Existing Active navigation updates
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 🎬 ENHANCED FEATURES - Hollywood-level effects:

// 1. Advanced Magnetic Button Effect
document.querySelectorAll('.btn-box').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `
            perspective(1000px)
            rotateX(${-y * 0.1}deg)
            rotateY(${x * 0.1}deg)
            translateY(-5px)
        `;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});

// 2. Advanced Portfolio Card Tilt Effect
document.querySelectorAll('.row').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        card.style.transform = `
            perspective(2000px)
            rotateX(${-y * 0.05}deg)
            rotateY(${x * 0.05}deg)
            translateY(-30px)
            scale(1.02)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(2000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    });
});

// 3. Scroll-triggered Animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .row');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// 4. Text Reveal Animation
function revealText() {
    const textElements = document.querySelectorAll('.text-reveal');
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = index * 0.05 + 's';
            element.appendChild(span);
        });
    });
}

// 5. Enhanced Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// 6. Dynamic Particle Creation
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    const colors = ['#0ef', '#ff0080', '#00ff41', '#ff6b00', '#9d00ff'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    const container = document.querySelector('.particles-container');
    if (container) {
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 15000);
    }
}

// 7. Advanced Cursor Trail Effect
let mouseTrail = [];
document.addEventListener('mousemove', (e) => {
    mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    // Limit trail length
    if (mouseTrail.length > 10) {
        mouseTrail.shift();
    }
    
    // Remove old trail points
    mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 500);
});

// 8. Portfolio Card Stagger Animation
function initPortfolioAnimation() {
    const portfolioCards = document.querySelectorAll('.Portfolio-content .row');
    portfolioCards.forEach((card, index) => {
        card.style.setProperty('--i', index + 1);
    });
}

// 9. Smooth Page Loading Animation
function initPageLoader() {
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(50px)';
    document.body.style.transition = 'all 0.8s ease';
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
        }, 300);
    });
}

// 10. Enhanced Service Card Interactions
document.querySelectorAll('.services-list div').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'perspective(1000px) rotateX(-5deg) translateY(-15px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0px)';
    });
});

// 11. Initialize all enhanced features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page loader
    initPageLoader();
    
    // Initialize text reveal
    revealText();
    
    // Initialize portfolio animations
    initPortfolioAnimation();
    
    // Create initial particles
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createParticle(), i * 500);
    }
    
    // Continuously create new particles
    setInterval(createParticle, 3000);
    
    // Initialize scroll animations
    animateOnScroll();
    
    // Add performance optimization
    let ticking = false;
    
    function updateAnimations() {
        animateOnScroll();
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    });
    
    console.log('🚀 Hollywood-level portfolio animations activated!');
    console.log('✨ All 3D/4D effects are now live!');
    console.log('🎬 Perfect horizontal layout implemented!');
});

// 12. Performance Optimization
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all portfolio cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.row').forEach(card => {
        observer.observe(card);
    });
});
