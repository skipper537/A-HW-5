"use strict"
let testArray = [1, 9, 32, 17, 48, 46, 14, 5, 8, 1, 68, 3, 3, 32];
let RandomArray = []
//console.log('test array: ', testArray)
//Function 1
function getRandomArray(length, min, max) {
   for (let i = 0; i < length; i++) {
      RandomArray.push(Math.round(Math.random() * (max - min) + min));
   }
   return RandomArray;
}
console.log("Рандомний масив:  ", getRandomArray(15, -10, 50))
//Function 2
function getModa(arr) {
   const frequencyTable = {};
   arr.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);
   let modes = [];
   let max = 0;
   for (const key in frequencyTable) {
      if (frequencyTable[key] > max) {
         modes = [Number(key)];
         max = frequencyTable[key];
      }
      else if (frequencyTable[key] === max) {
         modes.push(Number(key));
      }
   }
   return modes;
}
console.log("Мода:  ", getModa(RandomArray))
//console.log("Moda:  ", getModa(testArray))
//Function 3
function getAverage(arr) {
   sortArr(arr);
   let sum = arr.reduce((sum, current, i) => {
      return sum + current;
   })
   return +(sum / (arr.length)).toFixed(3);
}
console.log("Середнє арефметичне:  ", getAverage(RandomArray))
//Function 4
function sortArr(arr) {
   let sort = arr.sort((a, b) => {
      return a - b;
   }).filter((int) => {
      return int % 1 === 0;
   })
   return sort;
}
console.log("Відсортований масив: ", sortArr(RandomArray))
function getMedian(arr) {
   sortArr(arr);

   let num = 0;
   let numTwo = 0;
   if (arr.length % 2 == 0) {
      num = Math.floor(arr.length / 2) - 1;
      numTwo = Math.ceil(arr.length / 2);
      if (numTwo === num) {
         return arr[num];
      } else {
         return (arr[numTwo] + arr[num]) / 2
      }
   } else {
      num = Math.floor(arr.length / 2)
      return arr[num]
   }
}
console.log("Медіана:  ", getMedian(RandomArray))

//Function 5
function filterEvenNumbers(arr) {
   return arr.filter((even) => {
      return (even % 2) !== 0;
   })

}
console.log("Без парних: ", filterEvenNumbers(RandomArray))
//Function 6
function countPositiveNumbers(arr) {

   return arr.filter((item) => {
      return item > 0;
   }).length
}
console.log("Кількість чисел більших 0: ", countPositiveNumbers(RandomArray));
//Function 7
function getDividedByFive(arr) {
   return arr.filter((even) => {
      return (even % 5) == 0;
   })
}
console.log('Ділиться на ціло на 5:  ', getDividedByFive(RandomArray));
//Function 8
function replaceBadWords(str) {
   let badWords = /fuck|shit/gi;
   return str.replace(badWords, "****");
}
console.log(replaceBadWords("Are you fucking kidding?"))
//Function 9

const divideByThree = (word) => word.toLowerCase().match(/.{1,3}/g)
console.log(divideByThree("ConQUistAdOr"));
//Function 10

function generateCombinations(word) {
   if (!word || typeof word !== "string") {
      return "Please enter a string"
   } else if (word.length < 2) {
      return word;
   }
   let permutationsArray = []
   for (let i = 0; i < word.length; i++) {
      let char = word[i]
      let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length)
      for (let permutation of generateCombinations(remainingChars)) {
         let uniq = char + permutation;
         if (permutationsArray.includes(uniq) == false) {
            permutationsArray.push(uniq)
         }

      }
   }
   return permutationsArray
}
console.log(generateCombinations('mother'))