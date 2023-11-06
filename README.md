# Kenzie Academy Challenge: Convert Numbers to Words

##Questions
-how do i get rid of "-" in numbers less than 10?

## Project Plan

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

 -if number is less than one or greater than hundred return out of range message


## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

_(Put your reflection answer here.)_