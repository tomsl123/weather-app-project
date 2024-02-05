addEventListener("DOMContentLoaded", () => {
    updateUserData();
});

/**
 * Updates header to include username
 */
 async function updateUserData() {
    const username = window.localStorage.getItem('username')

    const response = await fetch(`/api/${username}/profile-picture-path`);
    const profilePicturePath = await response.text();

    document.getElementById('profile-picture').setAttribute('src', profilePicturePath);
    document.getElementById('dashboard-title').innerHTML = username + "'s Dashboard"
}