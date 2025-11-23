/* ============================================
   Dark Mode Toggle
   ============================================ */

(function() {
  'use strict';

  // Check for saved theme preference or default to 'light' mode
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply the theme on page load
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Create dark mode toggle button
  function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle';
    toggle.setAttribute('aria-label', 'Toggle dark mode');
    toggle.setAttribute('role', 'switch');
    toggle.setAttribute('aria-checked', currentTheme === 'dark');

    const toggleText = document.createElement('span');
    toggleText.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    toggle.appendChild(toggleText);

    // Add click event
    toggle.addEventListener('click', function() {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'light' ? 'dark' : 'light';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      toggleText.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
      toggle.setAttribute('aria-checked', newTheme === 'dark');
    });

    document.body.appendChild(toggle);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDarkModeToggle);
  } else {
    createDarkModeToggle();
  }
})();
