// script.js
const cards = document.querySelectorAll('.card');
const resultContainer = document.querySelector('.result-container');
const selectedCard = document.getElementById('selectedCard');
const resultMessage = document.getElementById('result-text');
const resultHeading = document.getElementById('result-heading');
const indexTitle = document.getElementById('index-title');

function shuffleCards() {
  // Shuffle the cards array using the Fisher-Yates algorithm
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i].innerHTML;
    cards[i].innerHTML = cards[j].innerHTML;
    cards[j].innerHTML = temp;
  }
}

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
    resultHeading.textContent = "Card 1";
    result = "This is the result for Card 1.";
  } else if (cardNumber === 2) {
    resultHeading.textContent = "Card 2";
    result = "This is the result for Card 2.";
  } else if (cardNumber === 3) {
    resultHeading.textContent = "Card 3";
    result = "This is the result for Card 3.";
  }

  // Display the result message
  resultMessage.textContent = result;
}

// Shuffle the cards when the page loads
shuffleCards();

// Event listener for the card click event
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Show the result and hide the index title, and pass the selected card to the revealCard function
    revealCard(index + 1);
  });
});

function backToMain() {
  // Hide the result container and show the deck again
  document.getElementById('deck').style.display = 'flex';
  indexTitle.style.display = 'block';
  resultContainer.style.display = 'none';
}
