/*
let js = 'amazing';
if (js === 'amazing') alert('javascript is fun!');

console.log(23 + 43);

let firstName = "Matilda";
console.log(firstName);

let PI = 3.1415;
let $function = 25;

let country = "South korea";
let continent = "Asia";
let population = 5;

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

console.log(typeof PI);
console.log(typeof continent);

javascriptIsFun = 'yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);


let hw = 'hyunwoo';

hw = 'kim hyun woo';
console.log(hw);

const ar = 'aron';
ar = 'kim aron';  // const로 선언된변수는 변경 불가능
console.log(ar);

const now = 2022;
const agehw = now - 2000;
const agear = now - 2006;

console.log(agehw, agear);
console.log(agehw + 2, agear * 3);

const firstName = 'Kim';
const lastName = 'hyunwoo';
console.log(firstName + ' ' + lastName);

console.log(now - 2000, now - 2006);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);



const firstName = 'Jonas';
const year = 2022;
const birthyear = 2000;
const job = 'teacher';
const jonasNew = `I'm ${firstName}, a ${year - birthyear} year olds ${job}`;
console.log(jonasNew);

const age = 15;
const oldenough = age >= 18;

if (oldenough) {
    console.log('You can start driving license👨');
}
else {
    const yearLeft = 18 - age;
    console.log(`You is too young. Wait another ${yearLeft} years`);
}
const birthyear = 2000;
let century;
if (birthyear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
}
else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})`);
}

const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(inputYear + 16);
console.log(Number(inputYear) + 16);
console.log(`I am 23 years old`);
console.log('23' - '10' - 3);

const age = '19';

if (age === 19) console.log('you can just became an adult!'); // 삼항
if (age == 19) console.log('you can just became an adult!');

const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);  // favorite은 string

if (favorite === 23) {  // 이중 등호 연산자이므로 유형강제변환
    console.log('cool! 23');
}

const hasDriverLicense = true; // 면허증
const hasGoodVision = true; //시력
if (hasDriverLicense && hasGoodVision) {
    console.log('You should drive!');
}
else {
    console.log('Someone else should drive!');
}

//const avgDolphins = (96 + 108 + 89) / 3;
//const avgKoalas = (88 + 91 + 110) / 3;
// console.log(avgDolphins, avgKoalas);
// if (avgDolphins > avgKoalas) {
//     console.log('winner is Dolphins~');
// }
// else if (avgDolphins < avgKoalas) {
//     console.log('winner is Koalas~');
// }
// else if (avgDolphins === avgKoalas) {
//     console.log('Both is winner~');
// }

// Bonus 1
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;
// console.log(avgDolphins, avgKoalas);

// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//     console.log('winner is Dolphins~');
// }
// else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
//     console.log('winner is Koalas~');
// }
// else if (avgDolphins === avgKoalas) {
//     console.log('Both is winner~');
// }

//Bonus 2
const avgDolphins = (97 + 112 + 81) / 3;
const avgKoalas = (109 + 95 + 86) / 3;
console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log('winner is Dolphins~');
}
else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log('winner is Koalas~');
}
else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log('Both is winner~');
}
else {
    console.log('No one wins the trophy');
}
*/

const day = "fri";

// switch (day) {
//     case 'monday':
//         console.log('plan~');
//     case 'tuesday':
//         console.log('start');
//     case 'wednesday':
//         console.log('practice');
//     case 'thursday':
//     case 'friday':
//         console.log('finish');
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy');

// }

if (day === 'monday') {
    console.log('plan~');
}
else if (day === 'tuesday') {
    console.log('start');
}
else if (day === 'wednesday') {
    console.log('practice');
}
else if (day === 'thursday' || day === 'friday') {
    console.log('finish');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy');
}
else {
    console.log('not a valid day');
}

const age = 18;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink watwr');

const drink = age >= 18 ? 'wine🍷' : 'water🥛';
console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water🥛'}`);




const billValues = 275;
const tip = billValues >= 50 && billValues <= 300 ? billValues * 0.15 : billValues * 0.2;
console.log(`The bill was ${billValues}, the tip was ${tip}, and the total value ${billValues + tip} `);
