/* 
=============================================
FILE NAME: script.js
PURPOSE: Adds interactivity and functions to the website
=============================================
*/

// =============================================
// 1. FAQ TOGGLE FUNCTION
// Makes questions clickable to show/hide answers
// =============================================
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
  });
});

// =============================================
// 2. SMOOTH SCROLL FUNCTION
// Makes jumping between sections smooth instead of sudden
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// =============================================
// 3. DARK MODE TOGGLE FUNCTION
// Turns dark mode on/off and saves preference
// =============================================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved setting from browser storage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle when button is clicked
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});