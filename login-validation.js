document.getElementById("login-form").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (!email.includes("@") || !email.includes(".")) {
        errorMessage.textContent = "Introduceți un email valid!";
        event.preventDefault();
    } else if (password.length < 6) {
        errorMessage.textContent = "Parola trebuie să aibă cel puțin 6 caractere!";
        event.preventDefault();
    } else {
        errorMessage.textContent = "";
    }
});