// 1 Напишите функцию cutString(str, n), которая делит строку на подстроки,
//   состоящие из n символов.
//   document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let str = 'наслаждение';
// let n = 3;
//
// let cutString = (str, n) => {
//     let resetArray = [];
//     let i = 0;
//     while (i < str.length) {
//         resetArray.push(str.substr(i, n)); // було resetArray.push(str.substring(i, n));
//         i += n;                            //      console.log(str.substring(i, n));
//     }                                      // i += 3;
//     return resetArray;
// }
// console.log(cutString(str, n));

// 2 Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати
//   в себе :
//   данні до знака равлика(@),
//   наявність равлика,
//   крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//   функція не чутлива до регістру
//   (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//   Протестувати на значеннях
//   someemail@gmail.com
//   someeMAIL@gmail.com
//   someeMAIL@i.ua
//   some.email@gmail.com
//
//   Примітка
//   Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
//   Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// let mail1 = 'someemail@gmail.com';
// let mail2 = 'someeMAIL@gmail.com';
// let mail3 = 'someeMAIL@i.ua';
// let mail4 = 'some.email@gmail.com';
// let validateEmail = (str) => {
//         if (str.endsWith('.com') === true || str.endsWith('.ua') === true && str.includes('@gmail') || str.includes('@i')){
//             document.write(`<div>${str} - this email is valid</div>`);
//         } else {
//             document.write(`<div>${str} - this email is not valid</div>`);
//         }
// }
// validateEmail(mail1);
// validateEmail(mail2);
// validateEmail(mail3);
// validateEmail(mail4);


// 3 є масив
//   let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//   відсортувати його в спадаючому порядку за кількістю елементів в полі
//   modules


  let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// let sort = coursesArray.sort((a, b) => {
//     return b.modules.length - a.modules.length
// });
// console.log(sort);



// 4 Напишіть функцію count(str, stringsearch), яка повертає кількість
//   символів stringsearch у рядку str.
//   let symb = "о", str = "Астрономия это наука о небесных объектах";
//   document.writeln(count(str, symb)) // 5

// let str = "Астрономия это наука о небесных объектах";
// document.write(`<div>${str}</div><br><br>`);
// let symb = prompt(`Введiть лiтеру, яку треба порахувати:`);
//
// let count = (str, symb) => {
//     console.log(str);
//     let arrayStr = str.split(' ').join('');
//     console.log(arrayStr);
//     let variable = 0;
//     for (let i = 0; i < arrayStr.length; i++) {
//         if (arrayStr[i] === symb) {
//             variable = variable + 1;
//         }
//     }
//     document.write(`У цьому реченнi, лiтер (${symb}) - ${variable}`);
// }
// count(str, symb);

// 5 Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши
//   у ній n слів.
//   let str = "Сила тяжести приложена к центру масс тела";
//   document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let str = "Сила тяжести приложена к центру масс тела";
// document.write(`<div>${str}</div><br><br>`);
// let n = +prompt(`ВВЕДIТЬ число N - кiлькiсть слiв якi залишаться у рядку`);
//
// let cutString = (str, n) => {
//     let arrayStr = str.split(' ');
//     if (n > arrayStr.length || n === 0) {
//         document.write(`Щось НЕ так - це НЕ МОЖЛИВО !!!`);
//         return [];
//     } else {
//         document.write(`<div>RESULT - ось цi слова - ${n}:</div>`);
//         let variable = arrayStr.length - n;
//         for (let i = 0; i < arrayStr.length - variable; i++) {
//             document.write(`${arrayStr[i]} `);
//         }
//     }
// }
// cutString(str, n);
