// 1. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати
// код, який перевірить, до якої четверті години попадає
// число (в першу, другу, третю или четверту частину години).

//  let time = +prompt("Введiть, ЯКА ХВИЛИНА поточноi години вiд 0 до 59 ?");
// if (time <= 15) {
//   document.write( time + '-а хвилина це ПЕРША частина (чверть) години');
// } else if (time >= 16 && time <= 30) {
//  document.write( time + '-а хвилина це ДРУГА частина (чверть) години');
// } else if (time >= 31 && time <= 45) {
//  document.write( time + '-а хвилина це ТРЕТЯ частина (чверть) години');
// } else if (time >= 46 && time <= 59) {
//  document.write( time + '-а хвилина це ЧЕТВЕРТА частина (чверть) години');
// } else {
//  document.write('Ох жеш ВИ i жартiвник!!! <br>');
// }

// 2. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
// половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

//   let day = +prompt("Яке сьогоднi число - ДАТА мicяця ?");
// if (day <=10) {
//  document.write(`Дякую! ${day} - це число ПЕРШОI декади мiсяця`);
// } else if (day > 10 && day <= 20) {
//   document.write(`Дякую! ${day} - це число ДРУГОI декади мiсяця`);
//  } else if (day > 20 && day <= 31) {
//   document.write(`Дякую! ${day} - це число ТРЕТЬОI декади мiсяця`);
//  } else {
//   document.write('Ви, що - з планети ШЕЛЕЗЯКА :))');
//  }

// 3. У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно',
// інакше виведіть 'Неправильно'. Перевірте роботу скрипта при test, що
// дорівнює true, false. Напишіть два варіанти скрипта - з коротким
// записом(тернаркою)

// let test = +prompt(`Скiльки в цьому мiсяцi вихiдних ДНIВ?`);
// if (test > 8 && test <= 10) {
//     document.write(`В цьому мiсяцi не 5ть робочих ТИЖНIВ - НЕ ПРАВИЛЬНО!!!`);
// } else if (test === 8) {
//     document.write(`ПРАВИЛЬНО!!!`);
// } else if (test === false || test === 0) {
//     document.write(`Щось пiшло не так... НЕ ВIРНО!!!`);
// } else if (test < 5 && test === 4) {
//     document.write(`Так - сьгоднi вже 4-й день i по переду ще 2 вiкенда!!!`);
// } else if (test > 10) {
//     document.write(`Ви точно працьовита людина?`);
// } else if (test > 0 && test < 4) {
//     document.write(`ВИ СПРАВЖНIЙ ТРУДОГОЛIК`);
// }


// 4. Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt(`Чому дорiвнюэ змінна a ?`);
// if (a === 0 || a === 1 || a ===-3) {
//     document.write(`Вірно`);
// } else {
//     document.write(`Невірно`);
// }

// 5. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий
// номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let dayNomber = +prompt(`Введiть - порядковий номер дня тижня (1...7)`);
// switch (dayNomber) {
//     case 1 :
//         document.write(`У ПОНЕДIЛОК у Вас вводне заняття з JSIntro о 19:45`);
//         break;
//     case 2 :
//         document.write(`У ВIВТОРОК i у Вас практика з JS о 18:00`);
//         break;
//     case 3 :
//         document.write(`У СЕРЕДУ у Вас наступне заняття з JSLesson1 о 19:45`);
//         break;
//     case 4 :
//         document.write(`У ЧЕТВЕР у Вас день практики з JS о 12:00`);
//         break;
//     case 5 :
//         document.write(`У П'ЯТНИЦЮ у Вас заняття з JSLesson2 о 19:45`);
//         break;
//     case 6 :
//         document.write(`У СУБОТУ заняття з АНГЛIЙСЬКОI о 10:00`);
//         break;
//     case 7 :
//         document.write(`У НЕДIЛЮ у Вас вiльний час для пiдтягнення боргiв з ДЗ`);
//         break;
//     default:
//         document.write(`Щось пiшло не так... Таке не можливо!!!`)
// }

// 6. Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Щоб визначити Високосний рік чи ні - введiть рiк')
// if (year % 4 === 0) {
//     document.write(`Бiнго!!! ${year} - Високосний рік`);
// } else {
//     document.write(`НАЖАЛЬ! Але ${year} - НЕ високосний рік`);
// }

// 7. Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
//    „Яка «офіційна» назва JavaScript?“
//    Якщо користувач вводить «ECMAScript», то показати: «Правильно!»,
//    інакше – відобразити: «Не знаєте? ECMAScript!»

// let jsName = prompt(`Яка «офіційна» назва JavaScript?`);
// if (jsName == 'ECMAScript') {
//     document.write(`«Правильно!»`);
// } else {
//     document.write(`«Не знаєте? ECMAScript!»`);
// }