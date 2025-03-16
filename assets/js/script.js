// Wait for the document to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Show the error message
        document.getElementById("errorMessage").style.display = "block";
    });
});
