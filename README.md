# Kenzie Academy Challenge: Convert Numbers to Words

## Project Plan 

1. Create arrays to store number words
 -array named ones for numbers less than 20
 -array named tens for tens units

2. Create convertNumbersToWords with parameter of number
 -if number equals 100000 
  -return `"one hundred thousand"`




 -if number is less than 20
  - return ones with index of number -1
 -if number less than 100
  -create variable called ten and assign it to method Math.Floor calling number divided by 10
  -create variable called tenRemainder and assign it to a value determined using operator with dividend as number and divisor of 10
  -return tens with index of ten `+` a conditional of `(remainder ? `-${ones[remainder - 1]}` : "")`
 -if number is less than 1000
  -create variable called hundred and assign it to method Math.Floor calling number divided by 100
  -create variable called hundredRemainder and assign it to a value determined using operator with dividend as number and divisor of 100
  -return ones with index of hundred minus one `+` string " hundred" `+`condtional for diplay of `(hundredRemainder ? ` and ${convertNumbersToWords(hundredRemainder)}` : "")`
 -if number is less than 100000
  -create variable called thousand and assign it to method Math.Floor calling number divided by 1000
  -create variable called thousandRemainder and assign it to a value determined using operator with dividend as number and divisor of 1000
  -return convertNumberToWords calling thousand `+` string " thousand" `+ `condtional for diplay of `(thousandRemainder ? ` ${convertNumbersToWords(thousandRemainder)}` : "")`

 3. Display convertedNumbers 1-100 
  -grab converted-words div using getElementbyId and assign to covertedWordsDiv variable
  -create empty array named convertedWords
  -create a for loop 
   -where variable i is initialized to 1, checks that i is less than 100, and increments by 1 after each pass through the loop.
   -push convertNumbersToWords calling i to convertedWords array
  -create variable called convertedWithComma that joins convertedWords array with a comma
  -createElement "p" and assign to variable p
  -assign convertedWithComma array to p.textContent
  -appendChild p to convertedWordsDiv


## Reflection

I tried the following approach, it did not work. I was unable to get the number ten to display properly. It could be that my conditionals for teens were incorrect.

1. create arrays of word values of number
 -underTen array for numbers less than 10 
 -teens for numbers 11-19
 -tens for tens

2. create convertNumbersToWords with parameter of number
 -if number is greater than or equal to 1 and less than or equal to 100 handle the conditionals
   -if number equals 100 return one hundred
   -if number is between or equal to 11 and 19 return teens with index of number minus 11
   -otherwise 
     -create variable called ten and assign it to method Math.Floor calling number divided by 10
     -create variable called remainder and assign it to a value determined using a oprator with dividend as number and divisor of 10
     -return tens with index of ten plus a conditional of `(remainder ? `-${underTen[remainder]}` : "")`
