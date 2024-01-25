function changeGreeting() {
    var greeting = document.querySelector('h1');
    var currentText = greeting.textContent;

    if (currentText === 'Hello my love') {
        greeting.textContent = 'I want to tell you something';
    } else if (currentText === 'I want to tell you something') {
        greeting.textContent = 'you are the source of my light'; 
    } else if (currentText === 'you are the source of my light';
    { greeting.textContent = 'and I am grateful to have you in my life'
    }
}
