// public/smoothScroll.js

document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
  
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  