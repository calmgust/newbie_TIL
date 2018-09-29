# var, let, const 차이점



ES5) **function scope**: `var`

ES6) **block scope**: `let`, `const`



---



## var

**var**: *function scope*이기 때문에 function 내부에서 변수(var)가 선언될 경우 function 외부에서 호출 시 ReferenceError가 발생한다.

(var를 선언 할 경우 function을 만들어서 호출해야만 하는 문제점 발생)



```javascript

for(var i = 0; i < 10; i++){
    console.log("i : ", i); // (O)
}
console.log("after loop i : ", i); // (O)
// hoisting

//-----

function count(){
    
    for(var j = 0; j < 10; j++){
        console.log("j : ", j);
    } // (O)
    
}
count();
console.log("after loop j : ", j); // (X)
// ReferenceError
// function scope이기 때문

```



**참고) IIFE(즉시실행함수)**

```javascript
// for문 안에서 변수 설정의 차이
(function(){
    for(var i = 0; i < 10; i++){
        console.log('i : ', i);
    }
})();
console.log("after loop i : ", i); // (X) 
// ReferenceError

//=====

(function(){
    for(i = 0; i < 10; i++){
        console.log('i : ', i);
    }
})();
console.log("after loop i : ", i); // (O)
// i가 hoisting이 되어서 전역변수

//-----

var i;
(function(){
    for(i = 0; i < 10; i++){
        console.log('i : ', i);
    }
})();
console.log("after loop i : ", i); // (O)
```



**참고)** <u>hoisting을 막아야 되는 경우</u>

### use strict

**use strict**를 사용!!

```javascript
(function(){
    
    'use strict'
    for(i = 0; i < 10; i++){
        console.log('i : ', i);
    }
    
})();

console.log('after loop i : ', i) // (X)
// ReferenceError
```



---



## let, const

es2015에서 `let`, `const`  추가



* `var`의 문제점

```javascript
// 이미 만들어진 변수이름으로 재선언을 해도 문제(X)
var a = 'test';
var a = 'test2';

// hoisting으로 인해 ReferenceError(X)
c = 'test';
var c;
```



**`let`, `const`의 공통점**

***=> 변수 재선언 불가능***



**`let`, `const`의 차이점**

***=> immutable의 여부***



* **`let`은 변수에 재할당이 가능**
* **`const`는 변수 재선언, 재할당 모두 불가능**



```javascript
// let
let a = 'test';

// Uncaught SyntaxError
let a = 'test2';

// 가능
a = 'test3';

//-----

// const
const b = 'test';

// Uncaught SyntaxError
const b = 'test2';

// Uncaught TypeError
b = 'test3';
```



`let`, `const`도 hoisting이 발생



**`var`가 *function  scope*로 hoisting**

**`let`, `const`는 *block scope*로 hoisting**



```javascript
c = 'test'; // ReferenceError
let c;
```

**ReferenceError가 발생한 이유**

<u>let은 값을 할당하기전에 변수가 선언 되어있어야 하는데 그렇지 않기 때문에 에러</u>



```javascript
// let은 선언하고 나중에 값을 할당이 가능
let dd
dd = 'test'

// const 선언과 동시에 값을 할당
const aa // Missing intializer in const declaration

```

`const`가 더욱 엄격하다

