const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value;
    const terms = document.getElementById("terms").checked;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const phoneError = document.getElementById("phoneError");
    const ageError = document.getElementById("ageError");
    const termsError = document.getElementById("termsError");
    const successMessage = document.getElementById("successMessage");

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    phoneError.textContent = "";
    ageError.textContent = "";
    termsError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Full name is required";
        isValid = false;
    } 
    else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        isValid = false;
    }
    else if (!/^[A-Za-z ]+$/.test(name)) {
        nameError.textContent = "Name can contain only letters";
        isValid = false;
    }


    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }


    // Username validation
    const usernamePattern = /^[A-Za-z0-9_]+$/;

    if (username === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    }
    else if (username.length < 4 || username.length > 15) {
        usernameError.textContent = "Username must be 4-15 characters";
        isValid = false;
    }
    else if (!usernamePattern.test(username)) {
        usernameError.textContent = "Only letters, numbers and _ are allowed";
        isValid = false;
    }


    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    }
    else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        isValid = false;
    }
    else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = "Password needs an uppercase letter";
        isValid = false;
    }
    else if (!/[a-z]/.test(password)) {
        passwordError.textContent = "Password needs a lowercase letter";
        isValid = false;
    }
    else if (!/[0-9]/.test(password)) {
        passwordError.textContent = "Password needs a number";
        isValid = false;
    }


    // Confirm password
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        isValid = false;
    }
    else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }


    // Phone validation
    const phonePattern = /^03[0-9]{9}$/;

    if (phone === "") {
        phoneError.textContent = "Phone number is required";
        isValid = false;
    }
    else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Enter a valid Pakistani phone number";
        isValid = false;
    }


    // Age validation
    if (age === "") {
        ageError.textContent = "Age is required";
        isValid = false;
    }
    else if (age < 13 || age > 100) {
        ageError.textContent = "Age must be between 13 and 100";
        isValid = false;
    }


    // Terms validation
    if (!terms) {
        termsError.textContent = "You must accept Terms & Conditions";
        isValid = false;
    }


    // Final result
    if (isValid) {
        successMessage.textContent = "Account created successfully!";

        form.reset();
    }

});