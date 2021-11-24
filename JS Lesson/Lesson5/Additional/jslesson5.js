// - Дано натуральное число n. Выведите все числа от 1 до n.
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в
//   порядке возрастания, если A < B, или в порядке убывания в противном случае.



// - функція Приймає масив та число "i", та міняє місцями об`єкт який
//   знаходиться в індексі "i" на "i+1"
//
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
//   Зберігаючи при цьому порядок не нульових значень.
//   Двожина масиву від 2 до 100
//   EXAMPLE:
//   [1,0,6,0,3] => [1,6,3,0,0]
//   [0,1,2,3,4] => [1,2,3,4,0]
//   [0,0,1,0]   => [1,0,0,0]

// let arr1 = [1,0,6,0,3];
// let arr2 = [0,1,2,3,4];
// let arr3 = [0,0,1,0];
//
// let indexMigrationInEndArray = (arr1) => {
//     console.log(`--------`);
//     console.log(`original array: ${arr1}`);
//     let newArr = []; let delArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === 0) {
//             delArr.push(arr1[i]);
//         } else {
//             newArr.push(arr1[i]);
//         }
//     }
//     for (let j = 0; j < delArr.length; j++) {
//         newArr.push(delArr[j]);
//     }
//     console.log(newArr);
// }
// indexMigrationInEndArray(arr1);
// indexMigrationInEndArray(arr2);
// indexMigrationInEndArray(arr3);