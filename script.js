document.addEventListener('DOMContentLoaded', () => {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const themeButtons = document.querySelectorAll('.theme-button');

    function updateClock() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
    }

    function switchTheme(theme) {
        const root = document.documentElement;
        switch (theme) {
            case 'pink':
                root.style.setProperty('--glow-color', '#ff00ff');
                break;
            case 'purple':
                root.style.setProperty('--glow-color', '#8A2BE2');
                break;
            case 'blue':
            default:
                root.style.setProperty('--glow-color', '#00aaff');
                break;
        }

        themeButtons.forEach(button => {
            if (button.dataset.theme === theme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchTheme(button.dataset.theme);
        });
    });

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display clock immediately
});