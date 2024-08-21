const guessButton = document.querySelector('.js-user-guess-button');
const selectElement = document.querySelector('.selection');
const userGuessValue = selectElement.value;
const userGuessing = document.querySelector('.js-user-guessing');
const element2 = document.querySelector('.result2');
const element1 = document.querySelector('.result1');

guessButton.addEventListener('click', () => {
  const userGuessValue = parseInt(selectElement.value, 10);

  userGuessing.classList.add('user-guessing1');

  const randomNumber = computerGuess();

  if (randomNumber === userGuessValue) {
    element2.style.display = "block";
    element1.style.display = "none";
    let resultHTML = 
  `
  <div class="guesses">
    <div class="yours2">your guess: ${userGuessValue}</div>
    <div class="computers2">computer's guess: ${randomNumber}</div>
    </div>

    <div class="no-match">
    <div class="statement2">it's a match. wanna guess again !</div>
    <button class="guess-again2 js-guess-again">guess again</button>
    </div>
  `;
  const result2 = document.querySelector('.result2');
  result2.innerHTML = resultHTML;

  } else {
    element1.style.display = "block";
    element2.style.display = "none";
    let resultHTML = 
  `
  <div class="guesses">
    <div class="yours">your guess: ${userGuessValue}</div>
    <div class="computers">computer's guess: ${randomNumber}</div>
    </div>

    <div class="no-match">
    <div class="statement">didn't match. wanna guess again !</div>
    <button class="guess-again js-guess-again">guess again</button>
    </div>
  `;
  const result1 = document.querySelector('.result1');
  result1.innerHTML = resultHTML;
  }

  guessAgain();
});

function computerGuess() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

function guessAgain() {
  const guessAgainButtons = document.querySelectorAll('.js-guess-again');
  guessAgainButtons.forEach(button => {
    button.addEventListener('click', () => {
      element1.style.display = "none";
      element2.style.display = "none";
      userGuessing.classList.remove('user-guessing1');
    });
});
}