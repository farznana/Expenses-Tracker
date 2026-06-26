document.addEventListener('DOMContentLoaded', () => {
    // Mapping ID input kepada key localStorage
    const fields = {
        name: document.getElementById('name-input'),
        email: document.getElementById('email-input'),
        phone: document.getElementById('phone-input'),
        dob: document.getElementById('dob-input'),
        location: document.getElementById('location-input'),
        job: document.getElementById('job-input'),
        income: document.getElementById('income-input')
    };

    // Load data dari localStorage
    Object.keys(fields).forEach(key => {
        const savedValue = localStorage.getItem(`user${key.charAt(0).toUpperCase() + key.slice(1)}`);
        if (savedValue) {
            fields[key].value = savedValue;
        }
    });

    // Save data bila tekan button
    document.getElementById('save-btn').addEventListener('click', () => {
        Object.keys(fields).forEach(key => {
            localStorage.setItem(`user${key.charAt(0).toUpperCase() + key.slice(1)}`, fields[key].value);
        });
        // Redirect balik ke profile page
        window.location.href = "profile.html";
    });
});