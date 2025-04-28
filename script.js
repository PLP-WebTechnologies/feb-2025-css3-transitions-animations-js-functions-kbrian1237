// Function to store user preference
function saveUserPreference() {
  const color = document.getElementById('colorPreference').value;
  localStorage.setItem('backgroundColor', color);
  applyUserPreference();
}

// Function to apply stored preference
function applyUserPreference() {
  const savedColor = localStorage.getItem('backgroundColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}

// Function to trigger animation
function triggerAnimation() {
  const button = document.getElementById('animateButton');
  button.classList.add('bounce');

  // Remove animation class after animation ends to allow re-triggering
  setTimeout(() => {
    button.classList.remove('bounce');
  }, 600);
}

// Event listeners
document.getElementById('savePreference').addEventListener('click', saveUserPreference);
document.getElementById('animateButton').addEventListener('click', triggerAnimation);

// Apply user preference on page load
window.onload = applyUserPreference;
