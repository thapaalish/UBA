function validateEmailInput() {
  const email = document.getElementById("email").value;
  const feedbackElement = document.getElementById("emailFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    feedbackElement.textContent = ""; // Email is valid
  } else {
    feedbackElement.textContent = "Please enter a valid email address.";
  }
}
function validatepasswordInput() {
  const password = document.getElementById("password").value;
  const feedbackElement = document.getElementById("passwordFeedback");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (passwordRegex.test(password)) {
    feedbackElement.textContent = ""; // password is valid
  } else {
    feedbackElement.textContent = "Please enter a valid password address.";
  }
}

function validateRepassword() {
  const password = document.getElementById("password").value;
  const rePassword = document.getElementById("repassword").value;
  const feedbackElement = document.getElementById("repasswordFeedback");

  if (password !== rePassword) {
    feedbackElement.textContent = "Please enter a valid matching password.";
  } else {
    feedbackElement.textContent = "";
  }
}
