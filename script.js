// Get the toggle button
const modeToggleButton = document.getElementById("modeToggle");

// Add event listener to toggle night/day mode
modeToggleButton.addEventListener("click", function() {
  // Toggle the dark mode class on the body element
  document.body.classList.toggle("dark-mode");

  // Update button text based on current mode
  if (document.body.classList.contains("dark-mode")) {
    modeToggleButton.textContent = "Switch to Day Mode";
  } else {
    modeToggleButton.textContent = "Switch to Night Mode";
  }
});
