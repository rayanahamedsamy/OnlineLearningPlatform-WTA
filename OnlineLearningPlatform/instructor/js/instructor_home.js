let form = document.getElementById("noticeForm");

function validateForm(event) {
    if (event) event.preventDefault();
    let isValid = true;

    // Notice (at least 5 characters)
    let noticeInput = document.getElementById("notice");
    let noticeError = document.getElementById("noticeError");
    if (noticeInput.value.trim().length < 5) {
        noticeInput.style.border = "2px solid red";
        noticeError.style.display = "block";
        isValid = false;
    } else {
        noticeInput.style.border = "1px solid green";
        noticeError.style.display = "none";
    }

    if (!isValid) {
        return false;
    }

    alert("Notice Posted Successfully!");
    form.reset();
    return true;
}

form.addEventListener("submit", validateForm);

// Hide the error while the user corrects it
function clearError(event) {
    let errorBox = document.getElementById(event.target.name + "Error");
    if (errorBox) {
        errorBox.style.display = "none";
    }
    event.target.style.border = "";
}
form.addEventListener("input", clearError);

// Clear button: hide the error and border
form.addEventListener("reset", function () {
    document.getElementById("noticeError").style.display = "none";
    document.getElementById("notice").style.border = "";
});
