document.addEventListener('DOMContentLoaded', () => {
    const modeButton = document.getElementById('mode');
    const sendButton = document.getElementById('intro');
    const searchInput = document.getElementById('search');
    
    // Dark mode toggle
    modeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        modeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Contact form submission
    sendButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Message sent!\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
            // Reset form
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Please fill in all required fields (Name, Email, Message).');
        }
    });

    // Search functionality
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });
});