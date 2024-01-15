// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in all fields');
        event.preventDefault();
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!newUsername || !newPassword || !confirmPassword) {
        alert('Please fill in all fields');
        event.preventDefault();
    } else if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        event.preventDefault();
    }
});
