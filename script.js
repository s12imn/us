function changeGreeting() {
    var greeting = document.querySelector('h1');
    var currentText = greeting.textContent;

    switch (currentText) {
        case 'Hello my love':
            greeting.textContent = 'I want to tell you something';
            break;
        case 'I want to tell you something':
            greeting.textContent = 'you are the source of my light';
            break;
        case 'you are the source of my light':
            greeting.textContent = 'and I am grateful to have you in my life';
            break;
        default:
            greeting.textContent = 'Hello my love'; // Reset to the initial greeting if none of the cases match
    }
}
