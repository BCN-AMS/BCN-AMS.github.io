const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const errorMessage = document.querySelector('.error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredEmail = loginEmail.value;
  const enteredPassword = loginPassword.value;

  if (enteredEmail === 'durgesh.singh@bain.com' && enteredPassword === 'Password@123') {
    window.location.href = 'https://tableau.bain.com/views/250106_AMSCommercialAviationTableau_Updatedhyper2/Homepage';
  } else {
    errorMessage.textContent = 'Wrong credentials entered. Try again. If access not requested already, kindly reach out to us using access request form.';
  }

  // Clear input fields after submission (optional)
  loginEmail.value = '';
  loginPassword.value = '';
});