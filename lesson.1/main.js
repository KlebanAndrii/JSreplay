//1.- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write

// let str1 = 'hello,';
// console.log(str1);
// alert(str1);
// document.write(str1);

// let str2 = 'owu,';
// console.log(str2);
// alert(str2);
// document.write(str2);

// let str3 = 'com,';
// console.log(str3);
// alert(str3);
// document.write(str3);

// let str4 = 'ua,';
// console.log(str4);
// alert(str4);
// document.write(str4);

// let num1 = 1;
// console.log(num1);
// alert(num1);
// document.write(num1);

// let num2 = 10;
// console.log(num2);
// alert(num2);
// document.write(num2);

// let num3 = -999;
// console.log(num3);
// alert(num3);
// document.write(num3);

// let num4 = 123;
// console.log(num4);
// alert(num4);
// document.write(num4);

// let num5 = 3.14;
// console.log(num5);
// alert(num5);
// document.write(num5);

// let num6 = 2.7;
// console.log(num6);
// alert(num6);
// document.write(num6);

// let num7 = 16;
// console.log(num7);
// alert(num7);
// document.write(num7);

// let bul = true;
// console.log(bul);
// alert(bul);
// document.write(bul);

// let buli = false;
// console.log(buli);
// alert(buli);
// document.write(buli);
//************************************************************************************************************** */
//2.- Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//    Вивести кожну змінну за допомогою: console.log , alert, document.write

// str1 = 'olleh,';
// console.log(str1);
// alert(str1);
// document.write(str1);

// str2 = 'uwo,';
// console.log(str2);
// alert(str2);
// document.write(str2);

// str3 = 'moc,';
// console.log(str3);
// alert(str3);
// document.write(str3);

// str4 = 'au,';
// console.log(str4);
// alert(str4);
// document.write(str4);

// num1 = 61;
// console.log(num1);
// alert(num1);
// document.write(num1);

// num2 = 7.2;
// console.log(num2);
// alert(num2);
// document.write(num2);

// num3 =14.3;
// console.log(num3);
// alert(num3);
// document.write(num3);

// num4 = 321;
// console.log(num4);
// alert(num4);
// document.write(num4);

// num5 = -888;
// console.log(num5);
// alert(num5);
// document.write(num5);

// num6 = 20;
// console.log(num6);
// alert(num6);
// document.write(num6);

// num7 = 2;
// console.log(num7);
// alert(num7);
// document.write(num7);

// bul = false;
// console.log(bul);
// alert(bul);
// document.write(bul);

// buli = true;
// console.log(buli);
// alert(buli);
// document.write(buli);
//************************************************************************************************************************* */
//3.- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// const name = prompt('name');
// const surname = prompt('surname');
// const age = prompt('age');

// alert('"Вітаю' + ' ' + name + ' ' + surname + '. Тобі' + ' ' + age + ' ' + 'років".');

//*************************************************************************************************************************** */
//4.- Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).


// let nameSurnameAge = '"Вітаю' + ' ' + name + ' ' + surname + '. Тобі' + ' ' + age + ' ' + 'років".';

// console.log(nameSurnameAge);

//******************************************************************************************************************************** */
//5. - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

// const number1 = +prompt('number1');
// const number2 = +prompt('number2');
// const number3 = +prompt('number3');

// console.log(number1);
// console.log(number2);
// console.log(number3);

//********************************************************************************************************************************* */
//6.- За допомогою prompt() отримати 4 числа.
// Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

// const number1 = prompt('number1');
// const number2 = prompt('number2');
// const number3 = prompt('number3');
// const number4 = prompt('number4');

// const parse1 = parseInt(number1);
// const parse2 = parseInt(number2);
// const parse3 = parseInt(number3);
// const parse4 = parseInt(number4);

// const parse1234 = parse1 + parse2 + parse3 + parse4;
// console.log(parse1234);

//******************************************************************************************************************************* */
//7.- За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//    Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

// const number1 = prompt('numberFloat1');
// const number2 = prompt('numberFloat2');
// const number3 = prompt('numberFloat3');

