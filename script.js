// Your code here
let inputNumber = document.getElementById("inputNumber");
let convertButton = document.getElementById("convertButton");
let conversionResultsDiv = document.getElementById("conversionResults");

convertButton.addEventListener("click", inputNumberEvent);

const underTen = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const teens = [
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
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

let inputedNumber = ""

function inputNumberEvent(){
 conversionResultsDiv.textContent = ""
 inputedNumber = inputNumber.value
 renderConvertsionResults()
 inputNumber.value = ""
}

function convertNumbersToWords(number) {
  if (number >= 1 && number <= 100) {
    if (number === 100) {
      return "one hundred";
    } else if (number >= 11 && number <= 19) {
      return teens[number - 11];
    } else {
      let ten = Math.floor(number / 10);
      let remainder = number % 10;
      return tens[ten] + (remainder ? ` ${underTen[remainder]}` : "");
    }
  }
  return "out of range";
}

let renderConvertsionResults = function(){
conversionResultsDiv.textContent = `${(convertNumbersToWords(inputedNumber))}`;
}