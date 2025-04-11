document.getElementById("signup-form").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Parolele nu coincid!";
        event.preventDefault(); // Oprește trimiterea formularului
    } else {
        errorMessage.textContent = "";
    }
});