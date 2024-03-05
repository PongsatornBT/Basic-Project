// Get the password input element from the HTML with the id "password"
const passwordBox = document.getElementById("password");

// Set the desired length for the password
const length = 12;

// Define character sets for different types of characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

// Combine all character sets into one string
const allChars = upperCase + lowerCase + number + symbol;

// Function to generate a random password
function createPassword() {
    // Initialize an empty string for the password
    let password = "";

    // Add one character from each character set to the password
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the remaining length with random characters from allChars
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Set the generated password as the value of the password input element
    passwordBox.value = password;
}

// Get the copy button element from the HTML with the id "copy"
const copy = document.getElementById("copy");

// Add an event listener to the copy button
copy.addEventListener("click", () => {
    // Select the text in the password input element
    passwordBox.select();
    // Execute the copy command to copy the selected text
    document.execCommand("copy");
});
