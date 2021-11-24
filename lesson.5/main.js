// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
//==========================================================

class Computer {
    constructor(ram, power, name) {
        this.ram = ram;
        this.power = power;
        this.name = name;
    }

    inclusion() {
        console.log('Welcome Windows - pam - param');
    }
}

let com = new Computer(2, 400, 'lenovo');
com.inclusion();
console.log(com);


// ===****************************************************************************************************************************
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
//=============================================


class Laptop extends Computer {
    constructor(ram, power, name, diagonal) {
        super(ram, power, name);
        this.diagonal = diagonal;
        this.battery = Math.round(power / (diagonal * ram));
    }
}

let acer = new Laptop(4, 600, 'acer', 14);
acer.inclusion();
console.log(acer);

// ===****************************************************************************************************************************
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
//=============================================


class Ultrabook extends Laptop {
    constructor(ram, power, name, diagonal, weight) {
        super(ram, power, name, diagonal);
        this.weight = weight;
    }

    inclusion() {
        if (this.weight > 2 && this.battery < 4) {
            console.error('ERROR');
        } else {
            console.log('Welcome Windows - pam - param');
        }
    }
}

let asus = new Ultrabook(8, 900, 'asus', 17, 3);
asus.inclusion();
console.log(asus);


// ===****************************************************************************************************************************
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
//========================================================


class Comp extends Computer {
    constructor(ram, power, name) {
        super(ram, power, name);
        this.fps = power / ram;
    }

    games(game_name) {
        console.log(`You are playing ${game_name} with ${this.fps} FSP`);
    }

    upgradePower(appPower) {
        let result = ((appPower - this.power) / this.power) * 100;
        if (result > 10 || appPower < this.power) {
            this.power = this.power;
            console.error('cannot be enlarged POWER')
        } else {
            this.power = appPower;
            console.warn('app POWER');
        }
    }

    upgradeRam(appRam) {
        if (appRam / this.ram > 2 || appRam < this.ram) {
            this.ram = this.ram;
            console.error('cannot be enlarged RAM');
        } else {
            this.ram = appRam;
            console.warn('app RAM');
        }
    }
}

let dell = new Comp(4, 600, 'dell');
dell.games('tank');
console.log(dell);
dell.upgradePower(660);
dell.upgradeRam(6);
console.log(dell);

// ===****************************************************************************************************************************
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
//==================================================

class GameComp extends Comp {
    constructor(ram, power, name,) {
        super(ram, power, name);
        this.fps = dell.fps * 2;
        if (power < 500 && ram < 8) alert('games do not start on this bucket!')
    }

    games(game_name) {
        let game = this.power / 1000;
        this.power -= game;
    }

}

let game_comp = new GameComp(6, 500, 'impression');
console.log(game_comp);
game_comp.games('FIFA2020')
console.log(game_comp);

//
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//===================================================

function Car(model, producer, year, speed, power) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.power = power;
    this.driver = {};

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${speed} на годину`)
    }

    this.info = function () {
        document.write(`<h3>${model} - ${producer} - ${year} - ${speed} - ${power}</h3>`)
    }

    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > this.speed) this.speed = newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driverNew) {
        this.driver = driverNew;
    }
}

let car = new Car('Ford', 'USA', 2015, 220, 1.6);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(250);
console.log(car);
car.changeYear(2020);
console.log(car);
car.addDriver({name: 'Roma', age: 25});
console.log(car);

//**************************************************************************************************************************************
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//=============================================

class Cars {
    constructor(model, producer, year, speed, power) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.power = power;
        this.driver = {};
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }

    info() {
        document.write(`<h3>${this.model} - ${this.producer} - ${this.year} - ${this.speed} - ${this.power}</h3>`)
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > this.speed) this.speed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driverNew) {
        this.driver = driverNew;
    }

}

let cars = new Cars('Porsche', 'Italy', 2009, 320, 5.0);
console.log(cars);
cars.drive();
cars.info();
cars.increaseMaxSpeed(340);
console.log(cars);
cars.changeYear(2013);
console.log(cars);
cars.addDriver({name: 'Petro', age: 32});
console.log(cars);


//***************************************************************************************************************************************
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//=================================================

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

}

let cinderellas = [
    new Cinderella('Vira', 19, 35),
    new Cinderella('Olga', 27, 38),
    new Cinderella('Ira', 29, 39),
    new Cinderella('Veronika', 18, 36),
    new Cinderella('Lily', 24, 40),
    new Cinderella('Oksana', 30, 37),
    new Cinderella('Marina', 26, 38),
    new Cinderella('Elena', 22, 37),
    new Cinderella('Ivanka', 34, 41),
    new Cinderella('Christina', 25, 36)
];

class Prince {
    constructor(name, age, sizeShoes) {
        this.name = name;
        this.age = age;
        this.sizeShoes = sizeShoes;
    }
}

let prince = new Prince('Slavko', 42, 41);
console.log(prince);

for (let cinderella of cinderellas) {
    if (cinderella.size === prince.sizeShoes) console.log(cinderella);
}

//************************************************************************************************************************************
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов,
// та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//==================================================================

function Cinderellas2(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

let cinderellas2 = [
    new Cinderellas2('Vira', 19, 35),
    new Cinderellas2('Olga', 27, 38),
    new Cinderellas2('Ira', 29, 39),
    new Cinderellas2('Veronika', 18, 36),
    new Cinderellas2('Lily', 24, 40),
    new Cinderellas2('Oksana', 30, 37),
    new Cinderellas2('Marina', 26, 38),
    new Cinderellas2('Elena', 22, 37),
    new Cinderellas2('Ivanka', 34, 41),
    new Cinderellas2('Christina', 25, 36)
];

function Prince2(name, age, sizeShoes) {
    this.name = name;
    this.age = age;
    this.sizeShoes = sizeShoes;
}

let prince2 = new Prince2('Taras', 34, 35);
console.log(prince2);

function sizePriCin(prince, cinderellas) {
    for (let cinderella of cinderellas) {
        if (cinderella.size === prince.sizeShoes) {
            return cinderella;
        }
    }
}

let result = sizePriCin(prince2, cinderellas2);
console.log(result);

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let carObj = {
    model: 'BMW',
    producer: 'Germany',
    year: 2015,
    speed: 320,
    power: 3.0,
    driver: {},
    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    },
    info() {
        document.write(`<h5>${this.model} - ${this.producer} - ${this.year} - ${this.speed} - ${this.power}</h5>`)
    },
    increaseMaxSpeed(newSpeed) {
        if (newSpeed > this.speed) this.speed = newSpeed;
    },
    changeYear(newValue) {
        this.year = newValue;
    },
    addDriver(driverNew) {
        this.driver = driverNew;
    }
};

console.log(carObj);
carObj.drive();
carObj.info();
carObj.increaseMaxSpeed(350);
console.log(carObj);
carObj.changeYear(2018);
console.log(carObj);
carObj.addDriver({name: 'Semen', age: 47});
console.log(carObj);