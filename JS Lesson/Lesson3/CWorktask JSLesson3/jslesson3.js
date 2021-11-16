// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while

// let i = 0;
// while (i < arrNum.length) {
//     console.log(`${i} - index зi значенням    ${arrNum[i]}`);
//     i++;
// }

// 9 - в зворотньому циклі (с заду на перед)
// let i = arrNum.length - 1;
// while (i >= 0) {
//     console.log(`${i} - index зi значенням    ${arrNum[i]}`);
//     i--;
// }


//     2. перебрати його циклом for

// for (let j = 0; j < 10; j++) {
//     console.log(`${j} - index зi значенням    ${arrNum[j]}`)
// }

// 9 - в зворотньому циклі (с заду на перед)
// for (let j = arrNum.length - 1; j >= 0; j--) {
//     const arrNumElement = arrNum[j];
//     console.log(`${j} - index зi значенням    ${arrNumElement}`);
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < arrNum.length) {
//     if (i % 2 !== 0) {
//         console.log(`Непарний index - ${i} зi значенням    ${arrNum[i]}`);
//     };
//     i++;
// }
// 9 - в зворотньому циклі (с заду на перед)
// let i = arrNum.length - 1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(`Непарний index - ${i} зi значенням    ${arrNum[i]}`);
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// 1-й варiант
// for (let i = 0; i < 10; i++) {
//     let result = i % 2 !== 0 ? `Непарний index - ${i}` : `_________________`;
//     console.log(result);
// }

// 2-й варiант
// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(`Непарний index - ${i} зi значенням    ${arrNum[i]}`);
//     }
// }

// 9 - в зворотньому циклі (с заду на перед)
// 1-й варiант
// for (let i = arrNum.length - 1; i >= 0; i--) {
//     let result = i % 2 !== 0 ? `Непарний index - ${i}` : `_________________`;
//     console.log(result);
// }
// 2-й варiант
// for (let i = 9; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(`Непарний index - ${i} зi значенням    ${arrNum[i]}`);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < arrNum.length) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(`Парнe значення    ${arrNum[i]}`);
//     }
//     i++;
// }
// 9 - в зворотньому циклі (с заду на перед)
// let i = arrNum.length - 1;
// while (i >= 0) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(`Парнe значення    ${arrNum[i]}`);
//     }
//     i--;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < 10; i++) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(`Парнe значення    ${arrNum[i]}`);
//     }
// }
// 9 - в зворотньому циклі (с заду на перед)
// for (let i = 9; i >= 0; i--) {
//     if (arrNum[i] % 2 === 0) {
//         console.log(`Парнe значення    ${arrNum[i]}`);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

// console.log(arrNum);
// for (let i = 0; i < 10; i++) {
//     if (arrNum[i] % 3 === 0) {
//         arrNum[i] = 'OKTEN';
//     }
// }
// 9 - в зворотньому циклі (с заду на перед)
// for (let i = arrNum.length - 1; i >= 0; i--) {
//     if (arrNum[i] % 3 === 0) {
//         arrNum[i] = 'OKTEN';
//     }
// }


// 8. вивести масив в зворотньому порядку.

// 1-й варiант
// console.log(arrNum);
// for (let i = arrNum.length - 1; i >= 0; i--) {
//     const arrNumElement = arrNum[i];
//     console.log(arrNumElement);
// }

// 2-й варiант
// console.log(arrNum);
// let i = arrNum.length - 1;
// while (i >= 0) {
//     console.log(arrNum[i]);
//     i--;
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
