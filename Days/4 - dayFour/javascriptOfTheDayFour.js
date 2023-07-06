// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
function q1 () {
    let age = prompt('rentrez votre age');
    if (age >= 18) {
        console.log('Vous etes assez agé pour conduire en france ');
    } else {
        console.log('vous n\'etes pas assez agé pour conduire pour le moment. Attendez encore ' + (18 - age) + ' ans pour conduire');
    }
}
// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways


function qu2 () {
    let a = prompt('rentrez le nombre a');
    let b = prompt('rentrez le nombre b');
    a==b ?console.log(`${a} et ${b} sont egaux`): a > b ? console.log(a + ' est plus grand que ' + b): console.log(b +' est plus grand que '+ a);


}

// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
function q3 () {
    let yourNumber = prompt('rentrez le nombre a verifier');

    if (yourNumber%2 == 0){
        console.log(`c'est un nombre pair `);
    } else {
        console.log(`c'est un nombre impair `);
    }

}
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
function q4 (){
    let grade = parseInt(prompt(`enter your score to  get your grade`));
    console.log(typeof(grade));
 if (grade < 50){
        console.log('your grade is F ');
    } else if ((grade >= 50) && (grade < 60) ){
        console.log('your grade is E');
    } else if ((grade >= 60) && (grade < 70) ){
        console.log('your grade is D');
    } else if ((grade >= 70) && (grade < 80) ){
        console.log('your grade is C');
    } else if ((grade >= 80) && (grade < 90) ){
        console.log('your grade is B');
    } else if ((grade >= 90) && (grade < 101) ){
        console.log('your grade is A');
    }
}
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

function q_1 (){
    let month = prompt('which month is it ?');
    month = month.toLowerCase();
    
    switch (month) {
        case 'january':
            console.log('the season is winter');
            break
        case 'february':
            console.log('the season is winter');
            break
        case 'march':
            console.log('the season is spring');
            break
        case 'april':
            console.log('the season is spring');
            break
        case 'may':
            console.log('the season is spring');
            break
        case 'june':
            console.log('the season is summer');
            break
        case 'july':
            console.log('the season is summer');
            break
        case 'august':
            console.log('the season is summer');
            break
        case 'september':
            console.log('the season is autumn');
            break
        case 'october':
            console.log('the season is autumn');
            break
        case 'november':
            console.log('the season is autumn');
            break
        case 'december':
            console.log('the season is winter');
            break
        

    }
}
// Check if a day is weekend day or a working day. Your script will take day as an input.
function q_2 () {
    let workDays = ['monday','tuesday','wednesday','tuesday','friday'];
    let weekEnd = ['saturday','sunday']
    let day = prompt('entrer the day you want').toLowerCase();
    // console.log(workDays.includes(day));
    if (workDays.includes(day)) {
        console.log('day of work');

    }else if (weekEnd.includes(day)) {
        console.log('day of week end');

    } else {
        console.log('its not a day of the week')
    }
    // switch (day){
    //     case workDays.indexOf(day) !== true :
    //         console.log('terrible day of work');
    //         break;
    //     case weekEnd.includes(day) == true :
    //         console.log('a week end day');
    //         break;
        // default:
        //     console.log('you didn\' enter a day of the week');    
        //     break;
        // }

    }
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.
function q_3 () {
    let Days31Month = ['janvier', 'mars','mai','juillet','aout','octobre','decembre'];
    let Days30Month = ['avril','juin','septembre','novembre'];
    let day = prompt('entrer the month where you want to know the numeber of days').toLowerCase();

    if (Days31Month.includes(day)) {
        console.log('il y a 31 jours dans ce mois');

    }else if (Days30Month.includes(day)) {
        console.log('il y a 30 jours dans ce mois');

    } else if (day == 'fevrier') {
        console.log('28 DAYS FOR fevrier')
    } else {
        console.log('erreur')
    }
    
    }