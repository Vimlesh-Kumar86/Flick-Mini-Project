document.addEventListener('DOMContentLoaded', () => {
    const modeButton = document.getElementById('mode');
    const searchInput = document.getElementById('search');
    const loginForm = document.getElementById('login-form');
    const homeLink = document.querySelector('.home-link');

    // Dark mode toggle
    modeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        modeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Search functionality
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });

    // Sidebar icon functionality
    document.querySelectorAll('#lftIcon').forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.title === 'Home') {
                window.location.href = 'index.html';
                window.location.reload();
            } else if (icon.title === 'Profile') {
                window.location.href = 'userlogin.html';
            } else if (icon.title === 'Settings') {
                alert('Settings page not implemented yet.');
            }
        });
    });

    // Home button in header
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
            window.location.reload();
        });
    }

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === '' || password === '') {
            alert('Please fill in both Username/Email and Password.');
            return;
        }

        alert(`Login attempt:\nUsername/Email: ${username}\nPassword: [Hidden for security]`);
        loginForm.reset();
    });
});