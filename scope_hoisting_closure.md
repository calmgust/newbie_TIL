## scope

변수의 접근 가능한 **유효범위**



#### Global Scope(전역 변수)



#### Local Scope(지역 변수)

* 함수 레벨(function-level)
* 블럭 레벨(block-level)



---

**ES5**

함수 레벨 스코프(var 사용)

```javascript
function foo(){
    if(true){
        var color = 'blue';
    }
    console.log(color); //blue
}
foo(); //함수 실행
```



**ES6**

블럭 레벨 스코프(let, const 사용)

```javascript
function foo(){
    if(true){
        let color = 'blue';
        console.log(color); //blue;
    }
    console.log(color); //ReferenceError: color is not defined
}
foo(); //함수 실행
```

---



EX) 지역 변수: 함수-수준 범위의 예제

```javascript
var name = "Richard";

function showName(){
    var name = "Jack";
    // showName() 함수에서만 접근 가능
    console.log(name); //=> Jack : 지역 변수
}

console.log(name); //=> Richard : 전역 변수
```



EX) 지역 변수: 블럭-수준 범위로 오해할 경우

```javascript
var name = "Richard";

// 아래의 if문은 name변수에 대한
// 지역-범위를 생성하지 않는다.

if(name){
    name = 'Jack';
    console.log(name); //Jack : 전역 변수
}

// name은 여전히 전역변수이며
// if문에서 변경
// function이 아니다!!

console.log(name); //Jack
```



***지역변수는 함수 내에서 전역변수보다 높은 우선순위***

```javascript
var name = 'Paul';

function user(){
    var name = 'Jack';
    console.log(name);
}

users(); // Jack
```



***함수의 외부에서 선언된 모든 변수는 전역 범위.***

***브라우저에서 window객체(전역 scope)를 가리킨다.***

```javascript
var name = 'Paul';

function users(){
    var name = 'Jack';
    console.log(name);
}

users(); // Jack
```



***모든 전역 변수는 window객체와 연결.***

```javascript
var name = 'Paul';

console.log(window.name); //Paul
```



*만약, <u>변수가 최초 선언 없이</u> 초기화 되었다면, 이 변수는 자동으로 전역 컨텍스트에 추가.*

```javascript
function showAge(){
    // age는 전역 변수.
    age = 90;
    console.log(age);
}

showAge(); //90
console.log(age); //90
```



Tip.

**가급적 전역 범위에 변수를 생성하는 것은 피할 것.**

<u>*=> 추적하기 어렵기 때문*</u>





---

---



## Hoisting (호이스팅)



#### Hoist

범위에 따라 선언과 할당으로 분리되는 것을 의미

자바스크립트 **<u>컴파일러</u>**가 내부적으로 변수 선언을 scope의 상단으로 끌러올려주는 것



***컴파일러***: 프로그램을 기계어로 **번역**하기 위한 소프트웨어



```javascript
function showName(){
    var name;
    // name 변수는 호이스트 됨.
    // 할당은 이후에 발생하기 때문에,
    // 이 시점에 name의 값은 undefined.
    
    console.log('First name : ' + name);
    // => First name : undefined
    
    name = 'Ford';
    // name에 값이 할당.
    
    console.log('Last name : ' + name);
    // => Last name : Ford
    
}
```



```javascript
a = 2;

var a; // 변수 a를 제일 위로 호이스트

console.log(a); // 2

//-----

console.log(a); // undefined
var a = 2;

//-----

var a; // Hoisting!!!
console.log(a); // undefined
a = 2;
```



***컴파일러는 두번 동작한다***



#### 함수 - 표현식

```javascript
show(); // TypeError

var show = function(){
    
    //...
    
    /*
    ex)
    var name = 'M';
    console.log(name);
    */
    
}
```



```javascript
var show;

show(); // TypeError (undefined 값 호출)

show = function(){
    
    //...
    
    /*
    ex)
    var name = 'M';
    console.log(name);
    */
}
```





---

---



## Closure (클로저)



---

**JavaScript에서 어려운 파트 3가지 :**

**closure / this / prototype**

---



**<u>외부함수의 변수에 접근 가능한 내부함수</u>,**

**조금 더 포괄적으로는 <u>함수 선언시 생성되는 유효범위</u>**



Tip.

<u>scope(스코프)</u>와  <u>garbage collector(가비지 콜렉터)</u>에 대한 이해 필요



**Garbage collector(가비지 콜렉터)란?**

자바스크립트는 프로그래머들이 일일이 메모리 할당을 하는 수고를 덜어주기 위해 값을 선언(ex. var a = 2)할 때 메모리를 자동적으로 할당한다.

이 때 할당된 메모리가 필요없어지면 할당을 해제하여야 하는데, 고급언어 인터프리터 중 하나인 자바스크립트는 가비지 콜렉터라는 소프트웨어를 가지고 있다. 가비지 콜렉터란 메모리 할당을 추적하고 할당 된 메모리가 더 이상 필요 없어졌을 때 해제하는 작업을 한다.



#### 클로저는 세 가지의 scope chain을 가진다



<img width="486" alt="2018-09-26 18 47 03" src="https://user-images.githubusercontent.com/40155174/46072163-a1f4fd80-c1bc-11e8-8247-e587a0ecfdbe.png">



1. 전역 변수에 대한 접근
2. 외부함수의 변수에 대한 접근
3. 클로저 자신에 대한 접근 (자신의 함수 블럭 안에 정의된 변수)



```javascript
var a = 1;
function outer(){
    var b = 2;
    function inner(){
        var c = 3;
        console.log(a); // 1 => 전역 변수에 대한 접근
        console.log(b); // 2 => 외부함수의 변수에 대한 접근
        console.log(c); // 3 => 클로저 자신에 대한 접근 (자신의 함수 블럭 안에 정의된 변수)
    }
    inner(); // return inner();
}
outer();
```





EX) 클로저의 예



***<u>???</u>***

```javascript
function foo(){
  var a = 2;
  function bar(){
    console.log(a);
  }
  return bar; //*****
}

var baz = foo();

baz(); //2


//-----


function foo(){
  var a = 2;
  function bar(){
    console.log(a);
  }
  return bar(); //*****
}

foo(); //2
```



***<u>???</u>***

```javascript
var global_var = 'Hello';
function showName(firstName){
  var nameIntro = 'Your name is ';
  function makeFullName(lastName){
    // 이 내부 함수는 외부함수의 변수뿐만 아니라
    // 파라미터까지 사용할 수 있다.
    return nameIntro + firstName + ' ' + lastName;
  }
  return makeFullName;
}

var innerfunc = showName('Michael');
innerfunc('Jackson'); //Your name is Michael Jackson
```



<img width="1038" alt="2018-07-10 5 17 52" src="https://user-images.githubusercontent.com/40155174/46071097-3f9afd80-c1ba-11e8-88db-f99edfd5c60e.png">



***<u>클로저</u>*는 함수가 선언되는 순간, *<u>스코프</u>* 밖의 외부변수를 참조하고 있다면, 함수가 실행 될 때를 대비해 외부변수를 참조할 수 있게 해주는 아주 배려깊은 친구.**

하지만 호의가 계속되면 권리인줄 알듯, 남발하면 위험하다.

가비지콜렉터에 정리 대상이 되어야 할 것 들이 메모리 상에 남아 있게 되므로, 남발 시 비효율적인 메모리 사용을 하기 때문이다.

