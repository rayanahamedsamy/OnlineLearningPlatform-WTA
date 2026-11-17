let form = document.getElementById("loginForm");

function validateForm(event) {
    if (event) event.preventDefault();
    let isValid = true;

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

    if (!isValid) {
        return false;
    }

    alert("Login Successful!");
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
