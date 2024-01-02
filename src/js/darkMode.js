(function () {
  const toggler = document.querySelector('.switch input[type="checkbox"]'),
    root = document.documentElement,
    currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme == 'light') toggler.removeAttribute('checked');
  else toggler.checked = 'true';
  root.setAttribute('data-theme', currentTheme);

  toggler.addEventListener('change', toggleTheme, false);

  function toggleTheme(e) {
    if (this.checked) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
})();
