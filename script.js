function changeGreeting() {
    var greeting = document.querySelector('h1');
    var currentText = greeting.textContent;

    if (currentText === 'Hello my love') {
        greeting.textContent = 'I want to tell you something';
    } 
}
