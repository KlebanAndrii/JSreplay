// // - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// //==================================================================================
// const element = document.querySelector('#text');
//
// element.onclick = (ev => {
//     element.hidden = true;
// });
// //=================================================================================
// //     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// //=================================================================================
// const butt = document.getElementById('butt');
//
// butt.onclick = (ev => {
//     butt.hidden = true;
// });
// //===================================================================================================================================
// // - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// //===================================================================================================================================
// const input = document.getElementById('age');
// const butt = document.getElementById('butt');
// butt.onclick = (ev => {
//     if (input.value < 18) {
//         confirm('you are few years old')
//     }
// });
// //=====================================================================
// // - Створіть меню, яке розгортається/згортається при клику
// //=====================================================================
// const deploy = document.getElementById('deploy');
// const ulli = document.getElementById('li-li');
// let hid = true;
// deploy.onclick = () => {
//     ulli.style.display = hid ? 'none' : 'block';
//     hid = !hid;
// };
// //================================================================================================================================
// // - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вивести список коментарів в документ, кожний в своєму блоці.
// //     Додайте кожному коментарю по кнопці для згортання його body.
// //================================================================================================================================
// const comments = [
//     {
//         title: 'Here you can find activities to practise your reading skills.',
//         body: 'Reading will help you to improve your understanding of the language and build your vocabulary.'
//     },
//     {
//         title: 'Texts include posters, messages, forms and timetables.',
//         body: 'Reading practice to help you understand simple information, words and sentences about known topics.'
//     },
//     {
//         title: 'Texts include emails, invitations, personal messages, tips, notices and signs.',
//         body: 'Reading practice to help you understand simple texts and find specific information in everyday material. '
//     },
//     {
//         title: 'Texts include articles, reports, messages, short stories and reviews.',
//         body: 'Reading practice to help you understand long, complex texts about a wide variety of topics, some of which may be unfamiliar.'
//     }
// ];
// const appDiv = document.getElementById('app');
// comments.forEach(value => {
//     const h1 = document.createElement('h1');
//     const h4 = document.createElement('h4');
//     const button = document.createElement('button');
//     const div = document.createElement('div');
//
//     h1.innerHTML = value.title;
//     h4.innerHTML = value.body;
//
//     div.appendChild(h1);
//     div.appendChild(h4);
//     div.appendChild(button);
//
//     button.innerText = 'tik-tik'
//     button.onclick = () => {
//         h4.hidden = !h4.hidden;
//     }
//
//     appDiv.appendChild(div);
// });
// //==============================================================================================================================================
// // - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// //==============================================================================================================================================
// const buttForms = document.getElementById('but_forms');
// buttForms.onclick = (ev) => {
//     const formsMy = document.forms;
//     for (let form of formsMy) {
//         for (let formElement of form) {
//             console.log(formElement.value);
//         }
//     }
// };
// //=============================================================================================================
// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кількість ячейок в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// //=============================================================================================================
//
//
// function myFunction(str, cell, appT) {
//
//     const appTable = document.getElementById('appTable');
//     const table = document.createElement('table');
//     const butFuc = document.createElement('button');
//
//     for (let i = 0; i < str; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < cell; j++) {
//             const td = document.createElement('td');
//             td.innerText = `${i} : ${j}`;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//
//     butFuc.innerText = 'table';
//     appTable.appendChild(butFuc);
//
//     butFuc.onclick = () => {
//         appTable.appendChild(table);
//     }
//
// }
//
// myFunction(6, 8, 'appTable');
// //========================================================================================================
// // - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
// //========================================================================================================
// const boxesImg = [
//     {
//         alt: 'World_1',
//         url: './img/News of the World1.jpg'
//     },
//     {
//         alt: 'World_2',
//         url: './img/News of the World2.jpg'
//     },
//     {
//         alt: 'World_3',
//         url: './img/News of the World3.jpg'
//     }
// ];
// const butt_left = document.getElementById(`butt_left`);
// const butt_right = document.getElementById('butt_right');
// const box_img = document.getElementById('box_img');
//
// let indexImg = 0;
//
// butt_left.onclick = () => {
//     if (indexImg - 1 < 0) {
//         indexImg = boxesImg.length - 1;
//     } else {
//         indexImg = indexImg - 1;
//     }
//     box_img.alt = boxesImg[indexImg].alt;
//     box_img.src = boxesImg[indexImg].url;
// };
// butt_right.onclick = () => {
//     if (indexImg + 1 > boxesImg.length - 1) {
//         indexImg = 0;
//     } else {
//         indexImg = indexImg + 1;
//     }
//     box_img.alt = boxesImg[indexImg].alt;
//     box_img.src = boxesImg[indexImg].url;
// };
// //______________________________________________________________________________________________________________________________________________________
// // РОБОТА В АУДИТОРІЇ
// //______________________________________________________________________________________________________________________________________________________
// //
// //
// // - Сворити масив нецензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// //==========================================================================================
// const obscenity = ['rrr', 'xxx', 'sss', 'yyy'];
//
// const inp_obs = document.getElementById('inp_obs');
// const butt_obs = document.getElementById('butt_obs');
//
// butt_obs.onclick = (ev) => {
//     const textInp = inp_obs.value;
//     const filter = obscenity.includes(textInp);
//     if (filter) {
//         alert('These words are obscene');
//
//     }
// }
// //============================================================================================
// // - Сворити масив нецензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// //============================================================================================
// const obscenity = ['rrr', 'xxx', 'sss', 'yyy'];
//
// const inp_obs = document.getElementById('inp_obs');
// const butt_obs = document.getElementById('butt_obs');
//
// butt_obs.onclick = (ev) => {
//     let text = inp_obs.value.split(' ');
//     for (let textElement of text) {
//         let filter = obscenity.includes(textElement);
//         if (filter) {
//             alert('These words are obscene');
//         }
//     }
// }

// //=====================================================================================================================================
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
//=====================================================================================================================================

let elementsH2 = document.getElementsByTagName('h2');
let number = 1;
let eleUl = document.getElementById('menu');

for (const element of elementsH2) {
    let eleLi = document.createElement('li');
    let elementsA = document.createElement('a');
    elementsA.innerText = element.innerText;
    elementsA.setAttribute('href', '#href' + number);
    number++;
    eleLi.appendChild(elementsA);
    eleUl.appendChild(eleLi);

}

let classRules = document.querySelectorAll('.rules');
let idNum = 1;
for (const classRule of classRules) {
    classRule.setAttribute('id', 'href' + idNum);
    idNum++;

}

//=================================================
// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ


const inputFalse = document.getElementById('inputFalse');
const input29 = document.getElementById('input29');
const inputKyiv = document.getElementById('inputKyiv');

let usersBox = JSON.parse(JSON.stringify(usersWithAddress));


document.getElementById('result').onclick = function () {

    if (inputFalse.checked) {
        usersBox = usersBox.filter(value => value.isMarried === false);
    }
    if (input29.checked) {
        usersBox = usersBox.filter(value => value.age >= 29);
    }
    if (inputKyiv.checked) {
        usersBox = usersBox.filter(value => value.address.city === 'Kyiv');
    }
    for (let user of usersBox) {

        document.write(`<div>
Id: ${user.id}
Name: ${user.name}
Age: ${user.age}
Married: ${user.isMarried}
City: ${user.address.city}
</div>`)
    }
};
