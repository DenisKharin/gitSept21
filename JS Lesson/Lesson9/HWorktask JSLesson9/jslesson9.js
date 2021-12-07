// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту,
//   розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divCreate = document.createElement('div');
//     divCreate.classList.add('wrap', 'collapse', 'alpha', 'beta');
// let createH1 = document.createElement('h1');
//     divCreate.appendChild(createH1);
//     document.body.appendChild(divCreate);
//
//     divCreate.style.width = '350px';
//     divCreate.style.height = '100px';
//     divCreate.style.backgroundColor = 'silver';
//     divCreate.style.border = '5px double black';
//     divCreate.style.margin = '10px';
//
//     createH1.style.color = 'gold';
//     createH1.innerText = 'OKTEN HWorktask8';
//     createH1.style.textShadow = '2px 2px 3px black';
//     createH1.style.textAlign = 'center';
//     createH1.style.lineHeight = '50px';
//
// let divClone = divCreate.cloneNode(true);
// document.body.appendChild(divClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для
// кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
// let mainClass = document.getElementsByClassName('menu')[0];
// array.forEach(valueArr => {
//     let liElement = document.createElement('li');
//     liElement.innerText = valueArr;
//     liElement.style.listStyle = 'none';
//     liElement.style.fontSize = '30px';
//     liElement.style.fontWeight = 'bold';
//     liElement.style.color = 'darkblue';
//     liElement.style.textShadow = '1px 1px 2px red';
//     mainClass.appendChild(liElement);
// })

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію
// про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const elements of coursesAndDurationArray) {
//     let createP = document.createElement('p');
//     document.body.appendChild(createP);
//     for (const key in elements) {
//         let blockText = document.createElement('span');
//         blockText.style.textAlign = 'center';
//         blockText.style.fontWeight = 'bolder';
//         blockText.style.fontSize = '25px'
//         blockText.style.textShadow = '1px 1px 3px red';
//         blockText.innerText = key + ': ' + elements[key] + '; ';
//         createP.appendChild(blockText);
//     }
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//    в якому буде <h1 class='heading'>  з title  елементу,
//    та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.forEach(value => {
//     let createDiv = document.createElement('div');
//     createDiv.classList.add('item');
//         createDiv.style.width = '350px';
//         createDiv.style.height = '100px';
//         createDiv.style.backgroundColor = 'silver';
//         createDiv.style.border = '5px double black';
//         createDiv.style.margin = '10px';
//
//     let createH1 = document.createElement('h1');
//     createH1.classList.add('heading');
//         createH1.innerText = value.title;
//         createH1.style.textAlign = 'center';
//
//     let createP = document.createElement('p');
//     createP.classList.add('description');
//         createP.innerText = value.monthDuration;
//         createP.style.textAlign = 'center';
//
//     createDiv.append(createH1, createP);
//     document.body.appendChild(createDiv);
// })
