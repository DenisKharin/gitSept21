// 1 Дано список імен.
//   let n1 = 'Harry..Potter'
//   let n2 = 'Ron---Whisley'
//   let n3 = 'Hermione__Granger'
//   Написати функцію, яка приймає будь яке не валідне імя, та нормалізує
//   його в наступнйи вигляд:
//   let n1 = 'Harry Potter'
//   let n2 = 'Ron Whisley'
//   let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let n4 = 'Albus---__..Dumblor';
//
//
// let replaceSymbolsOfString = (n1) => {
//     let result = n1.replaceAll('..', ' ')
//                     .replaceAll('---', ' ')
//                     .replaceAll('__',' ');
//     document.write(`<div>не валідне імя - ${n1}<br>валідне імя - ${result}</div>`)
//     return result;
// }
// replaceSymbolsOfString(n1);
// replaceSymbolsOfString(n2);
// replaceSymbolsOfString(n3);
// replaceSymbolsOfString(n4);


// 2 створити функцію, яка генерує масив рандомних числових цілих значень в
//   діапазоні від 0 до 100.

// let quantityIndex = +prompt(`Скiльки числових рандомнич значень треба створити`);
// let createNewArrayOfRandomValues = (quantityIndex) => {
//     let newArray = [];
//     for (let i = 0; i < quantityIndex - 1; i++) {
//         newArray[i] = (Math.round(Math.random()*100));
//         newArray.push(newArray[i]);
//     }
//     document.write(`Згенерований масив рандомних чисел на ${quantityIndex} значень:<br>${newArray}`);
//     return newArray;
// }


// 3 створити (або згенерувати, за допомоги попередньої функції) масив
//   рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arrRandom = createNewArrayOfRandomValues(quantityIndex);
// arrRandom.sort((a, b) => b - a);
// document.write(`<div>Цей же масив, але в зворотньому порядку (вiд бiльшого до меньшого)...<br>${arrRandom}</div>`);


// 4 створити (або згенерувати, за допомоги попередньої функції) масив рандомних
//   цілих числових значень. відфільтрувати  його за допомоги filter, залишивши
//   тільки парні числа

// let arrRandom = [];
// let generationRandomNumsForArray = (arrRandom) => {
//     for (let i = 0; i < 10; i++) {
//         arrRandom.push(Math.round(Math.random()*100));
//     }
//     return arrRandom;
// }
// console.log(generationRandomNumsForArray(arrRandom));
// let arrFilter = arrRandom.filter(value => value % 2 === 0);
// console.log(arrFilter);

// 5 створити масив рандомних цілих числових значень (або згенерувати, за допомоги
//   попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти
//   в масиві на стрінгові.

// let arrRandom = [];
// let generationRandomNumsForArray = (arrRandom) => {
//     for (let i = 0; i < 10; i++) {
//         arrRandom.push(Math.round(Math.random()*150));
//     }
//     return arrRandom;
// }
// console.log(generationRandomNumsForArray(arrRandom));
// let arrMap = arrRandom.map(value => value.toString());
// console.log(arrMap);

// 6 створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
//   від більшого до меньшого, або навпаки в залежності від значення
//   аргументу direction.
//   let nums = [11,21,3];
//   sortNums('ascending') // [3,11,21]
//   sortNums('descending') // [21,11,3]


// let nums = [11,21,3];
// console.log(nums);
// console.log(`_______________`);
// function sortNums(nums, direction) {
//     let newArrayAfterSort = [];
//     if (direction === 'ascending') {
//         newArrayAfterSort = nums.sort((a, b) => a - b);
//         console.log('ascending ' + newArrayAfterSort);
//         return newArrayAfterSort;
//     }else if(direction === 'descending') {
//         newArrayAfterSort = nums.sort((a, b) => b - a);
//         console.log(`descending ` + newArrayAfterSort);
//         return newArrayAfterSort;
//     }
//     return [];
// }
// sortNums(nums, 'ascending');
// sortNums(nums, 'descending');

// 7 є масив
//   let coursesAndDurationArray = [
//       {title: 'JavaScript Complex', monthDuration: 5},
//       {title: 'Java Complex', monthDuration: 6},
//       {title: 'Python Complex', monthDuration: 6},
//       {title: 'QA Complex', monthDuration: 4},
//       {title: 'FullStack', monthDuration: 7},
//       {title: 'Frontend', monthDuration: 4}
//   ];
//   -- відсортувати його за спаданням за monthDuration
//   -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
//   let coursesAndDurationArray = [
//       {title: 'JavaScript Complex', monthDuration: 5},
//       {title: 'Java Complex', monthDuration: 6},
//       {title: 'Python Complex', monthDuration: 6},
//       {title: 'QA Complex', monthDuration: 4},
//       {title: 'FullStack', monthDuration: 7},
//       {title: 'Frontend', monthDuration: 4}
//   ];
//
// let sortedArr = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortedArr);
//
// let filterArr = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(`_______________________`);
// console.log(filterArr);