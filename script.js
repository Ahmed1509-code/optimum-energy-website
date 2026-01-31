// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close menu when clicking links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth scroll (already handled by CSS, but good to have for older browsers if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const targetId = href.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 65,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submit handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn ? btn.textContent : '';
        if (btn) {
            btn.disabled = true;
            btn.textContent = 'Sending...';
        }
        // Simulate send (replace with real endpoint when backend is ready)
        setTimeout(() => {
            const formContainer = document.querySelector('.contact-form-container');
            if (formContainer) {
                formContainer.innerHTML = '<div class="form-success-message"><h3>Thank you for your message</h3><p>We have received your inquiry and will get back to you shortly.</p></div>';
            }
            if (btn) {
                btn.disabled = false;
                btn.textContent = originalText;
            }
        }, 800);
    });
}
