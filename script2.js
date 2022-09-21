'use strict';
/*
let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive~');

const interface = 'audio';



function fruitProcessor(apples, orranges) {
    console.log(apples, orranges);
    const juice = `Juice with ${apples} apples and ${orranges} oraanges`;
    return juice;
}

const fruitJuice = fruitProcessor(5, 1);
console.log(fruitJuice);

console.log(fruitProcessor(2, 3));


// Function Declaration
function calcAge(birthYeah) {
    return 2037 - birthYeah;
}
const age = calcAge(2000);

// Function Expression -> 값을 생성한다.
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(2000);

console.log(age, age2);


// arrow function
const calcAge3 = birthYeah => 2037 - birthYeah; // 한줄에 정리
// 매개변수 => 괄호안의 값
const age3 = calcAge3(2000);
console.log(age3);

const yearRetirement = (birthYeah, firstName) => {
    const age4 = 2037 - birthYeah;
    const retirement = 65 - age4;
    return `${firstName} can work ${retirement} years more`;

}
console.log(yearRetirement(2000, 'Kim'));
console.log(yearRetirement(2006, 'Choi'));
console.log(yearRetirement(2003, 'Lee'));



const fruitPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {

    const applePieces = fruitPieces(apples);
    const orangePices = fruitPieces(oranges);
    // return `Juice with ${apples} apples and ${oranges} oranges`;
    return `Juice with ${applePieces} pieces of apple and ${orangePices} pieces of orange`;


}
console.log(fruitProcessor(2, 5));


const yearRetirement = function (birthYeah, firstName) {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    if (retirement > 0) {

        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} was alreday retired`);
        return -1;
    }
}

console.log(yearRetirement(1970, 'Kim'));
console.log(yearRetirement(1998, 'Choi'));


const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphins = calAverage(85, 54, 41);
let avgKoalas = calAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else if (avgKoalas * 2 <= avgDolphins) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else {
        return console.log('no team wins!');
    }

}
checkWinner(avgDolphins, avgKoalas);


avgDolphins = calAverage(44, 23, 71);
avgKoalas = calAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);



const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [2008, 2019, 2023, 2320, 3240];

console.log(calcAge(years)); // 단일 값이 나와야하는 부분에 배열이 들어가서 NaN

const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(age);


const years = [2008, 2019, 2023, 2320, 3240];
years.push(2004);
console.log(years);



//Fundamentals2 coding challenge 2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(tips);
console.log(total);


const hw = {
    firstName: 'Hyunwoo',
    lastName: 'Kim',
    age: 2022 - 2000,
    birthYeah: 2000,
    job: 'student',
    friends: ['choi', 'kang', 'lee'],
    hasDriversLicense: true,
    calcAge: function () {
        return 2037 - this.birthYeah;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `;

    }
};

// console.log(hw.age);
// console.log(hw['age']);

//const interestedIn = prompt('What do you want to know about hw? Choose between firstName, lastName, age, job, and friends.');

//console.log(hw[interestedIn]);

hw.location = 'Yongin';
console.log(hw);

console.log(`${hw.lastName} has ${hw.friends.length} friends, and his best friend is called ${hw.friends[0]}`);

console.log(hw.calcAge());

console.log(hw.getSummary());


// part 2 coding challenge 3

const Mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function () {
        return this.weight / this.height ** 2;
    }

}

const John = {
    fullName: 'John Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function () {
        return this.weight / this.height ** 2;
    }

}
if (Mark.calcBMI() > John.calcBMI()) {
    console.log(`${Mark.fullName}'s BMI(${Mark.calcBMI()}) is higher than ${John.fullName}'s(${John.calcBMI()}))`);

}
else {
    console.log(`${John.fullName}'s BMI(${John.calcBMI()}) is higher than ${Mark.fullName}'s(${Mark.calcBMI()}))`);
}

for (let rep = 1; rep <= 10; rep += 1) {
    console.log(`${rep} wins!🏆`);
}


const years = [1991, 2004, 1934, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(2037 - years[i]);
}

console.log(age);


for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${exercise}😲`);
    for (let i = 1; i < 6; i++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${i}`);
    }
}
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < 10; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}
console.log(bills, tips, total);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 4]));
console.log(calcAverage(total));
console.log(calcAverage(bills));



