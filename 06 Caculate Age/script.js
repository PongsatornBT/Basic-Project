// Get the user input element for the date
let userInput = document.getElementById("date");

// Set the maximum date for the input to the current date
userInput.max = new Date().toISOString().split("T")[0];

// Get the result element where the age calculation result will be displayed
let result = document.getElementById("result");

// Function to calculate age based on the entered birthdate
function calculateAge() {
    // Get the birthdate from the user input
    let birthDate = new Date(userInput.value);

    // Extract day, month, and year components of the birthdate
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // Months are zero-indexed
    let y1 = birthDate.getFullYear();

    // Get the current date
    let today = new Date();

    // Extract day, month, and year components of the current date
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // Variables to store the age components
    let d3, m3, y3;

    // Calculate the age components
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // Adjust the months if negative
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the age result in the result element
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`;
}

// Function to get the number of days in a month for a given year and month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
