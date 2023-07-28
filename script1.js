const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const loginCodeInput = document.getElementById('login-code');
const loginButtonModal = document.getElementById('login-button-modal');
const loginError = document.getElementById('login-error');
const closeBtn = document.getElementsByClassName('close')[0];

// Open login modal
loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Close login modal
closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Login button click event in the modal
loginButtonModal.addEventListener('click', () => {
  const code = loginCodeInput.value.trim();
  if (isValidCode(code)) {
    // Perform
