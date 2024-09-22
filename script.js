 function applyDarkModePreference() {
      const darkMode = localStorage.getItem('darkMode');
      if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

    // Apply the stored preference when the page loads
    applyDarkModePreference()
    // Event listener for the dark mode toggle button
    document.getElementById('darkModeToggle').addEventListener('click', function() {
      const darkMode = localStorage.getItem('darkMode');

      if (darkMode !== 'enabled') {
        // Enable dark mode and store preference
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        // Disable dark mode and store preference
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    });