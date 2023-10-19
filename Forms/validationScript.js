// JavaScript code for form validation
// Prevent form from submitting
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the input field element using JavaScript.
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");
  const errorContainer = document.createElement("div");
  errorContainer.className = "error";
  inputField.parentElement.appendChild(errorContainer);

  // Regular expression pattern for alphanumeric input
  const alphanumericPattern = /^[a-zA-Z0-9]+$/;

  // Add an event listener to the form submit event.
  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting by default.
    event.preventDefault();

    // Retrieve the input field value
    const inputValue = inputField.value;

    // Check if the input value matches the pattern
    if (alphanumericPattern.test(inputValue)) {
      // Valid input: display confirmation and submit the form
      errorContainer.style.display = "none";
      alert("Form submitted successfully!"); // You can replace this with your desired action.

      // For the purpose of this assignment, we'll just show an alert.
    } else {
      // Invalid input: display error message
      errorContainer.style.display = "block";
      errorContainer.innerText = "Input must be alphanumeric.";
    }
  });
});