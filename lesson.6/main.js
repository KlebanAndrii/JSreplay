// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
//====================================================
//
// const numbers = [43, 65, 2, 121, 23, 87, 765, 43, 22, 4, 56, 73, 44, 88, 68, 42, 33, 54, 78, 99];
//
// let numberMin = numbers.sort((a, b) => {
//     return a - b;
// });
// console.log(numberMin);
//
//====================================================
//     b) відсортувати його від більшого до меншого.
//====================================================
//
// let numberMax = numbers.sort((a, b) => {
//     return b - a;
// });
// console.log(numberMax);
//
//================================================
//     c) Відфілтрувати числа які є кратними 3.
//================================================
//
// let numberFil = numbers.filter(value => {
//     return value % 2 === 0;
// });
// console.log(numberFil);
//
//===============================================
// d) Відфілтрувати числа які є більшими за 10.
//===============================================
//
// let numbFilMax = numbers.filter(value => {
//     return value > 10;
// });
// console.log(numbFilMax);
//
//===================================================================================
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//===================================================================================
//
// numbers.forEach((value) => {
//     document.write(`${value},`);
// });
//
//===================================================================
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//===================================================================
//
// let numbMap = numbers.map(value => value * 3);
// console.log(numbMap);
//
//==================================================================
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
//==================================================================
//
// let numbReduce = numbers.reduce((acc, currentValue) => {
//     return acc + currentValue;
// });
// console.log(numbReduce);

//**********************************************************************************************************************

// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
//=====================================================
//
// const strings = ['red', 'one', 'yellow', 'two', 'green', 'three', 'black', 'four', 'like', 'five', 'love', 'six',
//     'man', 'seven', 'woman', 'eight', 'dog', 'nine', 'cat', 'ten'];
//
// let strSor = strings.sort();
// console.log(strSor);
//
// //=====================================================
// // b) Відсортувати в зворотньому порядку
// //=====================================================
//
// let strRev = strings.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     }
//     return -1;
// });
// console.log(strRev);
//
// //=========================================================================================
// // c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// //=========================================================================================
//
// let strFil = strings.filter(value => value.length > 4);
// console.log(strFil);
//
// //===============================================================================
// // d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// //===============================================================================
//
// strings.forEach((value, index, array) => {
//     array[index] = `Sam says ${value}`;
// });
// console.log(strings);

//**********************************************************************************************************************

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
//============================================================================
//
// let userSort = users.sort((a, b) => a.age - b.age);
// console.log(userSort);
//
// let userSorRev = users.sort((a, b) => b.age - a.age);
// console.log(userSorRev);
//
//===========================================================================================
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//===========================================================================================
//
// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);
//
// users.sort((a, b) => b.name.length - a.name.length);
// console.log(users);
//
//=====================================================================================================================
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
//=====================================================================================================================
//
// let userId = users.map((value, index) => ({id: index + 1, ...value}));
// console.log(userId);
//
// //==========================================================
// // d) відсортувати його за індентифікатором
// //==========================================================
//
// userId.sort((a, b) => a.id - b.id);
// console.log(userId);
//
// //=================================================================================
// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// //=================================================================================
//
// let userRed = users.reduce((acc, currentValue) => {
//     if (currentValue.isMarried === true) {
//         currentValue.flat = true;
//         acc.push(currentValue);
//     }
//     return acc;
// }, []);
// console.log(userRed);

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// const cars = [
//     {producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400},
//     {producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250},
//     {producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300},
//     {producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140},
//     {producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200},
//     {producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165},
//     {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
//     {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
//     {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
//     {producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180},
//     {producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400},
//     {producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
//==========================================
//
// let car1 = cars.filter(value => value.volume >= 3);
// console.log(car1);
// //=====================
// // - двигун = 2л
// //=====================
// let car2 = cars.filter(value => value.volume === 2);
// console.log(car2);
// //=======================
// // - виробник мерс
// //=======================
// let car3 = cars.filter(value => value.producer === 'mercedes');
// console.log(car3);
// //===================================================
// // - двигун більше 3х літрів + виробник мерседес
// //===================================================
// let car4 = cars.filter(value => value.volume >= 3 && value.producer === 'mercedes');
// console.log(car4);
// //================================================
// // - двигун більше 3х літрів + виробник субару
// //================================================
// let car5 = cars.filter(value => value.volume >= 3 && value.producer === 'subaru');
// console.log(car5);
// //========================================
// // - сили більше ніж 300
// //========================================
// let car6 = cars.filter(value => value.power >= 300);
// console.log(car6);
// //===============================================
// // - сили більше ніж 300 + виробник субару
// //===============================================
// let car7 = cars.filter(value => value.power >= 300 && value.producer === 'subaru');
// console.log(car7);
// //=============================
// // - мотор серіі ej
// //=============================
// let car8 = cars.filter(value => value.engine.startsWith('ej'));
// console.log(car8);
// //===============================================================
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// //===============================================================
// let car9 = cars.filter(value =>
//     value.power >= 300 &&
//     value.producer === 'subaru' &&
//     value.engine.startsWith('ej'));
// console.log(car9);
// //==========================================================
// // - двигун меньше 3х літрів + виробник мерседес
// //==========================================================
// let car10 = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
// console.log(car10);
// //========================================================
// // - двигун більше 2л + сили більше 250
// //========================================================
// let car11 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(car11);
// //=====================================================
// // - сили більше 250  + виробник бмв
// //=====================================================
// let car12 = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(car12);

