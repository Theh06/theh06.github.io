document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggleButton) {
                themeToggleButton.classList.remove('fa-moon');
                themeToggleButton.classList.add('fa-sun');
                themeToggleButton.style.color = 'black';
            }
        } else {
            document.body.classList.remove('dark-mode');
            if (themeToggleButton) {
                themeToggleButton.classList.remove('fa-sun');
                themeToggleButton.classList.add('fa-moon');
                themeToggleButton.style.color = 'white';
            }
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            if (isDarkMode) {
                themeToggleButton.classList.remove('fa-moon');
                themeToggleButton.classList.add('fa-sun');
                themeToggleButton.style.color = 'black';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleButton.classList.remove('fa-sun');
                themeToggleButton.classList.add('fa-moon');
                themeToggleButton.style.color = 'white';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    window.addEventListener('storage', (event) => {
        if (event.key === 'theme') {
            applyTheme(event.newValue);
        }
    });
});
