// app.js

(function() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav-principal');

  function openMenu() {
    nav.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
  }

  function closeMenu() {
    nav.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });

    // Fecha ao clicar em links
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') closeMenu();
    });

    // Fecha com Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Ano no rodapé
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();