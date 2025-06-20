// JavaScript for button interaction
const button = document.getElementById('clickMeBtn');
const messageDiv = document.getElementById('message');

button.addEventListener('click', () => {
  messageDiv.textContent = 'Thanks for clicking the button!';
});