// const parsF1 = parseFloat(number1);
// const parsF2 = parseFloat(number2);
// const parsF3 = parseFloat(number3);

// const result = parsF1 + parsF2 + parsF3;
// console.log(result);

//******************************************************************************************************************************* */
//8.- За допомогою prompt() отримати 3 числа з плаваючою точкою.
//    Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

// const number1 = prompt('numberRound1');
// const number2 = prompt('numberRound2');
// const number3 = prompt('numberRound3');

// const round1 = Math.round(number1);
// const round2 = Math.round(number2);
// const round3 = Math.round(number3);

// const sumanator = round1 + round2 + round3;
// console.log(sumanator);

//******************************************************************************************************************************** */
//9.- За допомогою prompt() отримати 2 цілих числа.
//  Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//  За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//  Example. Число 1 = 5. Число 2 = 2. Результат = 25

// const number1 = prompt('number of degrees');
// const number2 = prompt('power');

// const example = Math.pow(number1, number2);
// console.log(example);

//******************************************************************************************************************************** */
//10.- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

//****************************************************************************************************************************** */
//11.- Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//  В однакових виразаї не використовувати однакові оператори!!!

// console.log(5 < 6);                                                          //  5 ? 6 -> true
// console.log(5 > 6);                                                          //  5 ? 6 -> false
// console.log(5 === 6);                                                        //  5 ? 6 -> false
// console.log(5 == 6);                                                         //  5 ? 6 -> false
// console.log(10 <= 10);                                                       //  10 ? 10 -> true
// console.log(10 >= 10);                                                       //  10 ? 10 -> true
// console.log(10 != 10);                                                       //  10 ? 10 -> false
// console.log(10 !== 10);                                                      //  10 ? 10 -> false
// console.log(10 > 10);                                                        //  10 ? 10 -> false
// console.log(123 === '123');                                                  //  123 ? '123' -> false
// console.log(123 == '123');                                                   //  123 ? '123' -> true

//******************************************************************************************************************************** */
//12.Додатково:
//- Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.

// console.log(132 > 100 && 45 < 12 );        //(true and false) = false
// console.log(34 > 33 && 23 < 90 );          //(true and true) = true
// console.log(99 > 100 && 45 > 12 );         //(false and true) = false
// console.log(132 > 100 || 45 < 12 );        //(true or false) = true
// console.log(111 > 11 || 45 < 111 );        //(true or true) = true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );       //(true or true) and (true or false) = true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );        //(true or true) or (true or false) = true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );     //(true and false) and (true or false) = false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));        //(true or true) or (false and true) = true
// console.log(!!'-1');          //= (true)
// console.log(!!-1);            //= (true)
// console.log(!!'0');           //= (true)
// console.log(!!'null');        //= (true)
// console.log(!!'undefined');   //= (true)
// console.log(!!(3/'owu'));     //= (false)
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));    //(false or true) and (false and true) = false
// console.log((111 > 11 || 45 < 111) ||  !!'0');      //(true or true) or true = true

//***************************************************************************************************************************** */
//*********  РОБОТА В АУДІТОРІЇ********************** */
//1. Оголосіть змінні str, num, flag і txt зі значеннями «Привіт», 123, true, «true».
//   С помощью typeof Переконайся, что значення змінніх належати типам: string, number і boolean.

// const str = 'Привіт';
// const num = 123;
// const flag = true;
// const txt = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

//*************************************************************************************************************************** */
//2. Оголосіть змінні a1, a2, a3, a4, a5. За домігся 3х математичних оператцій получил числа:
//    34,
//    12,
//    66,
//    90,
//    87
//    Намагайтеся використовуват Різні оператори.
//    Example: 88 = (16/2) * 11

// const a1 = (62/2) + 3;
// const a2 = 8 + 16 / 4;
// const a3 = 30 * 3 - 24;
// const a4 = 3 * (10 + 20);
// const a5 = (26 * 3) + 9;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

