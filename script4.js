// Get elements
const sliderHandle = document.getElementById('slider-handle');
const join = document.getElementById('join');
const create = document.getElementById('create');
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
const loginCodeInput = document.getElementById('login-code');
const loginButton = document.getElementById('login-button');
const loginError = document.getElementById('login-error');
const registrationNameInput = document.getElementById('registration-name');
const registrationButton = document.getElementById('registration-button');
const registrationError = document.getElementById('registration-error');

// Slider position variables
let sliderPosX = 0;
const sliderThreshold = 100;

// Slide to join position
join.addEventListener('click', () => {
  sliderHandle.style.transform = `translateX(0)`;
  sliderPosX = 0;
  loginForm.style.display = 'block';
  registrationForm.style.display = 'none';
});

// Slide to create position
create.addEventListener('click', () => {
  sliderHandle.style.transform = `translateX(${sliderThreshold}px)`;
  sliderPosX = sliderThreshold;
  loginForm.style.display = 'none';
  registrationForm.style.display = 'block';
});

// Slide the handle based on mouse dragging
sliderHandle.addEventListener('mousedown', startSlide);
sliderHandle.addEventListener('touchstart', startSlide);

function startSlide(e) {
  e.preventDefault();
  document.addEventListener('mousemove', slide);
  document.addEventListener('touchmove', slide);
  document.addEventListener('mouseup', endSlide);
  document.addEventListener('touchend', endSlide);
}

function slide(e) {
  e.preventDefault();
  let clientX;
  if (e.type === 'touchmove') {
    clientX = e.touches[0].clientX;
  } else {
    clientX = e.clientX;
  }
  const newPos = Math.max(0, Math.min(sliderThreshold, clientX - sliderHandle.offsetWidth / 2));
  sliderHandle.style.transform = `translateX(${newPos}px)`;
  sliderPosX = newPos;
}

function endSlide(e) {
  e.preventDefault();
  document.removeEventListener('mousemove', slide);
  document.removeEventListener('touchmove', slide);
  document.removeEventListener('mouseup', endSlide);
  document.removeEventListener('touchend', endSlide);
}

// Login button click event
loginButton.addEventListener('click', () => {
  const code = loginCodeInput.value.trim();
  if (isValidCode(code)) {
    // Perform login logic
    // ...
    // Replace the following line with your login logic
    alert('Login successful!');
    // ...
  } else {
    loginError.textContent = 'Invalid code. Please enter a valid 4-character alphanumeric code.';
  }
});

// Registration button click event
registrationButton.addEventListener('click', () => {
  const name = registrationNameInput.value.trim();
  if (name === '') {
    registrationError.textContent = 'Please enter your name.';
  } else {
    const code = generateCode();
    // Perform registration logic
    // ...
    // Replace the following line with your registration logic
    alert(`Registration successful! Your code is: ${code}`);
    // ...
  }
});

// Function to validate the login code
function isValidCode(code) {
  const pattern = /^[A-Za-z0-9]{4}$/;
  return pattern.test(code);
}

// Function to generate a 4-digit alphanumeric code
function generateCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}
``
