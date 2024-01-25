function changeGreeting() {
    var greeting = document.querySelector('h1');
    var currentText = greeting.textContent;

    if (currentText === 'Hello') {
        greeting.textContent = 'Hola';
    } else {
        greeting.textContent = 'Hello';
    }
}
