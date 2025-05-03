const btn = document.getElementById('animateBtn');
const select = document.getElementById('colorSelect');

// Load saved preference
window.onload = () => {
  const savedColor = localStorage.getItem('btnColor') || 'red';
  applyColor(savedColor);
  select.value = savedColor;
};

// Save preference and apply new style
select.addEventListener('change', () => {
  const color = select.value;
  localStorage.setItem('btnColor', color);
  applyColor(color);
});

// Animate on click
btn.addEventListener('click', () => {
  btn.classList.add('animate');
  setTimeout(() => btn.classList.remove('animate'), 600);
});

// Apply color to button
function applyColor(color) {
  btn.classList.remove('red', 'blue', 'green');
  btn.classList.add(color);
}
