document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const isOpen = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
});


