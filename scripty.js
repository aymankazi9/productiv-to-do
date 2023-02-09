// Get references to the form and list elements
const form = document.querySelector("form");
const list = document.querySelector("ul");

// Handle the submit event on the form
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the value of the input field
    const item = form.elements.item.value;

    // Add the new item to the list
    const listItem = document.createElement("li");
    listItem.innerHTML = item;
    list.appendChild(listItem);

    // Clear the input field
    form.elements.item.value = "";
});

// Handle the click event on each list item
list.addEventListener("click", (event) => {
    // Check if the target is a list item
    if (event.target.tagName === "LI") {
        // Toggle the "completed" class on the list item
        event.target.classList.toggle("completed");
    }
});

// Handle the delete button
list.addEventListener("click", (event) => {
    // Check if the target is the delete button
    if (event.target.className === "delete") {
        // Remove the list item from the list
        event.target.parentElement.remove();
    }
});
