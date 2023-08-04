const plusButtons = document.getElementsByClassName('plus');
Array.from(plusButtons).forEach(plusButton => {
    plusButton.addEventListener('click', function () {
        const plusButton = this;
        const question = plusButton.parentNode;
        const answer = question.nextElementSibling;

        const isInActive = !question.classList.contains('active');

        question.style.fontSize = isInActive ? '1.1rem' : '1.5rem';
        answer.style.display = isInActive ? 'block' : 'none';
        plusButton.innerText = isInActive ? '-' : '+';

        question.classList.toggle('active');
    })
});
