// Funkce pro získání náhodných čísel
function Eurojackpot() {
  var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
  "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"]

var RandomNumber = getRandomElements(Numbers, 5);

var RandomNumberElement = document.getElementById("EuroNumbers");

RandomNumberElement.textContent = "Náhodná čísla (5): " + RandomNumber.join(", ");
}

// Funkce pro mazání textu s čísly
function deleteEuroNumbers() {
  document.getElementById("EuroNumbers").innerText = "";
  document.getElementById("Eurojackpot2").innerText = "";
} 

// Funkce pro bonus
function Eurojackpot2() {
  var Numberss = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

  var RandomNumberss = getRandomElements(Numberss, 2);

  var RandomNumberssElement = document.getElementById("Eurojackpot2");

  RandomNumberssElement.textContent = "Náhodná čísla (2): " + RandomNumberss.join(", ");
}