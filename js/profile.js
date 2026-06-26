document.addEventListener('DOMContentLoaded', () => {
    
    // --- LOGOUT LOGIC ---
    const logoutBtn = document.getElementById('logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Elak form submit kalau ada
            console.log("Logout button clicked!"); // Check ni kat console
            
            // Cuba path ni, kalau tak jadi, Nana check balik di mana folder login
            // Kalau login page Nana ada kat folder luar, guna: '../index.html'
            window.location.href = "../auth/login.html"; 
        });
    }

    // --- DARK MODE ---
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    if (darkModeCheckbox) {
        darkModeCheckbox.addEventListener('change', (e) => {
            document.documentElement.classList.toggle("dark", e.target.checked);
            localStorage.setItem("theme", e.target.checked ? "dark" : "light");
        });
    }

    // --- EXPORT DATA ---
    document.getElementById('export-data-btn')?.addEventListener('click', () => {
        alert("Exporting report...");
    });

    // --- CLEAR CACHE ---
    document.getElementById('clear-cache-btn')?.addEventListener('click', () => {
        localStorage.clear();
        alert("Cache cleared!");
        location.reload();
    });
});