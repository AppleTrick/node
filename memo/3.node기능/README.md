# REPL(Read) E(Evaluate) P(Print) L(Loop)

node 콘솔창이라고 생각하면됨

# module 시스템 만들기

노드에서는 모듈 시스템 ⇒ 코드를 잘게 잘게 부순다는 개념

`1_moduleSystem.js`

```jsx
const odd = "홀수입니다"
const add = "짝수입니다."

module.exports = {
    odd,
    add,
}
```

exports를 통해 odd와 , add 변수를 외부 파일에서 사용할 수 있다.

```jsx
module.exports = odd
```

도 가능하지만 다수의 변수나 함수를 외부 파일로 보내기 위해서 객체 형식을 사용

module exports는 파일에서 한번만 사용 가능

`2_moduleSystem1.js`

```jsx
// const value = require('./1_moduleSystem');
const {odd , even} = require('./1_moduleSystem'); // 구조분해 할당을 통해 보다 쉽게 변수에 값 넣기

function checkOddOrEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
```

구조분해 할당을 통해 odd와 even을 가지고 왔음

구조분해 할당을 할 때는 속성명과 변수명이 같아야 된다.

`3_moduleIndex`

```jsx
const { odd , even} = require('./1_moduleSystem');
const checkNumber = require('./2_moduleSystem1');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
```

모듈화를 통해 중첩된 코드를 분할 시켜 사용이 가능하다.

<aside>
💡 해당 내용을 노드의 모듈시스템이다. 자바스크립트 모듈 시스템은 따로 존재

</aside>

# Javascript의 모듈 시스템 export / import

```jsx
const odd1 = "짝수";
const even1 = "홀수"

export default {odd1, even1}
```

```jsx
import {odd1, even1 } from './4_javascriptMoudule.js';

console.log(odd1, even1);
```

require == import 

module.exports == export default

node에서 export, import 를 사용하려면 package.json 에서 type: “module” 을 설정 해줘야된다.

비슷하지만 동작은 다르다. 쨋든 다름

# Node의 내장 객체 global

module.exports 나 require() 은 어디에서 불러온걸까 ⇒ 노드의 내장객체 global에서 불러온다.

node에서는 global로 사용하지만 browser 에서는 window로 통한다.

즉 전역객체이다.

## console로 이것저것 해보기

```jsx
const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value',
        }
    }
};

console.time("전체시간");
console.log("평범한 로그 입니다. 쉼표로 구분해 여러값을 찍을 수 있습니다.");
console.log(string,number,boolean);
console.error('에러메세지는 console.error에 넣기');

console.table([{name : '제로' , birth : 10} , {name : 'zero  ' , birth : 8}]);

console.dir(obj , {colors : false, depth : 2});
console.dir(obj , {colors : true, depth : 1});

console.time('시간측정');
for (let i = 0; i < 100000; i++) {  }
console.timeEnd('시간측정');

function b(){
    console.trace('에러위치추적');
}

function a(){
    b();
}

a();

console.timeEnd('전체시간');
```

## 타이머 메소드

- setTimeout( 콜백 함수 , 밀리초) : 밀리초 뒤에 콜백함수 실행
- setInterval( 콜백 함수 , 밀리초) : 밀리 초마다 콜백함수 실행
- setImmediate( 콜백함수) : 콜백함수 즉시 실행

- clearTimeout(아이디) : setTimeout을 취소
- clearInterval(아이디) : setInterval 을 취소
- clearImmediate(아이디) : setImmediate 를 취소

```jsx
const timeout = setTimeout(() => {
    console.log("1.5 초 뒤에 실행");
}, 1500);

const interval = setInterval(() => {
    console.log('1초 마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log("실행되지 않습니다.");
},3000);

setTimeout(() => {
    clearTimeout(timeout);
    clearInterval(interval);
},2500);

const immediate = setImmediate(()=>{
    console.log("즉시 실행");
})

const immediate2 = setImmediate(() => {
    console.log("실행되지 않습니다.");
})

clearImmediate(immediate2);
```

타이머 함수를 취소시키려면 타이머 함수에 변수를 지정해야된다.

> 실무에서 타이머를 이렇게 지정할 일은 없지만 어떻게 돌아가는지는 알아두자
> 

# 노드로 파일 접근

노드로는 파일시스템에 접근할수 있다. ⇒ 보안에 접근할 수 있는 무시무시한 것

쨋든 조심하자.  노드가 파일시스템 측면에 보안이 조금 부족하다.

## __filename, __dirname

```jsx
console.log(__filename);    // 파일주소
console.log(__dirname);     // 디렉토리 주소
```

나중에 path 경로 쓸때 자주 사용함

# 노드에서의 this

```jsx
console.log(this); // global???
```

노드에서 this 를 하면 global 일까? 답은 x ⇒ { } 객체이다.

```jsx
console.log(this === module.exports);
console.log(this === exports);
```

노드에서 this는 module.exports를 가르킨다.

```jsx
function a(){
    console.log(this);
}

a();
```

함수안에서의 this는 global 전역객체를 가르킨다.

# 모듈개념 심화

```jsx
require('./test');
console.log(require);
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c83ec817-bf73-42d7-a0ad-3b42b7d2724c/Untitled.png)

- main : 어떤 파일을 실행했는지 알 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dcd291bf-e34f-46ae-8afa-d6430dd2cf52/Untitled.png)

- cache : require 을 통해 불러낸 파일을 메모리안에 저장함

만약 불러낸 파일안에서 다시 같은 파일을 불러내면 cache에서 저장된 내용을 불러온다. 즉 중복해서 읽는것을 방지한다. 하드디스크에서 메모리로 옮기는것을 캐싱

반복해서 불러올 필요가 없다.

## require의 특성

- require가 앞에 올라올 필요는 없음
- require.cache는 한번 실행된 모듈 캐시 정보가 들어있음
- require.main 은 실행시 첫 모듈을 가르킴

<aside>
💡 최신 자바스크립트 import는 가장 먼저 올라와야된다. 이건 알것!

</aside>

## 순환참조란

모듈 두 개가 서로를 반복해서 부를 경우 노드에서 순환참조하는 대상을 빈 객체로 처리한다.\

때문에 순환참조 에러가 발생하지 않는 구조로 잘 짜야된다.

# process

노드는 파일 시스템에 대해 접근 할 수 있다.

```jsx
console.log(process);
```

현재 프로세스의 정보에 대해 알수 있다.

## process.env 프로세스 환경변수