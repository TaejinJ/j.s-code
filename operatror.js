
// 1.string concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals :

''''

1 + 2 = ${1 + 2}`);
console.log("teajin's book");
// \n \t etc

//3. increment and decrement operators
let counter = 2 ;
const princrement = ++counter;
// counter = counter+1;
// princrement = counter;
console.log(`princrement : ${princrement}, counter: ${counter}`);
// const postincrement = counter;
// counter = counter+1;

//4. Assignment operators
// let x = 3 ; 
// let t = 6;
// x += y ; 
// x -= y;
// x *= y;
// x /= y;

//5 .coparison operators
 //비교 하는거 


//6 . logical operators:  (||)or  (&&)and (!)not
const value1 =true;
const value2 = 4 < 2;

//|| (or) 처음으로 트루가나오면 바로멈춘다. 예를들어 밸류1이 트루면 출력안됨.
//심플한것들을 앞에두고 마지막에  함수로 호출하는 애들을 뒤에 배치 하기.
console.log(`or: ${value1 || value2|| check()}`);
function check(){
    for(let i =0; i < 10 ; i++){   
    //wasting time
    console.log('@,@');
}
return true;
}

//&& (and) finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
function check(){
    for(let i =0; i < 10 ; i++){   
    //wasting time
    console.log('@,@');
}
return true;
}

// ! (not)
console.log(!value1);


//7. Equallity
const stringfive = '5';
const numberFive = 5;

// == loose equality , with type conversion
console.log(stringfive==numberFive);
console.log(stringfive !== numberFive);

// === strict equality , with type conversion
console.log(stringfive === numberFive);
console.log(stringfive !== numberFive);

//object equality by reference
const taejin1 = {name : 'taejin'};
const taejin2 = {name : 'taejin'};
const taejin3 = taejin1;
console.log(taejin1 == taejin2);
console.log(taejin1 === taejin2);
console.log(taejin1 === taejin3);

//equality - puzzler
console.log(0 == false);
console.log(0 === false); // boolean tpye이 아니기때문에 true
console.log('' == false);
console.log('' === false); // boolean tpye이 아니기때문에 true
console.log(null == undefined);
console.log(null === undefined); //다른타입

//8. conditional operators : if
//if ,else if ,else
const name = 'taejin';
if(name === 'taejin'){
    console.log('welcome , taejin!');
    }
else if (name === 'coder'){
    console.log('you are good coder!');
    }
else{
    console.log('unknown');
}

//9. ternary operators : ?
// condition ? value1 : value2;
console.log(name === 'taejin' ? 'yes' : 'no');

//10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'firefox':
            console.log('perfect browser');
        break;
    default:
        console.log('small all!');
        break;        
}

//11. Loops 
// while loop , while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0){
    console.log(`while : ${i}`);
    i--;
}


//do while loop, body code is executed first,
// then check the condition,
do{
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

//for loop , for (begin; condition; step)
for(i = 3; i > 0 ; i--){
    console.log(`for : ${i}`);
}
for(let i =3; i > 0; i= i-2){
    //inline variable declaration
    console.log(`inline variable for : ${i}`);    
    }

// nested loops
// for (let i = 0 ; i < 10 ; i++){
//     for (let j = 0 ; j < 10 ; j++){
//         console.log(`i:${i}, j:${j}`);
//     }
// }

//break , continue
// Q1. iterate from 0 to 10 and  print only even numbers
//(use continue)

// for(let i = 0 ; i < 11 ; i++){
//     if(i % 2 ===0){
//         continue;
//     }
//     console.log(`i.${i}`);
// }
for(let i = 0 ; i < 11 ; i++){
    if(i % 2 ===0){
        console.log(`i.${i}`);
    }
    
}




//Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let i = 0 ; i <11; i++) {
    if(i > 8){
        break;
    
    }
    console.log(`i . ${i}`);
}