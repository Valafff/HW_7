document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        resultDiv.innerHTML = '<p class="success">Вход выполнен успешно!</p>';
    } else {
        resultDiv.innerHTML = '<p class="error">Неверный логин или пароль.</p>';
    }
});