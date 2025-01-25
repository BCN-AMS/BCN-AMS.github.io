const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const errorMessage = document.querySelector('.error-message');
const requestAccessLink = document.getElementById('requestAccessLink');
const modal = document.createElement('div');
const modalContent = document.createElement('iframe');

// Create an array of valid usernames and passwords
const validUsers = [
  { username: 'ABC1', password: 'Pass1' },
  { username: 'ABC2', password: 'Pass2' },
  // Add more users as needed
];

// Create modal styles
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.background = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent background
modal.style.width = '80%';
modal.style.height = '80%';
modal.style.display = 'none';
modal.style.zIndex = '9999';

modalContent.style.width = '100%';
modalContent.style.height = '100%';
modalContent.style.border = 'none';

// Append modal elements to the body
document.body.appendChild(modal);
modal.appendChild(modalContent);

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

requestAccessLink.addEventListener('click', (event) => {
  event.preventDefault();

  // Display the modal
  modal.style.display = 'block';

  // Load the Microsoft Forms link in the iframe
  modalContent.src = 'https://forms.office.com/Pages/ResponsePage.aspx?id=Eg4S6_Fleke-jP5PZZJnJIADfdts1qtEvHvzd3LNmzZUOTdEMzk4RFE2SUE4R0xQRDNIOUZDS0Q1Ry4u';
});

// Close the modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});