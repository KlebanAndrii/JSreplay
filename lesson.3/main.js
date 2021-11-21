//*********************************************************************************************************************** */
//- Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
// document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
//********************************************************************** */
//     a) отримує текст з параграфа з id "content"
const contentId = document.getElementById('content');
console.log(contentId);

//     b) отримує текст з блоку з id "rules"
const rulesId = document.getElementById('rules');
console.log(rulesId);

//     c) замініть текст параграфа з id 'content' на будь-який інший
contentId.innerText = 'My cat eats fish';
console.log(contentId);

//     d) замініть текст параграфа з id 'rules' на будь-який інший
rulesId.innerText = 'My name Andrii, I have question and answers.';
console.log(rulesId);

//     e) змініть кожному елементу колір фону на червоний
contentId.style.color = 'red';
console.log(contentId);
rulesId.style.color = 'red';
console.log(rulesId);

//     f) змініть кожному елементу колір тексту на синій
contentId.style.color = 'blue';
console.log(contentId);
rulesId.style.color = 'blue';
console.log(rulesId);

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
const classRules = document.getElementById('rules').classList;
console.log(classRules);

//     h) отримати всі елементи з класом fc_rules
const fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules);

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (const colorRul of fcRules) {
    colorRul.style.color = 'red';
}
//************************************************************************************************************************* */


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// 2) За допомоги циклу проітерувати  масив users,
//   записати кожного юзера в сівй блок за допомоги document.createElement.
//   Вставити цей блок на сторінку

for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `${user.name}, ${user.age}, ${user.status},
    ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`;
    userDiv.style.border = '2px solid black'
    document.body.appendChild(userDiv);
}


// 3) За допомоги циклу проітерувати  масив users,
//   записати кожного юзера в сівй блок за допомоги document.createElement.
//   Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user1 of users) {
    const userDiv1 = document.createElement('div');
    const userAddress = document.createElement('div');

    userDiv1.innerHTML = `${user1.name}, ${user1.age}, ${user1.status}`
    userAddress.innerHTML = `<div>${user1.address.city}</div> <div>${user1.address.country}</div> <div>${user1.address.street}</div>
   <div>${user1.address.houseNumber}</div>`

    document.body.appendChild(userDiv1);
    document.body.appendChild(userAddress);

}
