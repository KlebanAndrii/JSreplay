// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//**********************************************************************************************************************
// const myTextarea = document.getElementById('myTextarea');
// const keys = 'myKey'
//
// myTextarea.onchange = ({target: {value}}) => {
//     localStorage.setItem(keys, value);
// }
// myTextarea.value = localStorage.getItem(keys);

//**********************************************************************************************************************
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//**********************************************************************************************************************
// let myForm = document.getElementById('myForm');
//
// for (let teg of myForm) {
//     if (teg.type === 'radio') {
//         let value = localStorage.getItem(teg.name);
//         if (teg.id === value) {
//             teg.checked = true;
//         }
//     } else if (teg.type === 'checkbox') {
//         let bool = localStorage.getItem(teg.name);
//         teg.checked = bool === 'true';
//     } else {
//         teg.value = localStorage.getItem(teg.name)
//     }
// }
//
// myForm.onchange = ({target: {type, name, value, checked, id}}) => {
//     if (type === 'radio') {
//         localStorage.setItem(name, id);
//     } else if (type === 'checkbox') {
//         localStorage.setItem(name, checked);
//     } else {
//         localStorage.setItem(name, value);
//     }
// }
//**********************************************************************************************************************
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//**********************************************************************************************************************

// const textareaMy = document.getElementById('textareaMy');
// const save = document.getElementById('save');
// const left = document.getElementById('left');
// const right = document.getElementById('right');
//
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, textareaMy.value);
// }
// left.onclick = () => {
//     right.style.visibility = 'visible'
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textareaMy.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === '1') {
//         left.style.visibility = 'hidden';
//         return;
//     }
//     textareaMy.value = localStorage.getItem(index - 1);
// }
//
//
// right.onclick = () => {
//     left.style.visibility = 'visible'
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === textareaMy.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === localStorage.length.toString()) {
//         right.style.visibility = 'hidden';
//         return;
//     }
//     textareaMy.value = localStorage.getItem(parseInt(index) + 1);
// }

//**********************************************************************************************************************
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//**********************************************************************************************************************


const KEY = 'key';
let userObj = {};
const content = document.getElementById('content');
const form = document.getElementById('form');


form.save.onclick = () => {

    let user = {...userObj};
    userObj = {};
    for (let i = 0; i < form.children.length; i++) {
        const formElem = form.children[i];

        if (formElem.name && formElem.type !== 'submit') {
            user[formElem.name] = formElem.value;
        }
    }
    if (!user.id) {
        user.id = new Date().getTime();
    }

    saveUser(user)
};



function saveUser(user) {
    if (localStorage.hasOwnProperty(KEY)) {

        const arrayUsers = JSON.parse(localStorage.getItem(KEY));
        const find = arrayUsers.find(value => value.id === user.id);
        console.log(find);
        if (find) {

            const filter = arrayUsers.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(KEY, JSON.stringify(filter));

        } else {
            arrayUsers.push(user);
            localStorage.setItem(KEY, JSON.stringify(arrayUsers));
        }

    } else {
        localStorage.setItem(KEY, JSON.stringify([user]))
    }
}


getContent();


function getContent() {
    if (localStorage.hasOwnProperty(KEY)) {
        const parseUser = JSON.parse(localStorage.getItem(KEY));
        for (const user of parseUser) {
            content.appendChild(createTeg(user))
        }
    }
}


function createTeg(user) {
    const borders = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement('h3');
            h3.innerText = `${key} : ${user[key]}`;
            borders.appendChild(h3);
            flag = false;
        } else {
            const p = document.createElement('p');
            p.innerText = `${key} : ${user[key]}`;
            borders.appendChild(p);
        }
    }


    borders.style = "width : 200px; border : black 5px solid; float : left; margin: 10px; padding: 10px; background-color: lightblue";
    const buttEdit = document.createElement('button');
    const buttDelete = document.createElement('button');
    buttEdit.innerText = "Edit";
    buttDelete.innerText = "Delete";


    buttEdit.onclick = function () {
        editUser(user.id);
    }


    buttDelete.onclick = function () {
        deleteUser(user.id);
    }

    borders.appendChild(buttEdit).style = "margin: 5px; background-color: green";
    borders.appendChild(buttDelete).style = "background-color: red";

    return borders;
}


function deleteUser(id) {
    const parse = JSON.parse(localStorage.getItem(KEY));
    const filter = parse.filter(user => user.id !== id);
    localStorage.setItem(KEY, JSON.stringify(filter));
    location.reload();
}


function editUser(id) {
    const parse = JSON.parse(localStorage.getItem(KEY));
    const find = parse.find(user => user.id === id);

    for (let i = 0; i < form.children.length; i++) {
        const formRes = form.children[i];

        if (formRes.name && formRes.type !== 'submit') {
            for (const key in find) {
                if (formRes.name === key) {
                    formRes.value = find[key];
                }
            }
        }
    }
    userObj = find;
}


