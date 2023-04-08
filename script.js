// задание 1
let a = (10);
alert (a);
a = 20;
alert (a);

// задание 2 
let year = Number(2007) ;
alert (`года выпуска первого iPhone - ${year}`);

// задание 3
let nameJS = String (`Брендан Эйх`);
alert (`Создатель JavaScript - ${nameJS}`);

// задание 4
let b = Number (10);
let c = Number (2);
alert (` сложение ${b+c}\n вычитание ${b-c}\n умножение ${b*c}\n деление ${b/c}`);

// задание 5
let result = (2**5);
alert (result);

// задание 6
let d = (9);
let f = (2);
alert (d%f);

// задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//задание 8
let age = prompt (`Сколько вам лет?`);
alert (age);

// задание 9
const user = {
    name: `Mikhail`,
    age: 33,
    isAdmin: true,
};

//задание 9.1
user [`city of residence`] =`Rostov-on-don`;

//задание 9.2
user.age = 50;

//задание 9.3
delete user [`city of residence`];

//задание 9.4
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert (user[info]);

//задание 10
let userName = prompt (`Как тебя зовут?`);
alert (`Привет, ${userName}!`);



