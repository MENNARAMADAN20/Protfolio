const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in-section');
    scrollObserver.observe(section);
});

const ticker = document.querySelector('.ticker-wrapper');
const clone = ticker.cloneNode(true);
document.querySelector('.skills-ticker').appendChild(clone);

window.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;
    glow.style.transform = `translate(${x}px, ${y}px)`;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});