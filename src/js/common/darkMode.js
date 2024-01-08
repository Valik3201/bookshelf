(function () {
  // Selecting the toggle switch input element and the root element
  const toggler = document.querySelector('.switch input[type="checkbox"]'),
    root = document.documentElement,
    // Retrieving the current theme from local storage or defaulting to 'dark'
    currentTheme = localStorage.getItem('theme') || 'dark';

  // Setting the initial state of the toggle switch based on the current theme
  if (currentTheme == 'light') toggler.removeAttribute('checked');
  else toggler.checked = 'true';

  // Applying the initial theme to the root element
  root.setAttribute('data-theme', currentTheme);

  // Adding a change event listener to the toggle switch
  toggler.addEventListener('change', toggleTheme, false);

  // Function to toggle between light and dark themes
  function toggleTheme(e) {
    if (this.checked) {
      // Switching to dark theme and updating local storage
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Switching to light theme and updating local storage
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
})();
