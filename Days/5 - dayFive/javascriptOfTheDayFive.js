// Exercise: Level 1
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// Declare an empty array;
let emptyArray = [];
// Declare an array with more than 5 number of elements
let arrayMoreThanFive = [1,2,3,4,5,6,7];
// Find the length of your array
console.log(arrayMoreThanFive.length);
// Get the first item, the middle item and the last item of the array
console.log(arrayMoreThanFive[0]+ ' '+ arrayMoreThanFive[parseInt(arrayMoreThanFive.length/2)]+ ' ' + arrayMoreThanFive[arrayMoreThanFive.length - 1]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    'martinez',
    'loris',
    true,
    20,
    'iago',
    'elise',
    'onyx',
    78500
]

console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    'Facebook', 
    'Google',
    'Microsoft', 
    'Apple', 
    'IBM', 
    'Oracle',
    'Amazon'
    ]
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0]+' '+itCompanies[parseInt(itCompanies.length/2)]+ ' ' +itCompanies[itCompanies.length-1])
// Print out each company
let itCompaniesCounter = 0;
while (itCompaniesCounter < itCompanies.length) {
    console.log(itCompanies[itCompaniesCounter]);
    itCompaniesCounter++;
} 
// Change each company name to uppercase one by one and print them out
itCompaniesCounter = 0;
while (itCompaniesCounter < itCompanies.length) {
    console.log(itCompanies[itCompaniesCounter].toUpperCase());
    itCompaniesCounter++;
} 
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies[0]+', '+itCompanies[1]+', '+itCompanies[2]+', '+itCompanies[3]+', '+itCompanies[4]+', '+itCompanies[5]+'and '+itCompanies[6]+'are Big IT companies');
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
//let certainCompany = prompt('enter the name of the entreprise');
// if (itCompanies.includes(certainCompany) == true ) {
    //     console.log('il s\'agit d\'une grosse entreprise')
    // } else {
        //     console.log(`ce n'est pas une etreprise de la tech connue`)
        // }
        // Filter out companies which have more than one 'o' without the filter method
        itCompaniesCounter = 0;
        while (itCompaniesCounter < itCompanies.length) {
            if (itCompanies[itCompaniesCounter].lastIndexOf('o') !== itCompanies[itCompaniesCounter].indexOf('o')){
                console.log(`ne pas imprimer`+ itCompanies[itCompaniesCounter]);
            } else {console.log(itCompanies[itCompaniesCounter])}
            // console.log(itCompanies[itCompaniesCounter].toUpperCase());
            itCompaniesCounter++;
        } 
        
        
// let charcount = 0;
// let OCount
// console.log(charcount);
// function q1 () {
//     itCompaniesCounter = 0;
//     console.log('entrée dans la fonction');
//     // console.log(itCompaniesCounter)
//     // console.log('')
//     while (itCompaniesCounter < itCompanies.length){
//         console.log('entrée dans la première boucle');
//         charcount = 0;
//         console.log(charcount);
//         while (charcount < itComp0anies[itCompaniesCounter].length){

// //            console.log(itCompanies[itCompaniesCounter].charAt(charcount))
// //cela imprime dans la consle la lettre  
// if (itCompanies[itCompaniesCounter].charAt(charcount) === 'o'||'O'){
//                 OCount++


//             }
//             charcount++;
//         }
//         itCompaniesCounter++;
//     }
// }



// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));
// Slice out the last 3 companies from the array
console.log(itCompanies.reverse().slice(0,3));

// Slice out the middle IT company or companies from the array
let middle = parseInt(itCompanies.length/2);
console.log(middle);
console.log(itCompanies.slice(0,3));
// console.log(itCompanies[parseInt(itCompanies.length/2)]);

// Remove the first IT company from the array
itCompanies.shift();
// Remove the middle IT company or companies from the array
itCompanies.splice(middle, 1);
// Remove the last IT company from the array
itCompanies.pop();
// Remove all IT companies
itCompanies.splice();
// Exercise: Level 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries.sort());
console.log(webTechs.sort())
// First remove all the punctuations and change the string to array and count the number of words in the array
//continuer en mettatn la création d'un tableauafin de verifier si il s'agot bien d'une lettre et non d'un elemet de pponctuation 

let texte = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
console.log(texte.length);

let letterCounter = 0 ;
let punctuations = ['.',',']
let newTexteArray = [];
function qu2 () {    
    
    while ( letterCounter < texte.length) {
        if(punctuations.includes(texte[letterCounter]) === true){
            letterCounter++;
        } else {
            newTexteArray.push(texte[letterCounter]);
            letterCounter++;
        }
        
    }
    newTexte = newTexteArray.toString();
    console.log(newTexte);
    newTexte = newTexteArray.join('');
    console.log(typeof(newTexte));
    console.log(newTexte);
    endArray = newTexte.split(' ');
    console.log(endArray.length);

}
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart);

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let indexHoney = shoppingCart.lastIndexOf('Honey');
shoppingCart.splice(indexHoney,1)
console.log(shoppingCart);

// modify Tea to 'Green Tea'
let indexTea = shoppingCart.lastIndexOf('Tea');
shoppingCart.splice(1,1,'Green Tea')
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia') === true ) {
console.log('etipia is in the array');
} else {
console.log('ethiopia is not in the array');
}
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (countries.includes('Sass') === true ) {
    console.log('etipia is in the array');
    } else {
    webTechs.push('Sass');
    console.log(webTechs);
    }

if (countries.includes('Sass') === true ) {
    console.log('etipia is in the array');
    } else {
    webTechs.push('Sass');
    console.log(webTechs);
    }
// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// Exercise: Level 3
// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
console.log(ages.sort());
let agesArrayCount = 0;
let maxAge = ages[0], minAge = ages[0];
while (agesArrayCount < ages.length) {
    if (ages[agesArrayCount]> maxAge){
        maxAge = ages[agesArrayCount];
        agesArrayCount++;
    } else if (ages[agesArrayCount]< minAge){
        minAge = ages[agesArrayCount];
        agesArrayCount++;
    } else {
        agesArrayCount++;
    }
}

console.log(maxAge);
console.log(minAge);

// Find the median age(one middle item or two middle items divided by two)

// Find the average age(all items divided by number of items)
let averageAge = 0;
agesArrayCount = 0;
while (agesArrayCount < ages.length) {
averageAge = averageAge + ages[agesArrayCount]
agesArrayCount++;
console.log(averageAge);
}
console.log(averageAge);
averageAge = averageAge / agesArrayCount;
console.log(agesArrayCount);
console.log(averageAge);
// Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log(range);

// Compare the value of (min - average) and (max - average), use abs() method 
let minAverage = minAge - averageAge;
let maxAverage = maxAge - averageAge;

if (Math.abs(minAverage) > Math.abs(maxAverage)){
    console.log('max average est superieur a min average');
} else{
    console.log('max average est inferieur ou egal a min average');
}
//1.Slice the first ten countries from the countries array
console.log(countries)
countries.splice(10);
console.log(countries)
// Find the middle country(ies) in the countries array
console.log(countries.length/2);
console.log(countries[countries.length/2 - 1]);
console.log(countries[countries.length/2])
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let lastCount = 0;
let countries2Array = []
while (lastCount < 5){
countries2Array.push(countries[lastCount]);
countries.shift();
lastCount++;
}
console.log(countries);
console.log(countries2Array);