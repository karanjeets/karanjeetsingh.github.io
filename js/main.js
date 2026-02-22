// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            const offset = 70;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Subtle fade-in on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Citation map fullscreen toggle
const mapOverlay = document.getElementById('citation-map-overlay');
const mapFullscreenBtn = document.querySelector('.citation-map-fullscreen');
const mapCloseBtn = document.querySelector('.citation-map-close');

if (mapFullscreenBtn && mapOverlay) {
    mapFullscreenBtn.addEventListener('click', () => {
        mapOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (mapCloseBtn && mapOverlay) {
    mapCloseBtn.addEventListener('click', () => {
        mapOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (mapOverlay) {
    mapOverlay.addEventListener('click', (e) => {
        if (e.target === mapOverlay) {
            mapOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mapOverlay.classList.contains('active')) {
            mapOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
