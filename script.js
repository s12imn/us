function changeGreeting() {
    var greeting = document.querySelector('h1');
    var currentText = greeting.textContent;

    if (currentText === 'Hello my love') {
        greeting.textContent = 'I want to tell you something';
    } else {
        greeting.textContent = 'you are the source of my light';
    } else {
        greeting.textContent = 'and i am grateful to have you in my life';
    }
}
