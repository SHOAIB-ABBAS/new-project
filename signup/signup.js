function signUp() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Sign Up Successful!');
        window.location.href = 'signin.html';
    } else {
        alert('Please fill in all fields.');
    }
}