//***************************************************************************************************************************** */
// 3. Створіть змінні a6, a7, a8, a9, a10. Запішіть в них результати виразів:
//     5% 3,
//     3% 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// const a6 = 5% 3;               // 2 - number
// const a7 = 3% 5;               // 3 - number
// const a8 = 5 + '3';            // 53 - string
// const a9 = '5' - 3;            // 2 - number
// const a10 = 75 + 'кг';         // 75кг - string

// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

//****************************************************************************************************************************** */
// 4. Напіщіть код, Який віраховує площу прямокутник висота 23см. (Змінна height) та шириною 10см (змінна width).
//    Значееня площади зберігаті в змінній s.

// const height = 23;
// const width = 10;

// const s = (height + width) * 2;
// console.log(s);

//***************************************************************************************************************************** */
// 5. Напиши код, який знаходить обсяг циліндра висотою 10м (змінна heightC) і діаметром підстави 4м (dC),
//     результат помістіть в змінну v.

// const heightC = 10;
// const dC = 4;

// const v = heightC * Math.PI * dC / 2;
// console.log(v);

//**************************************************************************************************************************** */
// 6. У прямокутного трикутника дві сторони n (зі значенням 3) і m (зі значенням 4).
//    Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
//     або оператор піднесення до степеня **).

// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));

// console.log(k);

//************************************************************************************************************************** */
//7. Напишіть скрипт, який виводить "Hello world", створивши змінну str і виводити з допомогою document.write, alert і console.log

// const str = 'Hello world';

// document.write(str);
// alert(str);
// console.log(str);

//**************************************************************************************************************************** */
//8. Вивести в вікно браузера за допомогою методу alert () такі дані: Ваше ПІБ, вік, хобі (кожної на нового рядка з допомогою \ n).

// alert(`Kleban Andrii Bogdanovich\n Age: 37\n Hobbi: billiards`);

//***************************************************************************************************************************** */
// 9. Створити 4 змінні з використанням ключового слова let з іменами str1, str2, str3, concatenation.
//   Змінної str1 привласнити фразу 'Хто', str2 - 'ти', str3 - 'такий?'
//   Локальної змінної concatenation привласнити результат конкатенації 3-х рядків: str1, str2, str3.
//   Вивести в документ вміст змінної concatenation задопомогою document.write

// let str1 = 'Хто';
// let str2 = 'ти';
// let str3 = 'такий?';

// let concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write(concatenation);

//******************************************************************************************************************************* */
// 10. Які значення виведе у вікно браузера наступний фрагмент коду? і чому?
//  let str = "20";
//   let a = 5;
//   document.write (str + a + "<br/>");  // "20"+5 = 205 - спрацює як суцільна стрінга
//   document.write (str - a + "<br/>");   // "20"-5 = 15 - спрацює як математичне значення
//   document.write (str * "2" + "<br/>");  // "20"*2 = 40 - спрацює як математичне значення
//   document.write (str / 2 + "<br/>");   // "20"/2 = 10 - спрацює як математичне значення

//****************************************************************************************************************************** */
// 11. Які значення виведе у вікно консолі наступний фрагмент коду якщо його помістити в console.log?
//     parseInt ( "3.14")
//     parseInt ( "- 7.875")
//     parseInt ( "435")
//     parseInt ( "Вася")

// console.log(parseInt ( "3.14"));        // - 3
// console.log(parseInt ( "- 7.875"));     // - NaN
// console.log(parseInt ( "435"));         // - 435
// console.log(parseInt ( "Вася"));        // - NaN

//**************************************************************************************************************************** */
// 12. За допомогою вікна введення, що викликається методом prompt, користувач може ввести дані,
// які будуть використовуватися далі, повторіть код нижче
//     let str = prompt ( "Enter something", "ho-ho")
//     console.log (str);

// let user = prompt('Your name', 'Andrii');
// console.log(user);

//*************************************************************************************************************************** */
//13. За допомогою вікна введення, що викликається методом prompt,
// зробити додавання двох чисел, а висновок результату за допомогою методу alert

