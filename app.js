document.addEventListener("DOMContentLoaded", function() {
    // Login form
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;
        if (usernameInput === "Test" && passwordInput === "12345") {
            alert("Login successful!");
            // Example: window.location.href = "next-page.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    // Parent verification form
    const parentForm = document.getElementById("parent-form");
    parentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const parentNumberInput = document.getElementById("parent-number").value;
        if (parentNumberInput === "5127401319") {
            alert("Parent verification successful!");
            // Example: window.location.href = "next-page.html";
        } else {
            alert("Invalid parent phone number. Please try again.");
        }
    });

    // Age selection form
    const ageForm = document.getElementById("age-form");
    ageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const ageGroupInput = document.getElementById("age-group").value;
        alert("Selected age group: " + ageGroupInput);
        // Example: window.location.href = "next-page.html";
    });

    // Downtime form
    const downtimeForm = document.getElementById("downtime-form");
    downtimeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const downtimeStartInput = document.getElementById("downtime-start").value;
        const downtimeEndInput = document.getElementById("downtime-end").value;
        alert("Downtime set from " + downtimeStartInput + " to " + downtimeEndInput);
        // Example: window.location.href = "next-page.html";
    });

    // Time limit form
    const timeLimitForm = document.getElementById("time-limit-form");
    timeLimitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const timeLimitInput = document.getElementById("time-limit").value;
        alert("Time limit set to " + timeLimitInput + " minutes");
        // Example: window.location.href = "next-page.html";
    });
});
