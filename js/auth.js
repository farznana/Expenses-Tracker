import { auth, googleProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "./firebase-config.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. LOGIC REGISTER
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;

            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Akaun berjaya didaftarkan! Jom setup profile anda.");
                window.location.href = "choose-currency.html"; // Hantar ke onboarding pertama!
            } catch (error) {
                alert("Error Register: " + error.message);
            }
        });
    }

    // 2. LOGIC LOGIN EMAIL/PASSWORD
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Selamat datang kembali!");
                window.location.href = "../dashboard/index.html"; // User lama terus masuk dashboard
            } catch (error) {
                alert("Error Login: " + error.message);
            }
        });
    }

    // 3. LOGIC GOOGLE LOGIN
    const btnGoogle = document.getElementById("btn-google-login");
    if (btnGoogle) {
        btnGoogle.addEventListener("click", async () => {
            try {
                const result = await signInWithPopup(auth, googleProvider);
                alert(`Selamat datang ${result.user.displayName}!`);
                
                // Pembaharuan: Kalau user baru google, bawa setup. Kalau user lama, pergi dashboard.
                // Buat masa ni kita hantar ke choose-currency dulu untuk test.
                window.location.href = "choose-currency.html"; 
            } catch (error) {
                alert("Error Google Login: " + error.message);
            }
        });
    }
});