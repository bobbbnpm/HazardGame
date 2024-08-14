document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('main .content');

  // Funkce zobrazí specifickou sekci a ostatní schová
  function showSection(targetId) {
      sections.forEach(section => {
          section.style.display = (section.id === targetId) ? 'block' : 'none';
      });
  }

  // SET UP -  Klikání v navigaci
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('data-target');
          showSection(targetId);
      });
  });

  // VISIBLE HOME SEKCE 
  showSection('home');
});

// Funkce pro získání náhodných čísel
function getRandomElements(arr, count) {
    let _arr = [...arr];
    let result = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * _arr.length);
      result.push(_arr.splice(randomIndex, 1)[0]);
    }
    return result;
  }
  
  //Náhodná čísla sportky 1-55 (6)
  function Sportka() {
    var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"];
  
    var RandomNumber = getRandomElements(Numbers, 6);
  
    var RandomNumberElement = document.getElementById("sportkaNumbers");
  
    RandomNumberElement.textContent = "Náhodná čísla (6): " + RandomNumber.join(", ");
  }
  
  //Odstraní čísla
  function deleteSportka() {
    document.getElementById("sportkaNumbers").innerText = "";
  }
  
  //Náhodná čísla Eurojackpotu 1-50 (5)
  function Eurojackpot() {
    var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"];
  
    var RandomNumber = getRandomElements(Numbers, 5);
  
    var RandomNumberElement = document.getElementById("EuroNumbers");
  
    RandomNumberElement.textContent = "Náhodná čísla (5): " + RandomNumber.join(", ");
  }
  
  //Odstraní čísla Eurojackpotu
  function deleteEuroNumbers() {
    document.getElementById("EuroNumbers").innerText = "";
    document.getElementById("EurojackpotBonus").innerText = "";
  }
  
  //Další dvě čísla Eurojackpotu 1-12 (2)
  function EurojackpotBonus() {
    var Numberss = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var RandomNumberss = getRandomElements(Numberss, 2);
    var RandomNumberssElement = document.getElementById("EurojackpotBonus");
    RandomNumberssElement.textContent = "Náhodná čísla (2): " + RandomNumberss.join(", ");
  }

  // Blackjack Logika
document.getElementById('evaluateBtn').addEventListener('click', function() {
  const playerCard1 = document.getElementById('playerCard1').value.toUpperCase();
  const playerCard2 = document.getElementById('playerCard2').value.toUpperCase();
  const dealerCard = document.getElementById('dealerCard').value.toUpperCase();

  const playerCards = [playerCard1, playerCard2];
  const playerTotal = calculatePlayerTotal(playerCards);

  const action = getAction(dealerCard, playerTotal, playerCards);
  document.getElementById('result').textContent = action;
});

function calculatePlayerTotal(playerCards) {
  let total = 0;
  let hasAce = false;

  playerCards.forEach(card => {
      if (card === 'A') {
          hasAce = true;
          total += 11; // Eso bude za 11, pokud se to hodí
      } else {
          total += parseInt(card) || 10; // Karty 10, J, Q, K jsou všechny 10
      }
  });

  // Oprava, pokud total překročí 21 a obsahuje eso
  if (total > 21 && hasAce) {
      total -= 10;
  }

  return total;
}

function getAction(dealerCard, playerTotal, playerCards) {
  dealerCard = parseInt(dealerCard) || (dealerCard === 'A' ? 11 : 10);
  if (playerCards.length === 2 && playerCards[0] === playerCards[1]) {
      return getPairAction(dealerCard, playerCards);
  } else if (playerCards.includes('A') && playerTotal <= 21) {
      return getSoftTotalAction(dealerCard, playerCards);
  } else {
      return getHardTotalAction(dealerCard, playerTotal);
  }
}

