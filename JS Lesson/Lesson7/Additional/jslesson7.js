// 1 Створити функцію конструктор для об'єктів User
//   з полями id, name, surname , email, phone

// function User (id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };

//   створити пустий масив, наповнити його 10 об'єктами new User(....)

// let arrayUser = [
//     new User(7, 'Ray', 'Terzus', 'rTerzus@gmail.com', 38098335784),
//     new User(91, 'Mitch', 'Roy', 'MROY@gmail.com', 38098335785),
//     new User(6, 'Rob', 'Steek', 'robSTK@gmail.com', 38098335786),
//     new User(20, 'Lisa', 'Adelstein', 'AdLisa@gmail.com', 38098335787),
//     new User(55, 'Greg', 'Bird', 'BirdGreg@gmail.com', 38098335788),
//     new User(68, 'German', 'Tuss', 'germanT@gmail.com', 38098335789),
//     new User(37, 'Kate', 'Castle', 'CKate@gmail.com', 38098335780),
//     new User(84, 'Julie', 'Serius', 'Julus@gmail.com', 38098335781),
//     new User(79, 'Kent', 'Klark', 'superman@gmail.com', 38098335782),
//     new User(18, 'Rizz', 'Ford', 'FordR@gmail.com', 38098335783)
// ];
// console.log(arrayUser);

// 2 Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//   залишивши тільки об'єкти з парними id (filter)

// let pairedUser = arrayUser.filter((paired) => paired.id % 2 === 0);
// console.log(pairedUser);

// 3 Взяти масив з  User[] з попереднього завдання, та відсортувати
//   його по id. по зростанню (sort)

// let sortingArrayUser = arrayUser.sort ((a, b) => a.id - b.id);
// console.log(sortingArrayUser);

// 4 створити класс для об'єктів Client з
//   полями id, name, surname , email, phone, order
//   (поле є масивом зі списком товарів)

// class Clients {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }

//   створити пустий масив, наповнити його 10 об'єктами
//   ClientClientst arrProducts = []

// let arrayClientsProducnts = [
//     new Clients(7, 'Ray', 'Terzus', 'rTerzus@gmail.com', 38098335784, ['Apple', 'Blackberries', 'Avocado', 'Acerola-Cherry', 'Longan']),
//     new Clients(91, 'Mitch', 'Roy', 'MROY@gmail.com', 38098335785, ['Cherimoya', 'Breadfruit', 'Cantaloupe']),
//     new Clients(6, 'Rob', 'Steek', 'robSTK@gmail.com', 38098335786, ['Tomato', 'Souse']),
//     new Clients(20, 'Lisa', 'Adelstein', 'AdLisa@gmail.com', 38098335787, ['Carambola']),
//     new Clients(55, 'Greg', 'Bird', 'BirdGreg@gmail.com', 38098335788, ['Cherries', 'Milk', 'Cherries', 'Date Fruit']),
//     new Clients(68, 'German', 'Tuss', 'germanT@gmail.com', 38098335789, ['Coconut Meat', 'Clementine']),
//     new Clients(37, 'Kate', 'Castle', 'CKate@gmail.com', 38098335780, ['Custard-Apple', 'Cranberries', 'Gooseberries']),
//     new Clients(84, 'Julie', 'Serius', 'Julus@gmail.com', 38098335781, ['Figs', 'Guava']),
//     new Clients(79, 'Kent', 'Klark', 'superman@gmail.com', 38098335782, ['Honeydew Melon', 'Grapes', 'Java-Plum', 'Kiwifruit']),
//     new Clients(18, 'Rizz', 'Ford', 'FordR@gmail.com', 38098335783, ['Lemon', 'Limon', 'Jujube Fruit', 'Jackfruit'])
// ];
// console.log(arrayClientsProducnts);

// 5 Взяти масив (Client [] з попереднього завдання).Відсортувати його по
//   кількості товарів в полі order по зростанню. (sort)

// let sortingClientsByProductsLength = arrayClientsProducnts.sort ((a, b) => a.order.length - b.order.length);
// console.log(sortingClientsByProductsLength);

