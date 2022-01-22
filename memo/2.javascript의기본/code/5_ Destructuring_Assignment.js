// 구조분해 할당
// 객체의 구조분해 할당
// 객체는 키가 같아야된다/

const example = { a : 123 , b : {c :456, d : 789 } };
const A = example.a;
const B = example.b.c;
const C = example.b.d;

const {a , b : {c,d}} = example;
console.log(a);
console.log(c);
console.log(d);

// 배열도 구조분해 할당
// 배열은 자리가 같아야된다.

const arr = [1,2,3,4,5];
const X = arr[0]
const Y = arr[1]
const Z = arr[4]

const [x,y,,,z] = arr;
console.log(x);
console.log(y);
console.log(z);