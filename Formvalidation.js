function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (!nameRegex.test(name)) {
      showError('name', 'Please enter a valid name');
      return false;
    } else {
      hideError('name');
    }

    if (!emailRegex.test(email)) {
      showError('email', 'Please enter a valid email address');
      return false;
    } else {
      hideError('email');
    }

    if (password.length < 6) {
      showError('password', 'Password must be at least 6 characters long');
      return false;
    } else {
      hideError('password');
    }

    if (password !== confirmPassword) {
      showError('confirmPassword', 'Passwords do not match');
      return false;
    } else {
      hideError('confirmPassword');
    }

    alert('Form submitted successfully!');
    // You can submit the form to the server here if needed
  }

  function showError(id, message) {
    var element = document.getElementById(id);
    element.classList.add('error');
    element.nextElementSibling.innerHTML = message;
  }

  function hideError(id) {
    var element = document.getElementById(id);
    element.classList.remove('error');
    element.nextElementSibling.innerHTML = '';
  }