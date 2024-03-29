/**
 * Authenticates login request
 * @param event
 */
async function authenticate(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {username: username, password: password};

    const response = await fetch('/api/login', {method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'}});

    if(response.status === 200) {
        const sessionToken = await response.text();
        document.cookie = 'sessionToken='+sessionToken;
        window.localStorage.setItem('username', username);

        window.location.href = '/dashboard';
    }
    else {
        document.getElementById('error-message').removeAttribute('hidden');
    }
}

/**
 * Handles user log-out
 */
function deauthenticate() {
    document.cookie = "sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.localStorage.removeItem('username');
    window.location.href = '/home';
}