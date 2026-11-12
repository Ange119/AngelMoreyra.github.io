(() => {
  'use strict';
 
  const EMAIL = 'omoreyra34@gmail.com';
  const THEME_KEY = 'theme';
 
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const copyButton = document.getElementById('copy-email');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const yearEl = document.getElementById('year');
 
  let toastTimer;
 
  /* ---------- Toast ---------- */
  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 2800);
  }
 
  /* ---------- Tema ---------- */
  function updateThemeLabel() {
    const isLight = root.classList.contains('light');
    themeButton.setAttribute(
      'aria-label',
      window.i18n.t(isLight ? 'a11y.themeDark' : 'a11y.themeLight')
    );
  }

  function applyTheme(theme) {
    const isLight = theme === 'light';
    root.classList.toggle('light', isLight);
    themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    updateThemeLabel();
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      // La página sigue funcionando aunque el navegador bloquee localStorage.
    }
  }
 
  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || 'dark';
    } catch (error) {
      return 'dark';
    }
  }
 
  themeButton.addEventListener('click', () => {
    applyTheme(root.classList.contains('light') ? 'dark' : 'light');
  });
 
  /* ---------- Copiar email ---------- */
  copyButton.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error('Clipboard API no disponible en este contexto');
      }
      await navigator.clipboard.writeText(EMAIL);
      showToast(window.i18n.t('toast.emailCopied'));
    } catch (error) {
      showToast(window.i18n.t('toast.copyError', { email: EMAIL }));
    }
  });
 
  /* ---------- Idioma ---------- */
  document.addEventListener('languagechange', updateThemeLabel);
 
  /* ---------- Inicialización ---------- */
  applyTheme(getSavedTheme());
  yearEl.textContent = new Date().getFullYear();
})();