//************************************************************************************************************************** */
// *--створити масив з:
// *- з 5 числових значень
// *- з 5 стічкових значень
// *- з 5 значень стрічкового, числового та булевого типу
// *- та вивести його в консоль

// let numberSet = [3, 21, 6, 76, 294];
// let stringSet = ['hello', 'boy', 'girl', 'sandwiche', 'tea'];
// let numStrBulSet = [54, 'green', false, 'love', true, 78, 829, 'white'];

// console.log(numberSet);
// console.log(stringSet);
// console.log(numStrBulSet);

//**************************************************************************************************************************** */
//*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let emptyArray = [];

// emptyArray[0] = 'zebra';
// emptyArray[1] = 75;
// emptyArray[2] = 'hippo';
// emptyArray[3] = true;
// emptyArray[4] = 'squirrel';
// emptyArray[5] = false;

// console.log(emptyArray);

//******************************************************************************************************************************* */
//*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//    document.write('<div>My children cat eats fish</div>');
// }

//******************************************************************************************************************************* */
//*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//    document.write('<div>My children cat eats fish</div>', i);
// }

//******************************************************************************************************************************* */
//*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//    document.write('<h1>I eat red apples</h1>');
//    i++
// }

//******************************************************************************************************************************* */
//*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//    document.write('<h1>I eat red apples</h1>', i);
//    i++
// }

//****************************************************************************************************************************** */
//*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let number = [34, 65, 8, 745, 9, 22, 945, 32, 64, 78];

// for (let i = 0; i < number.length; i++) {
//    console.log(number[i]);
// }

//******************************************************************************************************************************* */
//*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let string = ['red', 'white', 'black', 'green', 'grey', 'orange', 'pink', 'purple', 'yellow', 'browne'];

// for (let i = 0; i < string.length; i++) {
//    console.log(string[i]);
// }

//******************************************************************************************************************************* */
//*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let anyone = [56, 'hat', true, 'shirt', false, 734, 98, 'skirt'];

// for (let i = 0; i < anyone.length; i++) {
//    console.log(anyone[i]);
// }

//****************************************************************************************************************************** */
//*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrayTen = [35, true, 'they', 537, false, 'elephant', 698, true, false, 74];

// for (let i = 0; i < arrayTen.length; i++) {
//    if (typeof arrayTen[i] === "boolean") {
//       console.log(arrayTen[i]);
//    }
// }

//****************************************************************************************************************************** */
//*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrayNum = [35, true, 'they', 537, false, 'elephant', 698, true, false, 74];

// for (let i = 0; i < arrayNum.length; i++) {
//    if (typeof arrayNum[i] === 'number') {
//       console.log(arrayNum[i]);
//    }
// }

//******************************************************************************************************************************* */
//*- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrayStr = [35, true, 'they', 537, false, 'elephant', 698, true, false, 74];

// for (let i = 0; i < arrayStr.length; i++) {
//    if (typeof arrayStr[i] === 'string') {
//       console.log(arrayStr[i]);
//    }
// }

//******************************************************************************************************************************* */
//*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//*  Вивести в консоль всі його елементи в циклі.

// let arrayEmpty = [];

// arrayEmpty[0] = 'man';
// arrayEmpty[1] = 'woman';
// arrayEmpty[2] = 68;
// arrayEmpty[3] = true;
// arrayEmpty[4] = 948;
// arrayEmpty[5] ='boy';
// arrayEmpty[6] = 54;
// arrayEmpty[7] = false;
// arrayEmpty[8] = true;
// arrayEmpty[9] = 'girl';

// for (let i = 0; i < arrayEmpty.length; i++) {
//    console.log(arrayEmpty[i]);
// }

//******************************************************************************************************************************* */
//*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//    console.log(i);
//    document.write(i + ',');
// }

//********************************************************************************************************************************* */
//*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//    console.log(i);
//    document.write(i + ',');
// }

//********************************************************************************************************************************* */
//*- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i = i + 2) {
//    console.log(i);
//    document.write(i + ',');
// }

//******************************************************************************************************************************* */
//*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//    if (i % 2 === 0) {
//       console.log(i);
//       document.write(i + ',');
//    }
// }

//****************************************************************************************************************************** */
//*- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//    if (i % 2 === 1) {
//       console.log(i);
//       document.write(i + ',');
//    }
// }

//******************************************************************************************************************************** */
//************************** РОБОТА В АУДИТОРІЇ****************************** */

//*- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array1 = ['a', 'b', 'c'];

// for (let i = 1; i <= 3; i++) {
//    array1.push(i);
// }

// console.log(array1);

//******************************************************************************************************************************** */
//*- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let array2 = [1, 2, 3];

// array2.reverse();
// console.log(array2);

//******************************************************************************************************************************* */
//*- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let array3 = [1, 2, 3];

// array3.push(4, 5, 6);
// console.log(array3);

//******************************************************************************************************************************** */
//*- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array4 = [1, 2, 3];

