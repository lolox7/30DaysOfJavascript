// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'loris' , lastName = 'MARTINEZ' , country = 'france' , age = 20 , isMarried = false , year = 2023 ;
// function q2 () {
//     console.log (typeof(firstName));
//     console.log(typeof(lastName));
//     console.log(typeof(lastName));
//     console.log(typeof(country));
//     console.log(typeof(age));
//     console.log(typeof(isMarried));
//     console.log(typeof(year));
//     }
// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

function qu2 (){
    console.log('les declaration true');
    console.log('12'== 12);
    console.log('12' !== 12);
    console.log(50 > 5)
    console.log('les declaration fausses');
    console.log('123'=== 123);
    console.log(55 < 50);
}
    
    // Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
function q3 () {
console.log(4 > 3);
console.log (4 >= 3);
console.log (4 < 3);
console.log (4 <= 3);
console.log (4 == 4);
console.log (4 === 4);
console.log (4 != 4);
console.log (4 !== 4);
console.log (4 != '4');
console.log (4 == '4');
console.log (4 === '4');
}
// 4 > 3  t
// 4 >= 3t
// 4 < 3f
// 4 <= 3f
// 4 == 4t
// 4 === 4t
// 4 != 4f
// 4 !== 4f
// 4 != '4't
// 4 == '4't
// 4 === '4'f
// Find the length of python and jargon and make a falsy comparison statement.
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

let testvar = 0;
function q4 () {
    console.log((testvar == true) ? 'true' : 'false' )
}
// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
// Use the Date object to do the following activities

// What is the year today?

function q4 (){
    const now = new Date();
    
    console.log(now.getFullYear());
}
// What is the month today as a number?
function q5 (){
    const now = new Date();
    
    console.log(1 + now.getMonth());
}
// What is the date today?
function q6 (){
    const now = new Date();
    
    console.log(now.getDate());
}

// What is the day today as a number?
function q7 (){
    const now = new Date();
    
    console.log(now.getDay());
}
// What is the hours now?
function q8 (){
    const now = new Date();
    
    console.log(now.getHours());
}
// What is the minutes now?
function q9 (){
    const now = new Date();
    
    console.log(now.getMinutes());
}
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
function q10 (){
    const now = new Date();
    
    console.log(now.getTime());
}

// Exercises: Level 2
// Write a script that prompt0 the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
function q_1 (){
    let base = prompt('')
    let height = prompt('rentrez la hauteur de votre triangle ici')
    console.log(0.5 * base * height);
}
    // Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

function q_2 (){
    let a  = prompt('')
    let b = prompt('rentrez la hauteur de votre triangle ici')
    let c = prompt('rentrez la hauteur de votre triangle ici', 'c\'est ici que l\'on retrouve')
    console.log(parseInt(a) + parseInt(b) + parseInt(c));
}
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
function q_3 (){
    let pi = Math.PI;
    let rayon = parseInt(prompt('rentrez le rayon ici'));
    console.log( pi * rayon * rayon   );
}
// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m =  (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05