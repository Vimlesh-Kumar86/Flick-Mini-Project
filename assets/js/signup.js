document.addEventListener('DOMContentLoaded', () => {
    const modeButton = document.getElementById('mode');
    const searchInput = document.getElementById('search');
    const signupForm = document.getElementById('signup-form');
    const homeLink = document.querySelector('.home-link');
    const userLink = document.querySelector('.user-link');
    const searchIcon = document.querySelector('.search-icon');

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

    // Search icon click functionality
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            if (searchInput.value.trim() !== '') {
                alert(`Searching for: ${searchInput.value}`);
                searchInput.value = '';
            }
        });
    }

    // Sidebar icon functionality
    document.querySelectorAll('#lftIcon').forEach(icon => {
        icon.addEventListener('click', () => {
            if (icon.classList.contains('fa-home')) {
                window.location.href = 'index.html';
                window.location.reload();
            } else if (icon.classList.contains('fa-user')) {
                window.location.href = 'userlogin.html';
            } else if (icon.classList.contains('fa-cog')) {
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

    // User icon in header
    if (userLink) {
        userLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'userlogin.html';
        });
    }

    // Signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        // Validation
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all required fields.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert(`Sign Up successful!\nUsername: ${username}\nEmail: ${email}\nPassword: [Hidden for security]`);
        signupForm.reset();
    });
});