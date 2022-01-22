기본은 알고 가자 자바스크립트

# var, let , const 각각의 차이는 기본적으로 알고가자

- let : 변수선언
- var : 변수선언
- const : 변수선언이지만 수정 불가능 ⇒ 즉 상수 but 객체는 수정이 가능함

## let,const 이랑 var 의 차이는?

가장 큰 차이점은 블록 스코프의 차이이다.

var은 function에서의 {} 에서는 작용하지만, if for while 에서는 영향을 안미침

# 템플릿 문자열, 객체 리터럴

- 템플릿 문자열

문자열 작성에 있어서 편의성을 높여준다.

```jsx
let num = 10
let result = " 숫자는 " + num + " 입니다.";
// 숫자는 10 입니다.

let result1 = `숫자는 ${10} 입니다.`
// 숫자는 10 입니다.
```

- `` 빽틱으로 함수 호출기능도 있다.

최신문법에 추가되었다.

```jsx
function A(){}

A() // 일반적인 함수 호출
A`` // 태그드 템플릿 리터럴로 호출 가능
```

- 객체 리터럴

ES6 이전의 객체 리터럴

```jsx
var sayNode = function(){
    console.log("node");
}

var es = 'ES';
var oldObject = {
    sayJs : function(){
        console.log('JS');
    },
    sayNode : sayNode
}

oldObject[es + 6] = 'Fantastic';

oldObject.sayNode();    // node
oldObject.sayJs();      // JS
console.log(oldObject.ES6); // Fantastic
```

ES6 부터의 객체리터럴

- 객체 내부에 function() 을 사용하지 않고 메서드 정의 가능
- {sayNode : sayNode }  와 같은 내용 { sayNode } 로 축약가능
- [변수 + 값 ] 으로 동적 객체 생성 가능

```jsx
const sayNode = () =>{
    console.log("node");
}

const es = 'ES';
const newObject = {
    sayJs(){
        console.log("js");
    },
    sayNode,
    [es + 6] : 'Fantastic' // 객체 자체에 변수를 불러올 수 있음
}

newObject.sayNode();    // node
newObject.sayJs();      // JS
console.log(newObject.ES6); // Fantastic
```

# 화살표 함수

this 를 사용할때는 function을 사용할것 

this 가 아닐경우 화살표 함수 추천

# 비구조화할당 === 구조분해할당

```jsx
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
```

객체, 배열을 쉽게 변수선언 할 수 있게 하는법

주의사항 

<aside>
💡 this가 존재하는 경우 구조분해 할당을 하지 않는다

</aside>

# 클래스 == prototype

prototype 문법을 보다 쉽게 사용가능 

기존에 생성 , static , 인스턴스/prototype 문법을 하나의 클래스로 합쳐서 쉽게 사용 할 수 있다.

> 프로토타입 문법 정리하기
> 

# Promise , Async/await

## Promise가 뭔데?

내용은 실행됬지만 결과를 바로 반환하지 않는 객체를 의미한다.

```jsx
const condition = true;

const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve("성공");
    }else{
        reject("실패");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})
```

- resolve : 성공했을때 .then과 연결
- reject : 실패했을때 .catch와의 연결
- finally : 무조건 실행되는 부분

then과 catch를 통해 promise의 결과 값을 호출

## callback 이랑 뭐가 달라?

callback의 경우 코드의 결과를 즉각적으로 반환하지만 promise의 경우 코드를 분리하여 호출할 수 있음

## 중요한 Promise 함수들

- promise.all
    
    여러개의 프로미스를 동시에 실행할 수 있음
    
- promise.allSettled
    
    reject 시킨 실패한 부분만 출력 가능하다.
    

<aside>
💡 현 Node 생태계에 있어서 callback 함수보다 Promise를 더 많이 사용하는 추세 이다.

</aside>

## Async 발음

어싱크가 아니라 에이싱크이다.  Ajax를 아작스가 아니라 에이젝스라 하는것과 같은것, await은 어웨잇 그대로이다.

## Async / await 가 뭔데?

async/await은 Promise 문법을 보다 간단하게 사용하기 위해 나온것

await은 promise의 .then 역할을 한다.

## 그럼 실패한 reject는 어떻게 처리해?

reject를 사용하기 위해서는 try, catch를 사용해야된다.

## await 에서 사용되는 함수

for await ⇒ promise를 반복적으로 사용할 때 사용한다.

# 프론트엔드와 자바스크립트

## 데이터 통신하는데 사용하는것들

1. XMLHttpRequest ⇒ 오래되고 복잡해서 안씀
2. fetch ⇒ 코드가 조금 길다, 괜찮음
3. Axios ⇒ 간편함, node에서는 Axios 를 자주 씀

## Axios에 대해 간단히 알아보자

Axios에서 formData를 보낼땐 FormData를 사용한다.

## 한글인코딩 깨질때?

- encodeURIComponent() : 한글을 아스키 코드로 인코딩
- decodeURIComponent() : 아스키코드를 다시 한글로 바꿀때

URL : 서버의 파일 위치

URI : 서버 자원위치

## HTML 태그에서 데이터 처리하는 법

dataAttribute와 dataSet을 사용하면 된다.