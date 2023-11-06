const ones = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function convertNumbersToWords(number) {
  if (number === 100) return "one hundred";
  if (number < 20) {
    return ones[number - 1];
  }
  if (number < 100) {
    let ten = Math.floor(number / 10);
    let tenRemainder = number % 10;
    return tens[ten] + (tenRemainder ? `-${ones[tenRemainder - 1]}` : "");
  }
}

const convertedWordsDiv = document.getElementById("converted-words");

const convertedWords = [];

for (let i = 1; i <= 100; i++) {
  convertedWords.push(convertNumbersToWords(i));
}

const convertedWithComma = convertedWords.join(", ");
const p = document.createElement("p");
p.textContent = convertedWithComma;
convertedWordsDiv.appendChild(p);
