
// // Exercises: Level 1
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

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// // Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i < 11; i++){
//     console.log(i)
// }

// // Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i=20; i > 0; i--){
//     console.log(i);
// }
// // Iterate 0 to n using for loop
// // let n = parseInt(prompt('take a number'));
// // for (let i = 0; i < n+1; i++){
// //     console.log(i)
// // }

// // Write a loop that makes the following pattern using console.log():
// let w = 1
// while(w <= 7){
//     for (let i = 0; i < w; i++){
//         console.log('#');
//     }
//     console.log('\n')
//     w++;

// }
// //     #
// //     ##
// //     ###
// //     ####
// //     #####
// //     ######
// //     #######
// // Use loop to print the following pattern:
// for (let i = 0; i < 11; i++){
//     console.log(`${i} X ${i} = ${i}*${i}`)
// }
// // 0 x 0 = 0
// // 1 x 1 = 1
// // 2 x 2 = 4
// // 3 x 3 = 9
// // 4 x 4 = 16
// // 5 x 5 = 25
// // 6 x 6 = 36
// // 7 x 7 = 49
// // 8 x 8 = 64
// // 9 x 9 = 81
// // 10 x 10 = 100
// // Using loop print the following pattern
// console.log('i   i^2   i^3');
// for (let i = 0; i < 11; i++){
//     console.log(`${i}   ${i}*${i}   ${i}*${i}*${i}`)
// }
// //  i    i^2   i^3
// //  0    0     0
// //  1    1     1
// //  2    4     8
// //  3    9     27
// //  4    16    64
// //  5    25    125
// //  6    36    216
// //  7    49    343
// //  8    64    512
// //  9    81    729
// //  10   100   1000
// // Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i < 101 ; i++)
//     if (i%2 === 0){
//         console.log(i)
//     }
// // Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i < 101 ; i++)
//     if (i%2 !== 0){
//         console.log(i)
//     }







// Use for loop to iterate from 0 to 100 and print only prime numbers
// let diviseurCounter = 0;
// for(let valeur = 0; valeur < 11; valeur++){
//     diviseurCounter = 0;
//     for(let valeurIntermediare = 0; valeurIntermediare < valeur; valeurIntermediare++){
//         if (valeur % valeurIntermediare === 0){
//             diviseurCounter++;
//             // console.log(diviseurCounter+ '= nombre de diviseur');
//             // console.log(valeur);
//         }
//         if(diviseurCounter == 1){
//         console.log(valeur);
//         }
//     }
// }




// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let somme = 0;
for(let i = 0;i <101; i++){
    somme = somme + i;
}
console.log(somme);
somme = 0
// The sum of all numbers from 0 to 100 is 5050.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
for(let i = 0;i < 101;i++){
    if (i %2 === 0){
        console.log(i);
        somme= somme + i ;
    }
}

let sommeEven = 0
sommeEven = 0;
for(let i = 0;i < 101;i++){
    if (i %2 !== 0){
        console.log(i);
        sommeEven= sommeEven + i ;
    }
}
console.log(`la smmedes nombres pairs est ${sommeEven}`);

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let sommeOdd = 0;
for(let i = 0;i < 101;i++){
    if (i %2 === 0){
        console.log(i);
        sommeOdd= sommeOdd + i ;
    }
}
console.log(`la smmedes nombres pairs est ${sommeOdd}`);

let sommeDysplayArray =[];
sommeDysplayArray.push(sommeEven);
sommeDysplayArray.push(sommeOdd);
console.log(sommeDysplayArray.sort());

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
// Develop a small script which generate array of 5 random numbers
console.log(Math.ceil(Math.random() * 100000));
// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let arrayOfFive = Array(5);
// console.log(arrayOfFive)
// for (let i = 1; i < arrayOfFive.length; i++) {
//     if (arrayOfFive[i] !== arrayOfFive[i-1]){
//         i++
//     } else {
//         arrayOfFive[i] = Math.floor(Math.random() * 10)
//     }
// }
// console.log(arrayOfFive.sort());
// let arr = [];
// while(arr.length < 5){
//     let r = Math.floor(Math.random() * 10);
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);
// //develop a small script which generate a six characters random id:
// let array6ASCII =[];
// for (let i = 0; i < 7; i++){
//     array6ASCII.unshift(Math.ceil(32 + Math.random()*95))
// }
// let id6 ='';
// for(let i = 0; i < 7; i++){
// id6 = id6 + String.fromCharCode(array6ASCII[i])
// }

// console.log(id6);
// 5j2khz
// Exercises: Level 2
// Develop a small script which generate any number of characters random id:
// let arrayRandomASCII = [];
// for (let i = 0; i < Math.floor(50 +Math.random() * 100 ); i++){
//     arrayRandomASCII.unshift(Math.ceil(32 + Math.random()*95))
// }
// let randomId = 'l';
// for(let i = 0; i < arrayRandomASCII.length; i++){
// randomId = randomId + String.fromCharCode(arrayRandomASCII[i])
// }
// console.log(arrayRandomASCII)
// console.log(randomId);
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.
let hexadecimal = Math.floor(Math.random*100);
hexadecimal = hexadecimal.toString(16)
console.log(hexadecimal)
// '#ee33df'
// Write a script which generates a random rgb color number.

// rgb(240,180,80)
// Using the above countries array, create the following new array.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Find the longest word in the webTechs array

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// Exercises: Level 3
// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// Sort the webTechs array and mernStack array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Find the country containing the hightest number of characters in the countries array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array
// Reverse the countries array and capitalize each country and stored it as an array