//**********************************************************************************************************************

// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// //==============================
// // -- Відсортувати їх по ID
// //================================
// let user1 = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(user1);
// //===================================================
// // -- Відсортувати їх по ID в зворотньому порядку
// //===================================================
// usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(usersWithAddress);
// //================================
// // -- Відсортувати по віку
// //================================
// usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(usersWithAddress);
// //===================================================
// // -- Відсортувати по віку в зворотньому порядку
// //===================================================
// usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(usersWithAddress);
// //===================================
// // -- Відсорутвати по імені
// //===================================
// usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     return -1;
// });
// console.log(usersWithAddress);
// //=====================================
// // -- Відсорутвати по назві вулиці
// //=====================================
// usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }
//     return -1;
// });
// console.log(usersWithAddress);
// //======================================
// // -- Відсорутвати по номеру будинку
// //======================================
// usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(usersWithAddress);
// //===============================================================
// // -- Залигити тільки тих, хто молодший ніж 30 (filter)
// //===============================================================
// let userMinThree = usersWithAddress.filter(value => value.age < 30);
// console.log(userMinThree);
// //======================================
// // -- Залишити тільки одружених
// //======================================
// let userTrue = usersWithAddress.filter(value => value.isMarried === true);
// console.log(userTrue);
// //======================================================
// // -- Залишити тільки одружених, які молодні за 30
// //======================================================
// let userMinThirty = usersWithAddress.filter(value => value.isMarried === true && value.age < 30);
// console.log(userMinThirty);
// //==========================================================
// // -- Залишити лише тих, в кого парні номери будинків.
// //==========================================================
// let userNumber = usersWithAddress.filter(value => value.address.number % 2 === 0);
// console.log(userNumber);
// //===========================================================
// // -- Порахувати загальний вік всіх людей. (reduce)
// //===========================================================
// let userAgeRed = usersWithAddress.reduce((acc, currentValue) => {
//    return acc + currentValue.age;
// }, 0);
// console.log(userAgeRed);
// //=================================================================================================
// // -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// //=================================================================================================
// let userChild = usersWithAddress.reduce((acc, currentValue) => {
//     if (currentValue.isMarried === true && currentValue.age >= 30) {
//         currentValue.child = true;
//         acc.push(currentValue);
//     }
//     return acc;
// }, []);
// console.log(userChild);

//**********************************************************************************************************************

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________

// // Створити обєкт автомобіля з полями:
// //     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// //     Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
// //     Створити не менше 7 та не більше 20 машинок.
// //     Для початку вкладіть всі наші створені автомобілі в масив cars.
// // ==========================================================================
// const cars = [
//     {model: 'bmw', power: 350, owner: {name: 'oleg', age: 32, driving: 10}, price: 35000, year: 2018},
//     {model: 'mercedes', power: 250, owner: {name: 'petro', age: 54, driving: 4}, price: 29000, year: 2015},
//     {model: 'ford', power: 150, owner: {name: 'taras', age: 41, driving: 17}, price: 9000, year: 2013},
//     {model: 'rang-rover', power: 300, owner: {name: 'slavic', age: 29, driving: 3}, price: 45000, year: 2017},
//     {model: 'lexus', power: 280, owner: {name: 'roma', age: 25, driving: 3}, price: 15000, year: 2009},
//     {model: 'tesla', power: 450, owner: {name: 'georg', age: 47, driving: 14}, price: 55000, year: 2020},
//     {model: 'porsche', power: 330, owner: {name: 'semen', age: 63, driving: 36}, price: 20000, year: 2011},
//     {model: 'fiat', power: 110, owner: {name: 'andriy', age: 24, driving: 2}, price: 11000, year: 2019}
// ];
// //==============================================================================================================================
// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// //==============================================================================================================================
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// //=====================================================================================
// let car1 = cars.map((value, index) => {
//     if (index % 2 === 0) {
//         value.power = value.power + (value.power * 0.10);
//         value.owner = {name: prompt('name'), age: prompt('age'), driving: prompt('driving')};
//     }
//     return value;
// });
// console.log(car1);
// //================================================================================================================================
// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// //================================================================================================================================
// for (let i = 0; i < cars.length; i = i + 2) {
//     cars[i].power = cars[i].power + (cars[i].power * 0.10);
//     cars[i].price = cars[i].price + (cars[i].price * 0.05);
// }
// console.log(cars);
// //=================================================================================================================================
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// //     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// //=================================================================================================================================
// cars.filter(value => {
//     if (value.owner.driving < 5 && value.owner.age > 25) {
//         value.owner.driving = value.owner.driving + 1;
//     }
// });
// console.log(cars);
// //==================================================================================================
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// //==================================================================================================
// let car3 = cars.reduce((acc, currentValue) => {
//     return acc + currentValue.price;
// }, 0);
// console.log(car3);

//===============================================================================================================================

// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//====================================================================

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14,];

const arrayIndex = (arr, key) => {
    for (let num of arr) {
    }
    return `Answer: MinIndex = ${arr.indexOf(key)}, MaxIndex = ${arr.lastIndexOf(key)}.`
};
let arrayIndex1 = arrayIndex(arr, 4);
console.log(arrayIndex1);