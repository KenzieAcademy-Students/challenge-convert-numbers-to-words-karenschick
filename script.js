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
  if (number === 100000) return "one hundred thousand";
  if (number < 20) {
    return ones[number - 1];
  }
  if (number < 100) {
    let ten = Math.floor(number / 10);
    let tenRemainder = number % 10;
    return tens[ten] + (tenRemainder ? `-${ones[tenRemainder - 1]}` : "");
  }
  if (number < 1000) {
    let hundred = Math.floor(number / 100);
    let hundredRemainder = number % 100;
    return (
      ones[hundred - 1] +
      " hundred" +
      (hundredRemainder
        ? ` and ${convertNumbersToWords(hundredRemainder)}`
        : "")
    );
  }
  if (number < 100000) {
    let thousand = Math.floor(number / 1000);
    let thousandRemainder = number % 1000;
    return (
      convertNumbersToWords(thousand) +
      " thousand" +
      (thousandRemainder ? ` ${convertNumbersToWords(thousandRemainder)}` : "")
    );
  }
}

const convertedWordsDiv = document.getElementById("converted-words");

const convertedWords = [];

for (let i = 1; i <= 100000; i++) {
  convertedWords.push(convertNumbersToWords(i));
}

const convertedWithComma = convertedWords.join(", ");
const p = document.createElement("p");
p.textContent = convertedWithComma;
convertedWordsDiv.appendChild(p);
