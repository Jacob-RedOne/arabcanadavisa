document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form from actually submitting

        // Show error message
        document.getElementById("errorMessage").style.display = "block";
    });
});
