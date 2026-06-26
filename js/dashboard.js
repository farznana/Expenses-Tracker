document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================================
    // 1. KOD GET STARTED (LOGIK ASAL KAU YANG WAJIB KEKAL)
    // =========================================================
    const btnGetStarted = document.getElementById("btn-get-started");
    const page1 = document.getElementById("starting-page-1");
    const page2 = document.getElementById("starting-page-2");

    if (btnGetStarted) {
        btnGetStarted.addEventListener("click", function() {
            page1.classList.remove("active");
            page1.classList.add("hidden");
            
            page2.classList.remove("hidden");
            page2.classList.add("active");
        });
    }

    // =========================================================
    // 2. SYNCHRONIZE DARK MODE DARI PROFILE KE DASHBOARD
    // =========================================================
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    // =========================================================
    // 3. AUTO-UPDATE SIMBOL CURRENCY KAT DASHBOARD HTML
    // =========================================================
    // Ambil currency pilihan user dari localStorage. Default SGD kalau tak ada.
    const userCurrency = localStorage.getItem("userCurrency") || "SGD";

    // Kod ni akan cari semua elemen yang kita tanda dengan class "currency-symbol" 
    // dan tukar teks dia secara paksa ikut pilihan baru user!
    const currencyElements = document.querySelectorAll(".currency-symbol");
    if (currencyElements.length > 0) {
        currencyElements.forEach(element => {
            element.innerText = userCurrency;
        });
    }
});