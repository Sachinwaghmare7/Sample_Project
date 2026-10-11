// Show the Signup Form and hide the main section
function showSignupForm() {
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
}

// Show the Login Form and hide the main section
function showLoginForm() {
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
}

// Function to validate the signup form (password match check)
function validateSignupForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; // Prevent form submission
    }

    // Save the credentials if passwords match
    saveCredentials();
    alert("Signup successful!");

    // Hide the signup form and show the login form after successful signup
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';

    return false; // Prevent form submission as we're switching forms manually
}

// Function to save the credentials in localStorage
function saveCredentials() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Store username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

// Function to validate the login form
function validateLoginForm() {
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    var loginUsername = document.getElementById('login-username').value;
    var loginPassword = document.getElementById('login-password').value;

    // Check if login credentials match stored credentials
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("Login successful!");

        // Optionally, you can redirect or close the window here
        // window.location.href = 'your-dashboard.html'; // Example redirection

        return true; // Form submission can be allowed
    } else {
        alert("Invalid credentials. Please try again.");
        return false;
    }
}