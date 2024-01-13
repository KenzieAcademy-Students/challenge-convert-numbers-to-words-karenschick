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
  if (number === 1000000) {
    return "one million";
  }
  if (number < 20) {
    return ones[number - 1];
  }
  if (number < 100) {
    let ten = Math.floor(number / 10);
    let tenRemainder = number % 10;
    return `${tens[ten]}${tenRemainder ? `-${ones[tenRemainder - 1]}` : ""}`;
  }
  if (number < 1000) {
    let hundred = Math.floor(number / 100);
    let hundredRemainder = number % 100;
    return `${ones[hundred - 1]} hundred${
      hundredRemainder ? ` and ${convertNumbersToWords(hundredRemainder)}` : ""
    }`;
  }
  if (number < 100000) {
    let thousand = Math.floor(number / 1000);
    let thousandRemainder = number % 1000;
    return `${convertNumbersToWords(thousand)} thousand${
      thousandRemainder ? ` ${convertNumbersToWords(thousandRemainder)}` : ""
    }`;
  }
  if (number < 1000000) {
    let hundredThousand = Math.floor(number / 1000);
    let remainder = number % 1000;

    return `${convertNumbersToWords(hundredThousand)} thousand${
      remainder ? ` ${convertNumbersToWords(remainder)}` : ""
    }`;
  }
}

const convertedWordsDiv = document.getElementById("converted-words");

const convertedWords = [];

for (let i = 1; i <= 1000000; i++) {
  convertedWords.push(convertNumbersToWords(i));
}

const convertedWithComma = convertedWords.join(", ");
const span = document.createElement("span");
span.textContent = convertedWithComma;

convertedWordsDiv.appendChild(span);

const convertWordsDiv = document.getElementById("convert-words");

const inputField = document.createElement("input");
inputField.type = "number";
inputField.id = "numberInput";
inputField.min = 1;
inputField.max = 1000000;
inputField.placeholder = "Enter a number";

const convertButton = document.createElement("button");
convertButton.textContent = "Convert";

const resultDiv = document.createElement("div");
resultDiv.id = "result";

convertWordsDiv.appendChild(inputField);
convertWordsDiv.appendChild(convertButton);
convertWordsDiv.appendChild(resultDiv);

convertButton.addEventListener("click", function () {
  const number = parseInt(document.getElementById("numberInput").value, 10);
  if (number >= 1 && number <= 1000000) {
    const words = convertNumbersToWords(number);
    resultDiv.textContent = words;
  } else {
    resultDiv.textContent = "Please enter a number between 1 and 1,000,000";
  }
});
