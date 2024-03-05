// Get references to HTML elements for input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        // Show an alert if the input is empty
        alert("You write something!");
    } else {
        // Create a new list item element
        let li = document.createElement("li");

        // Set the content of the list item to the input value
        li.innerHTML = inputBox.value;

        // Append the list item to the list container
        listContainer.appendChild(li);

        // Create a close (delete) button for the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        // Append the close button to the list item
        li.appendChild(span);
    }

    // Clear the input box after adding a task
    inputBox.value = "";

    // Save the updated data to local storage
    saveData();
}

// Event listener for the list container to handle task completion and deletion
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class for the clicked list item
        e.target.classList.toggle("checked");

        // Save the updated data to local storage
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the parent list item when the close button is clicked
        e.target.parentElement.remove();

        // Save the updated data to local storage
        saveData();
    }
}, false);

// Function to save the current state of the task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function to display tasks on page load
showTask();
