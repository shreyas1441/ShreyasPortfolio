/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentCard = 0;

    function highlightCard() {
        cards.forEach(card => card.classList.remove('highlighted'));
        cards[currentCard].classList.add('highlighted');
    }

    function showNextCard() {
        currentCard = (currentCard + 1) % cards.length;
        highlightCard();
    }

    function showPreviousCard() {
        currentCard = (currentCard - 1 + cards.length) % cards.length;
        highlightCard();
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            showNextCard();
        } else if (event.key === 'ArrowLeft') {
            showPreviousCard();
        }
    });

    highlightCard();
});