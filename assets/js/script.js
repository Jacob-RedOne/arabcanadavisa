document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form from actually submitting

        // Show error message only after the user tries to log in
        document.getElementById("errorMessage").style.display = "block";
    });
});
