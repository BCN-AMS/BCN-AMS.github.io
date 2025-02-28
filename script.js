const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const errorMessage = document.querySelector('.error-message');
const requestAccessLink = document.getElementById('requestAccessLink');

// Create an array of valid usernames and passwords
const validUsers = [
  { username: 'ABC1', password: 'Pass1' },
  { username: 'ABC2', password: 'Pass2' },
  { username: 'ATD1', password: 'Passatd1' }, // Added ATD1 user
  // Add more users as needed
];

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredUsername = loginUsername.value;
  const enteredPassword = loginPassword.value;

  let isValid = false;
  let isATD1 = false; // Flag for ATD1 user

  for (const user of validUsers) {
    if (enteredUsername === user.username && enteredPassword === user.password) {
      isValid = true;
      if (enteredUsername === 'ATD1') {
        isATD1 = true;
      }
      break;
    }
  }

  if (isValid) {
    if (isATD1) {
      // Redirect ATD1 to a different slide
      window.location.href = 'https://bainandcompany.sharepoint.com/:u:/s/AMSDataSuite/EeQhTAcQB7BNmWDR_o3UMTUBUkim-ECpijIpI-hXFo7ang?e=XdLIBS'; // Replace with your ATD1 slide URL
    } else {
      // Redirect other valid users to the default page
      window.location.href = 'https://bainandcompany.sharepoint.com/:u:/r/sites/AMSDataSuite/SitePages/Commercial-Aviation-Forecasting-Solution-(Dashboard-test).aspx?csf=1&web=1&share=EfrM4737W3pBqfkTP3kCREoBAyQ37g4SmriIqfLXlbKODA&e=mgrfH5';
    }
  } else {
    errorMessage.textContent = 'Wrong credentials entered. Try again.';
  }

  // Clear input fields after submission (optional)
  loginUsername.value = '';
  loginPassword.value = '';
});

requestAccessLink.addEventListener('click', (event) => {
  event.preventDefault();

  // Load the Microsoft Forms link in the current window (without background image)
  window.location.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=Eg4S6_Fleke-jP5PZZJnJIADfdts1qtEvHvzd3LNmzZUOTdEMzk4RFE2SUE4R0xQRDNIOUZDS0Q1Ry4u';
});
