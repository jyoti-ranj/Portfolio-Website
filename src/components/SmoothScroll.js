// src/hooks/useSmoothScroll.js

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
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

    // Cleanup event listeners on unmount
    return () => {
      scrollLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
};

export default SmoothScroll;
