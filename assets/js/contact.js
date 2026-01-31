document.addEventListener('DOMContentLoaded', () => {
    const modeButton = document.getElementById('mode');
    const searchInput = document.getElementById('search');
    const contactForm = document.getElementById('contact-form');

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

    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '') {
            alert('Please fill in all required fields (Name and Email).');
            return;
        }

        alert(`Message sent!\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
        contactForm.reset();
    });

    // XLSX script
    var gk_isXlsx = false;
    var gk_xlsxFileLookup = {};
    var gk_fileData = {};
    function filledCell(cell) {
        return cell !== '' && cell != null;
    }
    function loadFileData(filename) {
        if (gk_isXlsx && gk_xlsxFileLookup[filename]) {
            try {
                var workbook = XLSX.read(gk_fileData[filename], { type: 'base64' });
                var firstSheetName = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[firstSheetName];
                var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false, defval: '' });
                var filteredData = jsonData.filter(row => row.some(filledCell));
                var headerRowIndex = filteredData.findIndex((row, index) =>
                    row.filter(filledCell).length >= filteredData[index + 1]?.filter(filledCell).length
                );
                if (headerRowIndex === -1 || headerRowIndex > 25) {
                    headerRowIndex = 0;
                }
                var csv = XLSX.utils.aoa_to_sheet(filteredData.slice(headerRowIndex));
                csv = XLSX.utils.sheet_to_csv(csv, { header: 1 });
                return csv;
            } catch (e) {
                console.error(e);
                return "";
            }
        }
        return gk_fileData[filename] || "";
    }
});