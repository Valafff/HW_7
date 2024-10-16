document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = [];

    // Проверка обязательных полей
    if (!document.getElementById('firstName').value) {
        errors.push('Имя обязательно для заполнения.');
    }
    if (!document.getElementById('lastName').value) {
        errors.push('Фамилия обязательна для заполнения.');
    }
    if (!document.getElementById('email').value) {
        errors.push('Email обязателен для заполнения.');
    }

    // Проверка возраста
    let dob = new Date(document.getElementById('dob').value);
    let age = new Date().getFullYear() - dob.getFullYear();
    if (age < 18) {
        errors.push('Возраст должен быть больше 18 лет.');
    }

    // Проверка выбора пола
    if (!document.getElementById('gender').value) {
        errors.push('Пол обязателен для выбора.');
    }

    // Проверка выбора технологий
    let techs = document.querySelectorAll('input[name="tech"]:checked');
    if (techs.length < 3) {
        errors.push('Необходимо выбрать минимум 3 технологии.');
    }

    // Вывод ошибок
    let errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';
    if (errors.length > 0) {
        errors.forEach(function(error) {
            let errorMessage = document.createElement('p');
            errorMessage.textContent = error;
            errorMessages.appendChild(errorMessage);
        });
    } else {
        alert('Форма успешно отправлена!');
    }
});

// Обработчики событий
document.getElementById('gender').addEventListener('change', function() {
    let gender = this.value;
    if (gender) {
        alert('Показать вакансии для ' + (gender === 'male' ? 'мужчин \n BackEnd Developer \n Системный администратор' : 'женщин \n FrontEndDeveloper \n Тестировщик'));
    }
});

document.querySelectorAll('input[name="tech"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        let selectedTechs = document.querySelectorAll('input[name="tech"]:checked');
        let salary = 0;
        selectedTechs.forEach(function(tech) {
            switch (tech.value) {
                case 'HTML':
                case 'CSS':
                    salary += 500;
                    break;
                case 'JavaScript':
                case 'Python':
                    salary += 1000;
                    break;
                case 'Java':
                    salary += 1500;
                    break;
            }
        });
        alert('Минимальный оклад: ' + salary + ' USD');
    });
});

document.getElementById('dob').addEventListener('change', function() {
    let dob = new Date(this.value);
    let today = new Date();
    let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    let daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    alert('До вашего дня рождения осталось ' + daysUntilBirthday + ' дней.');
});