// let pro1 = +prompt('number from 1-10');
// let pro2 = +prompt('number from 1-10');

// alert(pro1 + pro2);

//***************************************************************************************************************************** */
//14. За допомогою вікна введення, що викликається методом prompt, користувач послідовно виводить ім'я,
//      прізвище та вік, а вам не обходимо вивести рядок такого виду
//      Доброго вечора Іван Іванов, мої поздоровлення що вам 32, а висновок результату за допомогою методу alert

// let name = prompt('name', 'Andrii');
// let surname = prompt('surname', 'Kleban');
// let age = prompt('age', 37);

// alert(`Доброго вечора ${name} ${surname}, мої вітання що вам ${age}`);

//****************************************************************************************************************************** */
//***********Додатково*********** */
// 1. Три різніх числа вводяться через prompt ().
// За допомоги if else вівесті іх в порядку зростання. (Відсортуваті по зростанню)

// let numb1 = +prompt('number from 1-100');
// let numb2 = +prompt('number from 1-100');
// let numb3 = +prompt('number from 1-100');

// if (numb1 < numb2 && numb2 < numb3) {
//    console.log(numb1, numb2, numb3);
// } else if (numb1 < numb3 && numb3 < numb2) {
//    console.log(numb1, numb3, numb2);
// } else if (numb2 < numb1 && numb1 < numb3) {
//    console.log(numb2, numb1, numb3);
// } else if (numb2 < numb3 && numb3 < numb1) {
//    console.log(numb2, numb3, numb1);
// } else if (numb3 < numb2 && numb2 < numb1) {
//    console.log(numb3, numb2, numb1);
// } else if (numb3 < numb1 && numb1 < numb2) {
//    console.log(numb3, numb1, numb2);
// }

//******************************************************************************************************************************* */
// 2. Все параматри отримуємо з клавіатури !!!!
// Імітуємо поведінку пішохода на перекстке.
// Якщо світлофор зелений - вивести "йди".
// Якщо світлофор жовтий - вивести "почекай".
// Якщо світлофор червоний - вивести "стій".
// Якщо світлофор в аварійному режимі вивести "роби що хочеш"!

// let color = prompt('Світлофор');

// if (color === 'зелений') {
//    alert('йди');
// } else if (color === 'жовтий') {
//    alert('почекай');
// } else if (color === 'червоний') {
//    alert('стій');
// } else if (color === 'не працює') {
//    alert('роби що хочеш !');
// }

//******************************************************************************************************************************* */
// - 3. Всі параметри отримуємо з клавіатури !!!! (prompt, confirm)
// Створити змінну isRoadClear яка характеризує наявність на дорозі машин.
// Покращуємо попереднє завдання.
// Якщо світлофор зелений і машин немає - вивести "йди".
// Якщо світлофор зелений і машини є - вивести почекай поки порушники проїдуть ".
// Якщо світлофор жовтий і машини є - вивести "чекай".
// Якщо світлофор жовтий і машин немає - вивести "все рано чекай".
// Якщо світлофор червоний і машин ні-вивести "стій все рано".
// Якщо світлофор червоний - і машини є вивести "стій і чекай".
// Якщо світлофор в аварійному режимі вивести "роби що хочеш"!

let color = prompt('Світлофор');
let isRoadClear = confirm('Машина');

if (color === 'зелений' && isRoadClear === false) {
    alert('йди');
} else if (color === 'зелений' && isRoadClear === true) {
    alert('почекай поки порушники поїдуть');
} else if (color === 'жовтий' && isRoadClear === true) {
    alert('чекай');
} else if (color === 'жовтий' && isRoadClear === false) {
    alert('ще рано зачикай');
} else if (color === 'червоний' && isRoadClear === false) {
    alert('стій ще рано');
} else if (color === 'червоний' && isRoadClear === true) {
    alert('стій і чекай');
} else if (color === 'не працює') {
    alert('роби що хочеш !');
}
