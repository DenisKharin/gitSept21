// 1 Створити функцію конструктор для об'єктів
//   User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
// };
//
// let user1 = new User(1,'Denis','Kharin', 'den77kharin@gmail.com', '+38(067)133-4279');
// console.log(user1);

// 2 створити пустий масив, наповнити його 10 об'єктами new User(....)

// let arrUsers = [];
// for (let i = 0; i < 10; i++) {
//         id = +prompt(`Введiть ID - ${i+1}-го юзера: приклад - 21`),
//         name = prompt(`Введiть Iм'я ${i+1}-го юзера`),
//         surname = prompt(`Введiть прiвище ${i+1}-го юзера`),
//         email = prompt(`Введiть e-mail ${i+1}-го юзера`),
//         phone = prompt(`Введiть номер телефону ${i+1}-го юзера у форматi +38(XXX)XX-XXXX`),
//     arrUsers[i] = new User(id, name, surname, email, phone);
// }
// console.log(arrUsers);

// 3 Взяти масив з  User[] з попереднього завдання, та відфільтрувати,
//   залишивши тільки об'єкти з парними id (filter)

// let filterOfArrUsers = arrUsers.filter(value => {
//     if (value.id % 2 === 0) {
//         return value;
//     };
// });
// console.log(filterOfArrUsers);

// 4 Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по
//   зростанню (sort)

// let sortingOfArrUsers = arrUsers.sort((a, b) => a.id - b.id);
// console.log(sortingOfArrUsers);

// 5 створити класс для об'єктів Client з полями id, name, surname , email, phone, order
//   (поле є масивом зі списком товарів)

// class Clients {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.order = order;
//     }
// }
// let client1 = new Clients(21,'Denis', 'Kharin', 'reclama77@gmail.com', 380671334279, ['Tomato', 'Avocado']);
// console.log(client1);

// 6 створити пустий масив, наповнити його 10 об'єктами Client

// let arrClients = [];
// for (let i = 0; i < 10; i++) {
//     let id = +prompt(`Введiть ID - ${i+1}-го юзера: приклад - 21`);
//     let name = prompt(`Введiть Iм'я ${i+1}-го юзера`);
//     let surname = prompt(`Введiть прiвище ${i+1}-го юзера`);
//     let email = prompt(`Введiть e-mail ${i+1}-го юзера`);
//     let phone = prompt(`Введiть номер телефону ${i+1}-го юзера у форматi (XXX)XX-XXXX`);
//     let order = prompt(`Введiть декiдька товарiв ${i+1}-го юзера через кому...`);
//     arrClients[i] = new Clients(id, name, surname, email, phone, order);
// }
// console.log(arrClients);

// 7 Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
//   товарів в полі order по зростанню. (sort)

// let arrClients = [
//     {id: 12, name: 'norm', surname: 'ozborn', email: 'lormdex@gmail.com', order: ['water', 'apple', 'milk', 'gamburger']},
//     {id: 73, name: 'lissa', surname: 'jinler', email: 'lissa@gmail.com', order: ['tomato', 'apricot']},
//     {id: 4, name: 'den', surname: 'kirk', email: 'kirk@gmail.com', order: ['milk']},
//     {id: 96, name: 'iona', surname: 'vern', email: 'iona@gmail.com', order: ['juice', 'butter']},
//     {id: 61, name: 'nora', surname: 'bird', email: 'nora@gmail.com', order: ['fish']},
//     {id: 7, name: 'dima', surname: 'orlov', email: 'orlov@gmail.com', order: ['apricot', 'apple', 'tomato']},
//     {id: 43, name: 'eric', surname: 'bounty', email: 'ericdex@gmail.com', order: ['froggy', 'tomato']},
//     {id: 76, name: 'versal', surname: 'romus', email: 'versal@gmail.com', order: ['drink']},
//     {id: 69, name: 'tommy', surname: 'lee', email: 'leetommy@gmail.com', order: ['fish', 'juice']},
//     {id: 35, name: 'gran', surname: 'drelo', email: 'gram@gmail.com', order: ['lotos', 'apple', 'milk', 'banana', 'cherry']}
// ];
// let orderSort = arrClients.sort((a, b) => a.order.length - b.order.length);
// console.log(orderSort);




