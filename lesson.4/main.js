//***************************************************************************************************************************** */
// 1) створити функцію яка приймає масив та виводить його

// function array(mas) {
//     return mas;
// }
//
// let arr = array(['red', 99, 'yellow', 843]);
// console.log(arr);

//====================================================

// let array1 = function (mas) {
//     return mas;
// }
// let arr1 = array1(['black', 64, 'false', 78, 933]);
// console.log(arr1);

//=========================================================

// let array2 = (mas) => {
//    return mas;
// }
// let arr2 = array2(['pink', 'green', 'color']);
// console.log(arr2);

//******************************************************************************************************************************
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// let numRan = [];
// function random() {
//   numRan = Math.floor(Math.random() * 100)
// }
// random();
// console.log(numRan);

//====================================================

// let numRan1 = [];
// let random1 = function () {
//     for (let i = 0; i < 10; i++) {
//         numRan1[i] = Math.floor(Math.random() * 100);
//     }
// }
// random1();
// console.log(numRan1);

//*****************************************************************************************************************************************8
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numMin(one, two, three) {
//    let min;
//    if (one < two && three) min = one;
//    if (two < one && three) min = two;
//    if (three < two && one) min = three;
//    return min;
// }
// let minNum = numMin(457,82,226);
//
// console.log(minNum);

//****************************************************************************************************************************************
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numMax(one, two, three) {
//     let max;
//     if (one > two && three) max = one;
//     if (two > one && three) max = two;
//     if (three > one && two) max = three;
//     return max;
// }
// let maxNum = numMax(3424,232,452);
// console.log(maxNum);

//*************************************************************************************************************************************
// 5) створити функцію яка повертає найбільше число з масиву

// let array = [24, 252, 232, 12, 33, 678]
//
// function arrMaxNum(mas) {
// let max = mas[0];
//     for (let i = 0; i < mas.length; i++) {
//       if (mas[i] > max) {
//           max = mas[i];
//       }
//     }
//     return max;
// }
//
// let arrMax = arrMaxNum(array);
// console.log(arrMax);


//************************************************************************************************************************************
// 6) створити функцію яка повертає найменьше число з масиву

// let arrayMin = [54, 234, 25, 767, 433, 26, 112];
//
// function arrMinNum(mas) {
//    let min = mas[0];
//     for (let i = 0; i < mas.length; i++) {
//        if (mas[i] < min) {
//            min = mas[i];
//        }
//     }
//     return min;
// }
//
// let arrMin = arrMinNum(arrayMin);
// console.log(arrMin);


//*****************************************************************************************************************************************
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sumArr() {
//     let sum = 0;
//     for (let argument of arguments) {
//         sum += argument;
//     }
//     return sum;
// }
//
// let resSum = sumArr(42, 123, 12, 434, 545, 21)
// console.log(resSum);

//************************************************************************************************************************************
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function arrSum() {
//     let sum = 0;
//     for (let argument of arguments) {
//         sum += argument;
//     }
//     return sum / arguments.length;
// }
//
// let resSer = arrSum(53, 654, 23, 4542, 323, 54)
// console.log(resSer);


//***********************************************************************************************************************************
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}, {car: 'bmw'}];
//
// function userKey(arrKey) {
//     let result = [];
//     for (let arrKeyKey of arrKey) {
//         for (let key in arrKeyKey) {
//             result.push(key);
//         }
//     }
//     return result;
// }
//
// let resKey = userKey(users);
// console.log(resKey);


//*************************************************************************************************************************************
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}, {car: 'bmw'}];
//
// function arrVal(masV) {
//     let resV = [];
//     for (let masVElement of masV) {
//         for (let val in masVElement) {
//             resV.push(masVElement[val]);
//         }
//     }
//     return resV;
// }
//
// let resVal = arrVal(user);
// console.log(resVal);


//************************************************************************************************************************************
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


// let one = [1, 2, 3, 4];
// let two = [2, 3, 4, 5];
//
// function isOne(arrOne, arrTwo) {
//     let res = [];
//     for (let i = 0; i < arrOne.length; i++) {
//         res.push(arrOne[i] + arrTwo[i]);
//     }
//     return res;
// }
//
// let resIs = isOne(one, two);
// console.log(resIs);

