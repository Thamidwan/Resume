// Function to animate the welcome text
function animateWelcomeText() {
    const welcomeText = document.getElementById('welcome-text');
    let hue = 0; // Initial hue value

    // Function to update text color
    function updateColor() {
        hue = (hue + 1) % 360; // Increment hue value
        welcomeText.style.color = `hsl(${hue}, 100%, 50%)`; // Set text color using HSL format
    }

    // Update text color every 50 milliseconds
    setInterval(updateColor, 50);
}

// Call the function when the page loads
window.onload = animateWelcomeText;
