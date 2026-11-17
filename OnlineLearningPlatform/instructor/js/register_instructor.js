let form = document.getElementById("instructorForm");

function validateForm(event) {
    if (event) event.preventDefault();
    let isValid = true;

    // Name must not be empty
    let nameInput = document.getElementById("name");
    let nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameInput.style.border = "2px solid red";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameInput.style.border = "1px solid green";
        nameError.style.display = "none";
    }

    // Email (must contain @ and .)
    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        emailInput.style.border = "2px solid red";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailInput.style.border = "1px solid green";
        emailError.style.display = "none";
    }

    // Gender (one radio must be selected)
    let genderError = document.getElementById("genderError");
    if (!document.querySelector("input[name='gender']:checked")) {
        genderError.style.display = "block";
        isValid = false;
    } else {
        genderError.style.display = "none";
    }

    // Username (at least 5 characters)
    let usernameInput = document.getElementById("username");
    let usernameError = document.getElementById("usernameError");
    if (usernameInput.value.trim().length < 5) {
        usernameInput.style.border = "2px solid red";
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameInput.style.border = "1px solid green";
        usernameError.style.display = "none";
    }

    // Password (at least 8 characters)
    let passwordInput = document.getElementById("password");
    let passwordError = document.getElementById("passwordError");
    if (passwordInput.value.length < 8) {
        passwordInput.style.border = "2px solid red";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordInput.style.border = "1px solid green";
        passwordError.style.display = "none";
    }

    // Confirm Password must match Password
    let confirmInput = document.getElementById("confirm_password");
    let confirmError = document.getElementById("confirm_passwordError");
    if (confirmInput.value === "" || confirmInput.value !== passwordInput.value) {
        confirmInput.style.border = "2px solid red";
        confirmError.style.display = "block";
        isValid = false;
    } else {
        confirmInput.style.border = "1px solid green";
        confirmError.style.display = "none";
    }

    if (!isValid) {
        return false;
    }

    alert("Registration Successful!");
    form.reset();
    return true;
}

form.addEventListener("submit", validateForm);

// Hide a field's error while the user corrects it
function clearError(event) {
    let errorBox = document.getElementById(event.target.name + "Error");
    if (errorBox) {
        errorBox.style.display = "none";
    }
    event.target.style.border = "";
}
form.addEventListener("input", clearError);
form.addEventListener("change", clearError);

// Clear button: hide all errors and borders
form.addEventListener("reset", function () {
    document.querySelectorAll(".error").forEach((errorBox) => {
        errorBox.style.display = "none";
    });
    form.querySelectorAll("input").forEach((field) => {
        field.style.border = "";
    });
});
