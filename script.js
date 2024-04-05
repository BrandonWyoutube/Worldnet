const signUpBtn = document.getElementById('signUpBtn');
const loginBtn = document.getElementById('loginBtn');
const background = document.getElementById('background');

signUpBtn.addEventListener('click', () => {
    // Logic for sign up process
    let parentVerification = prompt("Please pass the phone to a parent for verification. Enter 'I'm the parent' to proceed.");

    if (parentVerification.toLowerCase() === "i'm the parent") {
        let ageGroup = prompt("Select your child's age group: below 13, 13-17, 18-24, 24-39, 40+");
        let screenTimeLimit = prompt("How long can your child spend on the app?");
        let downtime = prompt("Choose a downtime for your child.");
        let username = "Test";
        let password = "12345";
        let screenTimePassword = "123";
        alert("Registration complete!");
    } else {
        alert("Parent verification failed. Please try again.");
    }
});

loginBtn.addEventListener('click', () => {
    // Logic for login process
    let usernameInput = prompt("Enter your username:");
    let passwordInput = prompt("Enter your password:");

    if (usernameInput === "Test" && passwordInput === "12345") {
        alert("Login successful!");
    } else {
        alert("Incorrect username or password. Please try again.");
    }
});
