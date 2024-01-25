function changeGreeting() {
    var greeting = document.querySelector('h1');
    var currentText = greeting.textContent;
console.log(currentText);
    switch (currentText) {
        case 'Hello my love':
            greeting.textContent = 'I want to tell you something';
            break;
        case 'I want to tell you something':
            greeting.textContent = 'I believe that distance is just a number, it is a bliss for us and a test to show us that every single hard situation is easier when we look at it in different point of view, and I started to believe even more that by our will to be together in life and with our deepest love, we will be the greatest support to each other even with this distance and our lives will walk in the directions of bringing us together';
            break;
        case 'I believe that distance is just a number, it is a bliss for us and a test to show us that every single hard situation is easier when we look at it in different point of view, and I started to believe even more that by our will to be together in life and with our deepest love, we will be the greatest support to each other even with this distance and our lives will walk in the directions of bringing us together':
            greeting.textContent = 'This distance relationship makes us value each other so much and makes us building a very strong trust more than we can ever imagine. Each time I walk back to my apartment after being with you, I feel like the walk is so hard like there is a power pulling me back tying my legs and my arms not allowing me to walk forward the gate, a power stronger than gravity pulling me to your direction to your arms!!';
            break;
        default:
            greeting.textContent = 'Hello my love'; // Reset to the initial greeting if none of the cases match
    }
}
