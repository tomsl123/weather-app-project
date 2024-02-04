/**
 * Shows or hides the password field
 */
function togglePasswordField() {
    const button = document.getElementById('password-toggle');
    const passwordField = document.getElementById('password');

    if(passwordField.getAttribute('type') === 'password') {
        passwordField.setAttribute('type', 'text');
        button.innerHTML = 'Hide'
    }
    else {
        passwordField.setAttribute('type', 'password');
        button.innerHTML = 'Show'
    }
}