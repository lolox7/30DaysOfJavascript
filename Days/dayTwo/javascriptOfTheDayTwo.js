// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days Of JavaScript.';

// Print the string on the browser console using console.log()

function q2 () {
    console.log(challenge);
}
// Print the length of the string on the browser console using console.log()

function q3 () {
    console.log(challenge.length);
}

// Change all the string characters to capital letters using toUpperCase() method

function q4 () {
    console.log(challenge.toUpperCase()) ;
}

// Change all the string characters to lowercase letters using toLowerCase() method

function q5 () {
    console.log(challenge.toLowerCase()) ;
}

// Cut (slice) out the first word of the string using substr() or substring() method

function q6 () {
    console.log(challenge.substring(0,3) + challenge.substring(8)) ;
}

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

function q7 () {
    console.log(challenge.substring(2)) ;
}


// Check if the string contains a word Script using includes() method

function q8 () {
    console.log(challenge.includes("Script")) ;
}


// Split the string into an array using split() method

function q9 () {
    console.log(challenge.split()) ;
}

// Split the string 30 Days Of JavaScript at the space using split() method

function q10 () {
    console.log(challenge.split(' ')) ;
}

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let stringOfGafa = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';


function q11 () {
    console.log(stringOfGafa.split(',')) ;
}

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

function q12 () {
    console.log(challenge.replace('JavaScript','Python')) ;
}

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

function q13 () {
    console.log(challenge.charAt(15));
}

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

function q14 () {
    console.log(challenge.charCodeAt(11));
}

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

function q15 () {
    console.log(challenge.indexOf('a'));
}

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

function q16 () {
    console.log(challenge.lastIndexOf('a'));
}

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let becauseString = 'You cannot end a sentence with because because because is a conjunction' ;

function q17 () {
    console.log(becauseString.indexOf('because'));
}

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

function q18 () {
    console.log(becauseString.lastIndexOf('because'));
}

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

function q19 () {
    console.log(becauseString.search('because'));
}

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challengeSpaced = '   30 Days Of Javscript   '
function q20 () {
    console.log(challengeSpaced);
    console.log(challengeSpaced.trim());
}

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true

function q21() {
console.log(challenge.startsWith('3'))
}

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true

function q22() {
    console.log(challenge.endsWith('.'))
    }

// Use match() method to find all the a’s in 30 Days Of JavaScript

function q23() {
    console.log(challenge.matchAll('a'))
    }

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let firstHalf = '30 Days Of', secondHalf = 'Javascript';
let temporary

function q24 () {
    console.log(firstHalf.concat(secondHalf));
}

// Use repeat() method to print 30 Days Of JavaScript 2 times

function q25() {
    console.log(challenge.repeat(2));
    }

// level 2

// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let sentence1 = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';

function q_1(){
    console.log(sentence1);
}

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let teresaSentence = ' \"Love is not patronizing and charity isn \'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."';

function q_2(){
    console.log(teresaSentence);
}

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let numberTen = 10 , stringTen = '10', stringToNumber;

function q_3 (){
    console.log(parseInt(stringTen));
    stringToNumber = parseInt(stringTen) ;
}

function q_3_5 () {
    console.log(numberTen === stringToNumber);
}


// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num98 = parseFloat('9.8');
function q_4 (){
console.log(num98);
num98 = Math.ceil(num98);
console.log(num98 === 10);
num98 = parseFloat('9.8');
}


// Check if 'on' is found in both python and jargon
let pythonString = 'Pyt', jargonString ='jargon';

function q_5 (){
    if ( (pythonString.matchAll('on') != null) && (jargonString.matchAll('on') != null) ) {
        console.log('on retrouve\'on \' dans jargon et python');
    }
    else {
        console.log('on ne retrouve pas \'on\' dans python et jargon');
    }
}

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentenceJargon = 'I hope this course is not full of jargon';

function q_6 (){
    if (sentenceJargon.matchAll('on') != null ){
        console.log('jargon is in the sentence');

    }
    else {
        console.log('jargon is not in the sentence');
    }
}

// Generate a random number between 0 and 100 inclusively.
function q_7 (){
    let randomnumber = Math.floor(Math.random()*101);
console.log(randomnumber)
}

// Generate a random number between 50 and 100 inclusively.
function q_8 (){
 console.log(50 + Math.floor(Math.random()*51));
}
// Generate a random number between 0 and 255 inclusively.
function q_9 (){
    console.log(Math.floor(Math.random()*256));
   }
// Access the 'JavaScript' string characters using a random number.

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

function q_9 (){
    console.log ('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
   }

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
function q_10 (){
    console.log(becauseString.substr(31,23))
}
// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still 
//  looking for their love.' Count the number of word love in this sentence.

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'