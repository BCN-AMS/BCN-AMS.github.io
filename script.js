const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const errorMessage = document.querySelector('.error-message');

// Create an array of valid usernames and passwords
const validUsers = [
  { username: 'ABC1', password: 'Pass1' },
  { username: 'ABC2', password: 'Pass2' },
  // Add more users as needed
];

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredUsername = loginUsername.value;
  const enteredPassword = loginPassword.value;

  let isValid = false;

  for (const user of validUsers) {
    if (enteredUsername === user.username && enteredPassword === user.password) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    // Redirect to the desired page
    window.location.href = 'https://tableau.bain.com/views/250106_AMSCommercialAviationTableau_Updatedhyper2/Homepage';
  } else {
    errorMessage.textContent = 'Wrong credentials entered. Try again.';
  }

  // Clear input fields after submission (optional)
  loginUsername.value = '';
  loginPassword.value = '';
});