// **********************************************************************************************************************************
//***********************************************************************************************************************************

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function numMinMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     console.log(max);
//     return min
// }
//
// let numMin = numMinMax(54, 23, 421, 34, 556, 32, 76, 99);
// console.log(numMin);


//************************************************************************************************************************************
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.


// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}, {car: 'bmw'}];
//
// function dynamically(arr) {
//     let arrDyn = [];
//     if (confirm() === true) {
//         for (let arrK of arr) {
//             for (let key in arrK) {
//                 arrDyn.push(key);
//             }
//         }
//     } else {
//         for (let arrE of arr) {
//             for (let arrEKey in arrE) {
//                 arrDyn.push(arrE[arrEKey]);
//             }
//         }
//     }
//     return arrDyn;
// }
//
// let resDyn = dynamically(users);
// console.log(resDyn);

//**************************************************************************************************************************************
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// let one = [9, 8, 0, 4];
//
// function inPlaces(mas, index) {
//     let arr = [...mas];
//     if (index < arr.length - 1) {
//         let temp = arr[index];
//         arr[index] = arr[index + 1];
//         arr[index + 1] = temp;
//     }
//     return arr;
// }
//
// let three = inPlaces(one, 0);
// // let three = inPlaces(one, 1);
// // let three = inPlaces(one, 2);
// console.log(three);


//*****************************************************************************************************************************************
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let num = [0, 1, 2, 3, 4, 0 , 9, 4, 43, 8, 0 , 98, 0, 2, 0];
//
// function zero(mas) {
//     let number = [];
//     let zeroNum = [];
//     for (let ma of mas) {
//         if (ma === 0) {
//             zeroNum.push(0);
//         } else {
//             number.push(ma);
//         }
//     }
//     return number.concat(zeroNum);
// }
//
// let resZ = zero(num);
// console.log(resZ);


//**************************************************************************************************************************************
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// function norma() {
//     for (let i = 0; i < arguments.length; i++) {
//         let nor = arguments[i].trim();
//         let norEl = nor.replaceAll('       ', ' ')
//         console.log(norEl);
//     }
//
// }
//
// norma(n1, n2, n3);


// *********************************************************************************************************************************************


// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// let tex = 'Hello owu';
//
// function textApp(texAp = 'no text') {
//     let app = document.createElement('div');
//     app.innerHTML = texAp;
//     document.body.appendChild(app);
// }
//
// textApp(tex);
// textApp();

//*******************************************************************************************************************************************
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи


// function texTag(text = 'Text', typeTag = 'h5') {
//     const tag = document.createElement(typeTag);
//     tag.innerHTML = text;
//     document.body.appendChild(tag);
// }
//
// texTag('My children cat eats fish', 'h2');
// texTag();

//*******************************************************************************************************************************************
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

let car = [
    {brand: 'BMW', model: 'X7', power: '5.0', year: '2021'},
    {brand: 'Opel', model: 'Astra', power: '1.6', year: '2006'},
    {brand: 'Renault', model: 'Megan', power: '1.5', year: '2014'},
    {brand: 'Ford', model: 'Focus', power: '2.0', year: '2018'},
    {brand: 'Honda', model: 'CR-V', power: '2.2', year: '2016'}
];

function cars(mas) {
    for (let ma of mas) {
        const tag = document.createElement('h3');
        tag.innerHTML = `Brand: ${ma.brand} - Model: ${ma.model} - Power: ${ma.power} - Year: ${ma.year}`;
        document.body.appendChild(tag);
    }
}

cars(car);


//*********************************************************************************************************************************************
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function blocCar(car) {
    for (let carElement of car) {
        let tagC = document.createElement('h5');
        tagC.innerHTML = `Brand: ${carElement.brand}
<h2>Model: ${carElement.model}</h2>
<h3>Power: ${carElement.power}</h3>
<h1>Year: ${carElement.year}</h1> <hr>`;
        document.body.appendChild(tagC);
    }
}

blocCar(car);

// ******************* НАЗАД В МИНУЛЕ *********************** //