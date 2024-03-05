// Get references to HTML elements for notes container and create button
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Get existing notes from local storage and display them on page load
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Function to update notes in local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for the create button to add a new note
createBtn.addEventListener("click", () => {
    // Create a new paragraph element for the note
    let inputBox = document.createElement("p");

    // Create an image element for the delete button
    let img = document.createElement("img");

    // Set class and attributes for styling
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    // Append the new note and delete button to the notes container
    notesContainer.appendChild(inputBox).appendChild(img);
});

// Event listener for the notes container to handle note deletion and content updates
notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        // Remove the parent note when the delete button is clicked
        e.target.parentElement.remove();
        // Update local storage to reflect the change
        updateStorage();
    } else if (e.target.tagName === "P") {
        // Update notes when the content of a note is changed
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
});

// Event listener for the Enter key to insert a line break in a note
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
