'use strict';

/*
function calcAge(birthYear){
    const age= 2037-birthYear;  // calcAge 함수내에서 사용가능한 변수

    function printAge(){
        let output = `${firstName}You are ${age}, born in ${birthYear}`;
        console.log(output);
        if(birthYear>=1990 && birthYear<=2002){
            var millenial =true;
            const firstName='Kim';
            const str= `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
            output='new output!';
        }
        // console.log(str);  // const는 블록범위이므로 불가능
        console.log(millenial); // var은 함수범위이므로 가능
        console.log(output);  // output
    }


    printAge();
    return age;
}

const firstName= 'Hyunwoo';  // 전역변수 -> 어디서든 사용가능
calcAge(2000);

// console.log(age);  age는 calcAge 함수내에서만 정의
// printAge(); printAge 함수는 calcAge 함수 내에서만 정의
 



// Variables Hoisting
console.log(me);
// console.log(job);  // const 변수는 hoising x
// console.log(year);  // let 변수는 hoising x


var me ='hw';
const job ='student';
let year=2022;


//Functions Hoisting

console.log(addDec(2,3));
// console.log(addExp(2,3));
// console.log(addArr(2,3));

function addDec(a,b){
    return a+b;
}

const addExp = function(a,b){ 
    return a+b;
}
const addArr = (a,b) =>a+b;
// 함수표현식이나 호살표함수는 const로 변수를 정의하기 때문에 hoising x
// 또한 const를 var로 바꾼다하더라도 var은 undefined로 정의되므로  undefined(2,3)-> error

console.log(numProducts);  //  undefined로 정의됨.
if(!numProducts) deleteShoppingCart();

var numProducts =10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}



console.log(this);

const calcAge =function(birthYear){
    console.log(2036-birthYear);
    console.log(this);  // undefined

}
calcAge(2000) ;

const calcArrow =birthYear=>{
    console.log(2036-birthYear);
    console.log(this);  // undefined

}
calcAge(2000) ;

var firstName = 'hyunwoo';  // 전역변수
const hw= {
    year:2000,
    firstName: 'Hyunwoo',
    calcAge:function(){
        console.log(this);
        console.log(2036-this.year); 
    //this 키워드는 항상 메서드를 호출하는 객체를 가리키고 있다.

    //solution1
    const self= this;
    const isMillenial =function(){
        console.log(self);
        console.log(self.year >=1981 && self.year<=1996);
    };

    //solution2
    // const isMillenial =() =>{
    //     console.log(this);
    //     console.log(this.year >=1981 && this.year<=1996);
    // };
    isMillenial();
    },

    greet : () => console.log(`Hey ${this.firstName}`),
    // 화살표 함수는  this 키워드 가져오지 x
    // 블록범위가 아닌  객체 리터럴이다.
    // 따라서 글로벌범위에 속하므로 자체 this 키워드가 없는경우 전역범위에서 this 키워드 사용

     
}
hw.calcAge();
hw.greet();

const sw= {
    year:2006,
};

sw.calcAge =hw.calcAge;
sw.calcAge();

*/

const me= {
    name: 'hw',
    age:23,
};


const friend =me;
 friend.age= 25;

 console.log(friend,me);
 // friends 뿐 아니라 me도 나이가 변경되었디.

// Primitive types
 let lastName= 'Williams';
 let oldLastName =lastName;

 lastName= 'Davis';
console.log(lastName, oldLastName);


// Reference types
const jessica = {
    firstName :'Jessica',
    lastName :' Williams',
    age:27,
}

const marriedJessica =jessica;

marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After married:', marriedJessica);

// Copying objects
const jessica2 ={
    firstName :'Jessica',
    lastName :' Williams',
    age:27,
    familiy: ['a','b'],
}

const jessicaCopy =Object.assign({},jessica2); // 새 객체가 힙에 생성(얕은 수준) 
jessicaCopy.lastName= 'Davis';
jessicaCopy.familiy.push('c');
jessicaCopy.familiy.push('d'); // 결혼하면서 가족 늘었음.

// 세부속성값을 바꿔도 원본(jessica2) 속성값 변경x
console.log('Before marriage:', jessica2);
console.log('After married:', jessicaCopy);
