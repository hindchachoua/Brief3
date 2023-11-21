
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        event.preventDefault();
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number';
        event.preventDefault();
    } else {
        document.getElementById('passwordError').innerText = '';
    }
});
