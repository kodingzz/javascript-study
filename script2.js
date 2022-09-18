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

*/
const years = [2008, 2019, 2023, 2320, 3240];
years.push(2004);
console.log(years);