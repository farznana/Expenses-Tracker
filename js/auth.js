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
                // Kita tak set "isLoggedIn" kat sini sebab kena setup currency dulu
                alert("Akaun berjaya didaftarkan! Jom setup profile anda.");
                window.location.href = "choose-currency.html";
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
                
                // Set status login
                localStorage.setItem("isLoggedIn", "true");
                
                alert("Selamat datang kembali!");
                window.location.href = "../dashboard/index.html"; 
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
                
                // Set status login
                localStorage.setItem("isLoggedIn", "true");
                
                alert(`Selamat datang ${result.user.displayName}!`);
                
                // Kalau user baru, hantar ke setup. 
                // Kalau dah ada data/user lama, boleh terus ke dashboard.
                window.location.href = "choose-currency.html"; 
            } catch (error) {
                alert("Error Google Login: " + error.message);
            }
        });
    }
});