// array4.unshift(4, 5, 6);
// console.log(array4);

//******************************************************************************************************************************** */
//*- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let array5 = ['js', 'css', 'jq'];

// let opa = array5.shift();
// console.log(opa);

//***************************************************************************************************************************** */
//*- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let array6 = ['js', 'css', 'jq'];

// let pa = array6.pop();
// console.log(pa);

//***************************************************************************************************************************** */
//*- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let array7 = [1, 2, 3, 4, 5];

// array7.shift();
// array7.shift();
// array7.shift();
// console.log(array7);

//***************************************************************************************************************************** */
//*- Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]

// let array8 = [1, 2, 3, 4, 5];

// array8.pop();
// array8.pop();
// array8.pop();
// console.log(array8);

//*************************************************************************************************************************** */
//*- Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let array9 = [1, 2, 3, 4, 5];

// array9.splice(3, 0, 'a', 'b', 'c');
// console.log(array9);

//************************************************************************************************************************** */
//*- Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let array10 = [1, 2, 3, 4, 5];

// let one = array10.shift();
// array10.unshift('a', 'b');
// array10.unshift(one);
// let two = array10.pop();
// array10.push('c');
// array10.push(two);
// array10.push('e');

// console.log(array10);

//************************************************************************************************************************* */
//*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let numberGuys = [54, 678, 11, 86, 77, 26, 55, 782, 691, 53];

// for (const item of numberGuys) {
//    if (item % 2 === 0) {
//       console.log(item);
//    }
// }

//************************************************************************************************************************ */
//*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// * За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let numberGuys1 = [26, 55, 782, 691, 53, 54, 678, 11, 86, 77];
// let guysNumber = [];

// for (let i = 0; i < numberGuys1.length; i++){
//    guysNumber.push(numberGuys1[i]);
// }
// console.log(guysNumber);

//*********************************************************************************************************************** */
//*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//*  За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let numberGuys1 = [26, 55, 782, 691, 53, 54, 678, 11, 86, 77];
// let guysNumber = [];

// for (let i = 0; i < numberGuys1.length; i++) {
//    guysNumber[i] = numberGuys1[i];
// }

// console.log(guysNumber);

//*********************************************************************************************************************** */
// *-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// *   1. перебрати його циклом while

// let array11 = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;

// while (i < array11.length) {
//  console.log(array11[i]);
//    i++
// }

//********************************************************************************************************************** */
//*-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//*   2. перебрати його циклом for

// let array11 = [2,17,13,6,22,31,45,66,100,-18];

// for (let i = 0; i < array11.length; i++) {
//    console.log(array11[i]);
// }

//********************************************************************************************************************** */
//*-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//*  3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let array12 = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;
// while (i < array12.length) {
//    if (i % 2 === 1) {
//       console.log(array12[i]);
//    }
//    i++
// }

//******************************************************************************************************************** */
//*-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//* 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let array13 = [2,17,13,6,22,31,45,66,100,-18];

// for (let i = 0; i < array13.length; i++) {
//    if (i % 2 === 1) {
//       console.log(array13[i]);
//    }
// }

//****************************************************************************************************************** */
//*-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//*  5. перебрати циклом while та вивести  числа тільки парні  значення

// let array14 = [2,17,13,6,22,31,45,66,100,-18];

// let i = 0;
// while (i < array14.length) {
//    if (array14[i] % 2 === 0) {
//       console.log(array14[i]);
//    }
//    i++
// }

//**************************************************************************************************************** */
//*-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//*  6. перебрати циклом for та вивести  числа тільки парні  значення

// let array15 = [2,17,13,6,22,31,45,66,100,-18];

// for (let i = 0; i < array15.length; i++) {
//    if (array15[i] % 2 === 0) {
//       console.log(array15[i]);
//    }
// }

//*************************************************************************************************************** */
//*-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//* 7. замінити кожне число кратне 3 на слово "okten"

// let array16 = [2,17,13,6,22,31,45,66,100,-18];

// for (let i = 0; i < array16.length; i++) {
//    if (array16[i] % 3 === 0) {
//       array16[i] = 'okten';
//    }
//    console.log(array16[i]);
// }

//*************************************************************************************************************** */
//*-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//* 8. вивести масив в зворотньому порядку.

// let array17 = [2,17,13,6,22,31,45,66,100,-18];

// array17.reverse();
// console.log(array17);

//*************************************************************************************************************** */
//  *9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//1. перебрати його циклом while
//2. перебрати його циклом for
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//5. перебрати циклом while та вивести  числа тільки парні  значення
//6. перебрати циклом for та вивести  числа тільки парні  значення
//7. замінити кожне число кратне 3 на слово "okten"



//let array18 = [2,17,13,6,22,31,45,66,100,-18];

//*1. перебрати його циклом while
// let i = array18.length -1;
// while (i >= 0) {
//    console.log(array18[i]);
//    --i
// }

