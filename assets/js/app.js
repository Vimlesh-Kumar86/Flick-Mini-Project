document.addEventListener('DOMContentLoaded', () => {
    const modeButton = document.getElementById('mode');
    const searchInput = document.getElementById('search');
    
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
            } else if (icon.title === 'Profile') {
                window.location.href = 'user.html';
            } else if (icon.title === 'Settings') {
                alert('Settings page not implemented yet.');
            }
        });
    });
});