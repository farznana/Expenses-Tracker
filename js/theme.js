document.addEventListener('DOMContentLoaded', () => {
    // 1. Apply theme
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    // 2. Toggle checkbox
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    if (darkModeCheckbox) {
        darkModeCheckbox.checked = localStorage.getItem("theme") === "dark";
        darkModeCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        });
    }
});