function getHardTotalAction(dealerCard, total) {
  if (dealerCard === 2) {
      if (total >= 17) return 'STAND';
      if (total >= 13 && total <= 16) return 'STAND';
      if (total === 12) return 'HIT';
      if (total === 11 || total === 10) return 'DOUBLE';
      if (total === 9) return 'HIT';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 3) {
      if (total >= 17) return 'STAND';
      if (total >= 13 && total <= 16) return 'STAND';
      if (total === 12) return 'HIT';
      if (total === 11 || total === 10) return 'DOUBLE';
      if (total === 9) return 'DOUBLE';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 4) {
      if (total >= 17) return 'STAND';
      if (total >= 13 && total <= 16) return 'STAND';
      if (total === 12) return 'STAND';
      if (total === 11 || total === 10) return 'DOUBLE';
      if (total === 9) return 'DOUBLE';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 5) {
      if (total >= 17) return 'STAND';
      if (total >= 13 && total <= 16) return 'STAND';
      if (total === 12) return 'STAND';
      if (total === 11 || total === 10) return 'DOUBLE';
      if (total === 9) return 'DOUBLE';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 6) {
      if (total >= 17) return 'STAND';
      if (total >= 13 && total <= 16) return 'STAND';
      if (total === 12) return 'STAND';
      if (total === 11 || total === 10) return 'DOUBLE';
      if (total === 9) return 'DOUBLE';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 7) {
      if (total >= 17) return 'STAND';
      if (total >= 13 && total <= 16) return 'HIT';
      if (total === 12) return 'HIT';
      if (total === 11 || total === 10) return 'DOUBLE';
      if (total === 9) return 'HIT';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 8) {
      if (total >= 17) return 'STAND';
      if (total >= 13 && total <= 16) return 'HIT';
      if (total === 12) return 'HIT';
      if (total === 11 || total === 10) return 'DOUBLE';
      if (total === 9) return 'HIT';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 9) {
      if (total >= 17) return 'STAND';
      if (total === 16) return 'SURRENDER';
      if (total >= 13 && total <= 15) return 'HIT';
      if (total === 12) return 'HIT';
      if (total === 11 || total === 10) return 'DOUBLE';
      if (total === 9) return 'HIT';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 10) {
      if (total >= 17) return 'STAND';
      if (total === 16 || total === 15) return 'SURRENDER';
      if (total >= 13 && total <= 14) return 'HIT';
      if (total === 12) return 'HIT';
      if (total === 11) return 'DOUBLE';
      if (total === 10 || total === 9) return 'HIT';
      if (total >= 5 && total <= 8) return 'HIT';
  } else if (dealerCard === 11) { // Eso
      if (total >= 17) return 'STAND';
      if (total === 16) return 'SURRENDER';
      if (total >= 13 && total <= 15) return 'HIT';
      if (total === 12) return 'HIT';
      if (total === 11) return 'HIT';
      if (total === 10 || total === 9) return 'HIT';
      if (total >= 5 && total <= 8) return 'HIT';
  }
}

function getSoftTotalAction(dealerCard, playerCards) {
  let otherCard = playerCards.find(card => card !== 'A');
  let total = otherCard === 'A' ? 2 : parseInt(otherCard) || 10;

  if (dealerCard >= 2 && dealerCard <= 6) {
      if (total >= 9) return 'STAND';
      if (total === 8) return 'DOUBLE';
      if (total === 7) return 'DOUBLE';
      if (total === 6) return 'DOUBLE';
      if (total === 5) return 'DOUBLE';
      if (total === 4) return 'DOUBLE';
      if (total <= 3) return 'HIT';
  } else {
      if (total >= 9) return 'STAND';
      if (total === 8) return 'HIT';
      if (total === 7) return 'HIT';
      if (total === 6) return 'HIT';
      if (total === 5) return 'HIT';
      if (total === 4) return 'HIT';
      if (total <= 3) return 'HIT';
  }
}

function getPairAction(dealerCard, playerCards) {
  const cardValue = parseInt(playerCards[0]) || (playerCards[0] === 'A' ? 11 : 10);
  if (cardValue === 11) { // Pár es
      return 'SPLIT';
  } else if (cardValue === 10) {
      return 'STAND';
  } else if (cardValue === 9) {
      if (dealerCard === 7 || dealerCard >= 10) return 'STAND';
      return 'SPLIT';
  } else if (cardValue === 8) {
      return 'SPLIT';
  } else if (cardValue === 7) {
      if (dealerCard >= 8) return 'HIT';
      return 'SPLIT';
  } else if (cardValue === 6) {
      if (dealerCard >= 7) return 'HIT';
      return 'SPLIT';
  } else if (cardValue === 5) {
      return 'DOUBLE';
  } else if (cardValue === 4) {
      if (dealerCard === 5 || dealerCard === 6) return 'SPLIT';
      return 'HIT';
  } else if (cardValue === 3) {
      if (dealerCard >= 8) return 'HIT';
      return 'SPLIT';
  } else if (cardValue === 2) {
      if (dealerCard >= 8) return 'HIT';
      return 'SPLIT';
  }
}

// Funkce na výpočet a zobrazení akce
document.getElementById('evaluateBtn').addEventListener('click', function() {
  const playerCard1 = document.getElementById('playerCard1').value.toUpperCase();
  const playerCard2 = document.getElementById('playerCard2').value.toUpperCase();
  const dealerCard = document.getElementById('dealerCard').value.toUpperCase();

  const playerCards = [playerCard1, playerCard2];
  const playerTotal = calculatePlayerTotal(playerCards);

  const action = getAction(dealerCard, playerTotal, playerCards);
  document.getElementById('result').textContent = action;
});


//BLACKJACK SMAZAT CISLA A VYSLEDEK
document.getElementById('clearBtn').addEventListener('click', function() {
  document.getElementById('playerCard1').value = '';
  document.getElementById('playerCard2').value = '';
  document.getElementById('dealerCard').value = '';
  document.getElementById('result').textContent = '';
});
