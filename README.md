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


## Reflection-Intermediate

I could create separate functions for getting the ones and tens units and then use these helper functions such as:
  const getOnes = num => (num > 0) ? `${ones[num - 1]}` : "";
  const getTens = num => (num > 0) ? `${tens[Math.floor(num / 10)]}${getOnes(num % 10)}` : "";
if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const remainder = number % 100;
    return `${ones[hundred - 1]} hundred${remainder ? ` and ${getTens(remainder)}` : ""}`;
  }
This would make the code more modular. But I chose to keep it as is because I feel that my future self can better understand the flow of the function.

## Reflection-Basic

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



## Questions?
fix spaces between numbers. put conditional for and word before last two digits. forty-three thousand and fifty-one?
why is there a weird space around these certain converted numbers?
10888
18394
19140
31131
31812
33883
34582
35284
43046
43734
44442
45155
45836
46563
47282
47945
48648
49356
50059 and 50060
50835 and 50836
51579
52312
53002
54413
55127
55807
56534
57254
58620
59328
60006
75521
74834
74181
73505
72825