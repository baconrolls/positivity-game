// script.js

const cards = document.querySelectorAll('.card');
const resultContainer = document.querySelector('.result-container');
const selectedCard = document.getElementById('selectedCard');
const resultHeading = document.getElementById('result-heading');
const resultMessage = document.getElementById('result-text');
const indexTitle = document.getElementById('index-title');

function revealCard(cardNumber) {
  // Hide the deck and show the result container
  document.getElementById('deck').style.display = 'none';
  indexTitle.style.display = 'none';
  resultContainer.style.display = 'flex';

  // Display the selected card in the result container
  selectedCard.innerHTML = cards[cardNumber - 1].innerHTML;

  // Determine the result based on the card number
  let result;
  if (cardNumber === 1) {
    result = `
      <h1>Card 1 Result</h1>
      <p>This is the result for Card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;
  } else if (cardNumber === 2) {
    result = `
      <h1>Card 2 Result</h1>
      <p>This is the result for Card 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`;
  } else if (cardNumber === 3) {
    result = `
      <h1>Card 3 Result</h1>
      <p>This is the result for Card 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`;
  }

  // Display the result message
  resultMessage.innerHTML = result;
}

function backToMain() {
  // Hide the result container and show the deck again
  document.getElementById('deck').style.display = 'flex';
  indexTitle.style.display = 'block';
  resultContainer.style.display = 'none';
}

// Shuffle the cards when the page loads
for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = cards[i].innerHTML;
  cards[i].innerHTML = cards[j].innerHTML;
  cards[j].innerHTML = temp;
}
