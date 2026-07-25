(() => {
  'use strict';

  const config = window.VH_CONFIG;
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const apiLink = document.getElementById('apiLink');
  const appVersion = document.getElementById('appVersion');
  const toast = document.getElementById('toast');

  const savedTheme = localStorage.getItem('vh-theme');
  if (savedTheme === 'dark') {
    root.dataset.theme = 'dark';
    themeToggle.textContent = '☀';
  }

  apiLink.href = config.API_URL;
  appVersion.textContent = `Versión ${config.VERSION}`;

  themeToggle.addEventListener('click', () => {
    const darkMode = root.dataset.theme === 'dark';

    if (darkMode) {
      delete root.dataset.theme;
      localStorage.setItem('vh-theme', 'light');
      themeToggle.textContent = '☾';
    } else {
      root.dataset.theme = 'dark';
      localStorage.setItem('vh-theme', 'dark');
      themeToggle.textContent = '☀';
    }
  });

  document.querySelectorAll('[data-module]').forEach((button) => {
    button.addEventListener('click', () => {
      const moduleName = button.dataset.module.replaceAll('_', ' ');
      showToast(`${moduleName}: módulo pendiente de implementación`);
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');

    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
      toast.classList.remove('visible');
    }, 2400);
  }
})();