//*2. перебрати його циклом for
// for (let i = array18.length -1; i >= 0; --i) {
//    console.log(array18[i]);
// }

//*3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = array18.length -1;
// while (i >= 0) {
//    if (i % 2 === 1) {
//       console.log(array18[i]);
//    }
//    --i
// }

//*4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = array18.length; i >= 0; --i) {
//    if (i % 2 === 1) {
//       console.log(array18[i]);
//    }
// }

//*5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = array18.length -1;
// while (i >= 0) {
//    if (array18[i] % 2 === 0) {
//       console.log(array18[i]);
//    }
//    --i
// }

//*6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = array18.length -1; i >= 0; --i) {
//    if (array18[i] % 2 === 0) {
//       console.log(array18[i]);
//    }
// }

//*7. замінити кожне число кратне 3 на слово "okten"
// for (let i = array18.length -1; i >= 0; --i) {
//    if (array18[i] % 3 === 0) {
//       array18[i] = 'okten';
//    }
//    console.log(array18[i]);
// }

//********************************************************************************************************* */
//*1.  створити пустий масив та :
//* a.- заповнити його 50 парними числами за допомоги циклу.

//let emptiness = [];

// for (let i = 0; i <= 50; i++) {
// emptiness[i] = i * 2;
// }
// console.log(emptiness);

//* b.- заповнити його 50 непарними числами за допомоги циклу.

// for (let i = 0; i <= 50; i++) {
//    emptiness[i] = i * 2 + 1;
// }
// console.log(emptiness);

//* c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//    emptiness[i] = Math.random();
// }
// console.log(emptiness);

//* d. Заповнити масив 20ма рандомними чисалами в діапазоні
//* від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//    emptiness[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }
// console.log(emptiness);

//*2. Вивести за допомогою console.log кожен третій елемен

// let emptiness = [];

// for (let i = 0; i < 20; i++) {
//    emptiness[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }
// for (let i = 2; i < emptiness.length; i+= 3) {
//    console.log(emptiness[i]);
// }

//*  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let emptiness = [];

// for (let i = 0; i < 20; i++) {
//    emptiness[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }
// for (let i = 2; i < emptiness.length; i+= 3) {
//    if (emptiness[i] % 2 === 0) {
//       console.log(emptiness[i]);
//       }
// }

//* 4. Вивести за допомогою console.log кожен третій елемен тільки якщо
//* цей елемент є парним та записати їх в новий масив

// let emptiness = [];
// let pipec = [];

// for (let i = 0; i < 20; i++) {
//    emptiness[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }
// for (let i = 2; i < emptiness.length; i+= 3) {
//    if (emptiness[i] % 2 === 0) {
//       pipec.push(emptiness[i]);
//   }
// }
// console.log(pipec);

//******************************************************************************************************** */
//*  5. Вивести кожен елемент масиву, сусід справа якого є парним
//*  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let numRight = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

// for (let i = 0; i < numRight.length; i++) {
//    if (numRight[i + 1] % 2 === 0) {
//       console.log(numRight[i]);
//    }
// }

//******************************************************************************************************* */
//* 6. Є масив з числами [100,250,50,168,120,345,188],
//*  Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let calculator = [100,250,50,168,120,345,188];

// let check = 0;
// for (const item of calculator) {
//    check += item;
// }

// console.log(check / calculator.length);

//******************************************************************************************************* */
//*   7. Створити масив з рандомними значеннями,
//* помножити всі його елементи на 5 та перемістити їх в інший масив.

// let emptiness = [];
// let pipec = [];

// for (let i = 0; i < 20; i++) {
//    emptiness[i] = Math.floor(Math.random() * (732 - 8) + 8);
// }

// for (let i = 0; i < emptiness.length; i++) {
//    pipec[i] = emptiness[i] * 5;
// }

// console.log(pipec);

//******************************************************************************************************* */
//* 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
//*    пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let valuesAny = ['he', 856, 'she', true, 54, 632, 'they', false, 93, 'her'];
// let valuesNum = [];

// for (let i = 0; i < valuesAny.length; i++) {
//    if (typeof valuesAny[i] === "number") {
//       valuesNum.push(valuesAny[i]);
//    }
// }

// console.log(valuesNum);

//****************************************************************************************************** */
//*  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let latters = [ 'a', 'b', 'c'];
// let word = '';

// for (let i = 0; i < latters.length; i++) {
//    word = word + latters[i];
// }
// console.log(word);

//*  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let latters = [ 'a', 'b', 'c'];
// let word = '';

// let i = 0;
// while (i < latters.length) {
//     word = word + latters[i];
//    i++
// }
// console.log(word);

//*  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let latters = [ 'a', 'b', 'c'];
// let word = '';

// for (const item of latters) {
//    word = word + item;
// }
// console.log(word);

//*  - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.

let latters = [ 'a', 'b', 'c'];
let word = '';

for (const item in latters) {
    word = word + latters[item];
}
console.log(word);