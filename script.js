function changeGreeting() {
    console.log('Function executed');
    var greeting = document.querySelector('h1');
    var currentText = greeting.textContent;
console.log(currentText);
    switch (currentText) {
        case 'Hello my love':
            greeting.textContent = 'I want to tell you something';
            break;
        case 'I want to tell you something':
            greeting.textContent = 'I believe that distance is just a number, it is a bliss for us and a test to show us that every single hard situation is easier when we look at it in a different point of view, and our relationship makes me believe even more that by our will to be together in life and with our deepest love, we will be the greatest support to each other even with this distance and our lives will walk in the directions of bringing us together';
            break;
        case 'I believe that distance is just a number, it is a bliss for us and a test to show us that every single hard situation is easier when we look at it in a different point of view, and our relationship makes me believe even more that by our will to be together in life and with our deepest love, we will be the greatest support to each other even with this distance and our lives will walk in the directions of bringing us together':
            greeting.textContent = 'This distance relationship makes us value each other so much and makes us building a very strong trust more than we can ever imagine. Each time I leave you and i walk to the airport, I feel like the walk is so hard like there is a power pulling me back tying my legs and my arms not allowing me to walk forward the gate, a power stronger than gravity pulling me to your direction to your arms!!';
            break;
        case 'This distance relationship makes us value each other so much and makes us building a very strong trust more than we can ever imagine. Each time I leave you and i walk to the airport, I feel like the walk is so hard like there is a power pulling me back tying my legs and my arms not allowing me to walk forward the gate, a power stronger than gravity pulling me to your direction to your arms!!':
            greeting.textContent = 'I hope that with this relationship you will know how worthy you always were and are and will be, and I ant to let you know that you were never asking for too much before and I hope that this love will make up for all the times you were asked to slaughter your instincts or you tried to break yourself down just to comfort or impress someone who was not meant to you.';
            break;
        case 'I hope that with this relationship you will know how worthy you always were and are and will be, and I ant to let you know that you were never asking for too much before and I hope that this love will make up for all the times you were asked to slaughter your instincts or you tried to break yourself down just to comfort or impress someone who was not meant to you.':
            greeting.textContent = 'You are always worthy of this love and of the deepest and purest love, and you deserve to be seen, understood, and you always deserve to be held and cared for the way you held and care for evreybody, you were never too much my love you are alwyas enough';
            break;
        case 'You are always worthy of this love and of the deepest and purest love, and you deserve to be seen, understood, and you always deserve to be held and cared for the way you held and care for evreybody, you were never too much my love you are alwyas enough':
            greeting.textContent = 'AND YOU WILL ALWAYS BE ENOUGH';
            break;
        default:
            greeting.textContent = 'Hello my love'; // Reset to the initial greeting if none of the cases match
    }
}
