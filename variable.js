'use strict';

// 1.변수
// let(add in es6)
let globalName = '뭐요 뭐';
{
let name = '태진';
console.log(globalName);
}
console.log(globalName);

//2.var 
// console.log(age);
// age= 4;
// console.log(age);
// var age;
// var hoisting = 어디선언했는지 관계없이 항상 제일 위로 선언끌어올림.
// var 는 블록스코프가 없다.

// 3.constant
// favor immutable data type always for a few reasons;
//- security
//- thread safety
//- reduce human mistakes
 const daysInWeek = 7;
 const maxNumber =5 ;

//Note!
// Immutalbe data types : primitive types, frozen objects(i.e, object.freeze())
// Mutable data types : all objects by deafault are mutable in JS
// favor immutable data type always for a few reasons;
//- security
//- thread safety
//- reduce human mistakes

//  4.variable types
//  primitve, single item:number, string, boolean , null, undefined,symbol
//  object, box container 
//  function , first-class function= 

// object real-life object , data structure
const taejin = {name:'taejin', age:27 };
taejin.age= 21; //  안에있는 변수들은 변경가능
taejin.name = '태진'; //  안에있는 변수들은 변경가능
console.log(taejin);

 const test = 1>3;
 console.log(test);
   
 
 // symbol, create unique indetifiers for objects
 const symbol2= Symbol('id');
 const symbol1 = Symbol('id');
 console.log(symbol1==symbol2);

 const gsymbol1= Symbol.for('id');
 const gsymbol2 = Symbol.for('id');
 console.log(gsymbol1==gsymbol2);
 console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


//  5.Dynamic typing :dynamically tpyed language

let text = 'hello';
console.log(`value: ${text}, type : ${typeof text}`);
 