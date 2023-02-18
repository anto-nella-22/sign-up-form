let newPassword = document.querySelector("#pass-word");
let confirmPassword = document.querySelector("#confirm-pass");
let error = document.querySelector(".error");

confirmPassword.addEventListener("input", () => {
    if (newPassword.value != confirmPassword.value) {
        newPassword.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        error.innerHTML = "*Password did not match.";
    } else {
        newPassword.style.borderColor = "";
        confirmPassword.style.borderColor = "";
        error.innerHTML = "";
    }
});
