// 1 Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить
//   зробити наступне:
//   При лівому кліку миші вивести в консоль інформацію про блок або елемент
//   на який відбувся клік.
//   Інформація яку потрібно вивести: Назва тегу, список класів, список ід,
//   розміри в форматі висота*ширина


// 2 Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить
//   зробити наступне:
//   При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся
//   інформація про блок.
//   Інформація яку потрібно вивести в popup: Назва тегу, список класів,
//   список ід, розміри в форматі висота*ширина


// 3 взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
//   Фильтры могут работать как вместе так и по отдельности.
//      1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//      2й - оставляет старше 29 лет включительно
//      3й - оставляет тех у кого город киев
//      Данные выводить в документ

    let createDivForAllUsers = document.createElement('div');
    createDivForAllUsers.classList.add('body-users');

    for (const users of usersWithAddress) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('userBlock');

        for (const userKey in users) {
            let userKeys = document.createElement('div');
            if (userKey !== 'address') {
                userKeys.innerText = `${userKey} - ${users[userKey]}`;
                userDiv.appendChild(userKeys);
            } else {
                let userAddress = document.createElement('div')
                let address = users.address;
                userAddress.innerText = `${userKey}:`;
                userDiv.appendChild(userAddress);
                for (const key in address) {
                    let userAddKeys = document.createElement('div')
                    userAddKeys.innerText = `${key}: ${address[key]}`;
                    userDiv.appendChild(userAddKeys);
                }
            }
        }
        createDivForAllUsers.appendChild(userDiv);
    }

let divButtons = document.createElement('div');
divButtons.classList.add('buttons');

let buttonFilterStatus = document.createElement('button')
buttonFilterStatus.classList.add('btn');
buttonFilterStatus.innerText = 'Sorting Status Users';

buttonFilterStatus.onclick = function () {
    let newArrayStatus = usersWithAddress.filter(value => value.status === false);
    console.log(newArrayStatus);
    let divForStatus = document.createElement('div');
    divForStatus.classList.add('usersDivStatus');

    for (const item of newArrayStatus) {
        let divStatus = document.createElement('div');
        divStatus.classList.add('blockStatus');

        for (let keyItem in item) {
            let keyItems = document.createElement('div');
            if (keyItem !== 'address') {
                keyItems.innerText = `${keyItem} - ${item[keyItem]}`;
                divStatus.appendChild(keyItems);
            } else {
                let keyItemDivAdd = document.createElement('div');
                let addressStatus = item.address;
                keyItemDivAdd.innerTextn = `${keyItem}:`;
                divStatus.appendChild(keyItemDivAdd);
                for (let addStatusKey in addressStatus) {
                    let divAddStatus = document.createElement('div');
                    divAddStatus.innerText = `${addStatusKey} - ${addressStatus[addStatusKey]}`;
                    divStatus.appendChild(divAddStatus);
                }
            }
        }
        divForStatus.appendChild(divStatus);
        document.body.appendChild(divForStatus);
    }
}

let buttonSortAges = document.createElement('button')
buttonSortAges.classList.add('btn');
buttonSortAges.innerText = 'Sorting Age Users';

buttonSortAges.onclick = function () {
    let sortAges = usersWithAddress.filter(value => value.age >= 29);
    console.log(sortAges);
    let divSortAges = document.createElement('div');
    divSortAges.classList.add('sortAges');

    for (const item of sortAges) {
        let divStatus = document.createElement('div');
        divStatus.classList.add('blockAge');

        for (let keyItem in item) {
            let keyItems = document.createElement('div');
            if (keyItem !== 'address') {
                keyItems.innerText = `${keyItem} - ${item[keyItem]}`;
                divStatus.appendChild(keyItems);
            } else {
                let keyItemDivAdd = document.createElement('div');
                let addressStatus = item.address;
                keyItemDivAdd.innerTextn = `${keyItem}:`;
                divStatus.appendChild(keyItemDivAdd);
                for (let addStatusKey in addressStatus) {
                    let divAddStatus = document.createElement('div');
                    divAddStatus.innerText = `${addStatusKey} - ${addressStatus[addStatusKey]}`;
                    divStatus.appendChild(divAddStatus);
                }
            }
        }
        divSortAges.appendChild(divStatus);
        document.body.appendChild(divSortAges);
    }
}

let buttonSortAddress = document.createElement('button')
buttonSortAddress.classList.add('btn');
buttonSortAddress.innerText = 'Sorting Address Users';

buttonSortAddress.onclick = function () {
    let sortCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
    console.log(sortCity);
    let divSortCity = document.createElement('div');
    divSortCity.classList.add('sortCity');

    for (const item of sortCity) {
        let divStatus = document.createElement('div');
        divStatus.classList.add('blockCity');

        for (let keyItem in item) {
            let keyItems = document.createElement('div');
            if (keyItem !== 'address') {
                keyItems.innerText = `${keyItem} - ${item[keyItem]}`;
                divStatus.appendChild(keyItems);
            } else {
                let keyItemDivAdd = document.createElement('div');
                let addressStatus = item.address;
                keyItemDivAdd.innerTextn = `${keyItem}:`;
                divStatus.appendChild(keyItemDivAdd);
                for (let addStatusKey in addressStatus) {
                    let divAddStatus = document.createElement('div');
                    divAddStatus.innerText = `${addStatusKey} - ${addressStatus[addStatusKey]}`;
                    divStatus.appendChild(divAddStatus);
                }
            }
        }
        divSortCity.appendChild(divStatus);
        document.body.appendChild(divSortCity);
    }
}


divButtons.append(buttonFilterStatus, buttonSortAges, buttonSortAddress);
document.body.append(createDivForAllUsers, divButtons,);


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо
//      элемент DOM-структуры.
//      Функция создает в боди 2 кнопки (назад/вперед)
//      - при нажатии вперед, вы переходите к дочернему элементу, при еще
//        одном нажатии на "вперед", вы переходите к следующему дочернему
//        элементу (лежащему на одном уровне)
//      - НО если у (какого-либо)дочеренего элемента есть дети, то
//        нажатие "вперед" позволяет нам войти внутрь элемента и  выводит
//        первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и
//     переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать
//   влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде
//     погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось
//     іншим способом змінює свій стан