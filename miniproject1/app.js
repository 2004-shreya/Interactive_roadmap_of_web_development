
// Redirect to index.html if already logged in
window.onload = function () {
    if (sessionStorage.getItem("loggedIn")) {
        window.location.href = "index.html";
    }
};

// Toggle between Login and Signup forms
document.getElementById("showSignup")?.addEventListener("click", function () {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "block";
});

document.getElementById("showLogin")?.addEventListener("click", function () {
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
});

// Handle Login Form Submission
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve stored user details
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        sessionStorage.setItem("loggedIn", true);
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Handle Signup Form Submission
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Save user details to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup successful! You can now log in.");
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
});

// Handle Logout
document.getElementById("logoutButton")?.addEventListener("click", function () {
    sessionStorage.removeItem("loggedIn");
    alert(" logged out.");
    window.location.href = "login.html";
});