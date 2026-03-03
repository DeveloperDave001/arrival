// Preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 2200);
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Set dark mode as default
localStorage.setItem('theme', 'dark');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Parallax effect
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroBg = document.querySelector('.hero-bg');
  const heroContent = document.querySelector('.hero-content');
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
  }
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
    heroContent.style.opacity = 1 - (scrolled / 600);
  }
});

// Nav background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    if (body.classList.contains('light-mode')) {
      nav.style.background = 'rgba(245,242,236,0.97)';
    } else {
      nav.style.background = 'rgba(10,10,10,0.97)';
    }
    nav.style.backdropFilter = 'blur(12px)';
  } else {
    nav.style.background = '';
    nav.style.backdropFilter = 'blur(4px)';
  }
});
