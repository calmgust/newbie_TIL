# 객체 지향(object-oriented programming, OOP)



객체지향 프로그래밍은 크고 견고한 프로그램을 만들기 위한 노력의 산물

현대적 프로그래밍 언어들을 지배하고 있는 가장 중요한 맥락

JavaScript의 객체지향은 다른 언어들의 객체지향과는 다르다

(모든 처리의 중심에 함수를 두는 JavaScript)





## 1. 객체지향 프로그래밍



### 객체지향 프로그래밍(object-oriented programming)



*프로그램을 구성하고 있는 로직*을 <u>***상태(state)***</u>와 <u>***행위(behave)***</u>로 이루어진 객체로 만드는 것

***=> 재활용성이 용이해진다!***





---



### 문법과 설계



객체지향 프로그래밍

* **문법**

  객체지향을 편하게 할 수 있도록 언어가 제공하는 기능을 익히는 것

  if, for문처럼 문법적인 구성을 가지고 있다.

* **설계**

  좋은 객체를 만드는 법 = 설계를 잘하는 법



#### <u>**추상화(abstract)**</u>

=> 복잡한 현실에서 추출해서 간단하게 **단순화**시키는 것



#### <u>부품화</u>

프로그래밍은 정신적 활동

정신적 활동에서는 오해나 모순같은 문제점이 발생

이러한 문제점을 극복하기 위한 노력 중의 하나가 **부품화**

객체지향과 부품화는 동일시 할 수 없지만 ***부품화라는 흐름이 객체지향을 만든다***



***은닉화 / 캡슐화***



***인터페이스 (표준화 / 연결점)***





---



## 2. 생성자와 new



### 객체(object)



***객체란 서로 연관된 변수와 함수를 그룹핑한 그릇***

객체 내의 변수를 프로퍼티(property) 함수를 **메소드(method)**



JavaScript의 계열에 속하는 이 언어들은 **prototype-based programming(프로토타입 기반 프로그래밍)**이라고 부른다.



객체지향 프로그래밍을 간단하게 요약하면

서로 연관되어 있는 변수 서로 연관되어 있는 메소드를 하나의 객체라고 하는 그릇에 담는 것

서로 연관되어 있지 않은 것들은 별도의 객체에 분리를 시켜 놓는 것이 기본적인 형태



* 객체지향의 목표

  => 좋은 부품의 로직을 만드는 것



### 객체생성



```javascript
var person = {}; // object
// 객체는 어떠한 데이터를 담을 수 있는 상자

person.name = 'egoing'; // name => property
person.introduce = function(){ // introduce => property (property에 함수가 담겨있다. => property에 담겨있는 함수를 메소드라 부른다.)
    return 'My name is ' + this.name; // this => person이라는 객체
}

console.log(person);
// {name: "egoing", introduce: ƒ}
console.log(person.introduce());
// "My name is egoing"


//-----


var person = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
document.write(person.introduce());
```



ex)

```javascript
var person1 = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}

var person2 = {
    'name' : 'leezche',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
```

위의 예제에서는 **중복**이 발생

중복이 있다는 것은

* 코드의 가독성이 떨어진다는 점
* 코드의 양이 많아진다는 점
* 유지보수가 어렵다는 점

단점들이 발생



중복을 제거하는 것

***=> 생성자 / new***





---



### 생성자



***<u>생성자(constructor)</u>는 객체를 만드는 역할을 하는 함수***

JavaScript에서 함수(function)는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있다.



```javascript
function Person(){} // undefined

var p0 = Person();

p0 // undefined

var p = new Person(); //*
// 함수 실행 시 앞에 new가 붙어있는 경우 함수라 하지 않고 생성자라고 한다!
// 객체의 생성자!
//var p = {}와 유사(똑같지는 않다!)

p // Person {} (비어있는 객체)
```

***=> 함수 실행 시 앞에 new가 붙어있는 경우 함수라 하지 않고 <u>생성자</u>라고 한다***

***=> 생성자(constructor)의 경우 <u>대문자</u>로 만들어 준다***



생성자는 어디에 소속되어 있지 않다 (=> 함수일뿐)

***함수(function)의 new를 붙이면 그 return 값은 객체(object)가 된다.***



```javascript
function Person(){}


var p1 = new Person();
p1.name = 'egoing';
p1.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p1.introduce()+"<br />");
 

var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p2.introduce());
```

개선된 것이 없다.

```javascript
function Person(name){
    this.name = name; // this는 새로 생성된 객체
    this.introduce = function(){ // this는 새로 생성된 객체
        return 'My name is '+this.name;
    }   
}


var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
 

var p2 = new Person('leezche');
document.write(p2.introduce());
```

생성자 내에서 이 객체의 프로퍼티를 정의하고 있다. 이러한 작업을 **(객체에 대한)초기화**라고 한다. 이를 통해서 **코드의 재사용성이 대폭 높아졌다.**



***생성자 함수는 일반함수와 구분하기 위해서 첫글자를 대문자로 표시한다.***





---



## 3. 전역객체



this를 이해하기 위해서 필요

**전역객체(Global object)**는 특수한 객체

***모든 객체는 이 전역객체의 프로퍼티***



```javascript
function func(){
    alert('Hello?');    
}
func(); // Hello?
window.func(); // Hello?
// window => 전역
// window => 객체 / .func() => 속성(메소드) -> 함수
```

=> `func()`라는 함수(function)는 window라는 객체의 메소드이다.

<u>JavaScript는 객체지향 언어이다.</u>



```javascript
var o = {'func':function(){
    alert('Hello?');
}}
o.func(); // Hello?
window.o.func(); // Hello?
// window => 전역
```

***JavaScript에서 모든 객체는 기본적으로 전역객체의 프로퍼티임을 알 수 있다.***



참고

호스트 환경에 따라 다르다



웹브라우저에서 전역객체 => **window**

node.js에서 전역객체 => **global** (웹브라우저에서 window의 역할)





---



## 4. this *



this는 ***함수(function)내에서 함수 호출 맥락(context)***을 의미 (JavaScript의 함수 내에서 사용되는 키워드이자 **일종의 변수** => 참고 arguments)

*맥락이라는 것은 상황에 따라 달라진다.* **(가변적)**

***함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는 뜻***

함수와 객체의 관계가 느슨한 JavaScript에서 this는 이 둘을 연결시켜주는 실질적인 연결점





### <u>함수호출 (function invocation)</u>



```javascript
function func(){
    if(window === this){
        document.write("window === this"); // console.log("window === this");
    }
}

func(); 

// window === this
```

***=> 함수를 호출(function invocation)했을 때 this는 전역객체인 window와 같다.***





### <u>메소드의 호출 (method invocation)</u>



```javascript
var o = {
    func : function(){
        if(o === this){
            document.write("o === this");
        }
    }
}

o.func(); 

// o === this
```

***=> 객체의 소속인 메소드의 this는 그 객체를 가리킨다.***

***=> 부모 객체***





### <u>생성자(new)의 호출</u>

아래 코드는 함수를 호출했을 때와 new를 이용해서 생성자를 호출했을 때의 차이를 보여준다.

```javascript
var funcThis = null; // global

function Func(){
    funcThis = this; // 변수선언이 없기 때문에 o1은 전역을 참조
}
var o1 = Func(); // function invocation => this는 window
if(funcThis === window){
    document.write('window </br>');
    // console.log('funcThis === window');
}

//-----

var o2 = new Func(); // new invocation => this는 새로 생성된 객체
if(funcThis === o2){
    document.write('o2 </br>');
    // console.log('funcThis === o2');
}
```

생성자는 빈 객체를 만든다. 그리고 이 객체내에서 this는 만들어진 객체를 가르킨다. 이것은 매우 중요한 사실이다. 생성자가 실행되기 전까지는 객체는 변수에도 할당될 수 없기 때문에 this가 아니면 객체에 대한 어떠한 작업을 할 수 없기 때문이다. 





### <u>apply / call</u>



#### 객체로서 함수 (함수도 객체다)

참고) ***함수 리터럴(function literal)***

```javascript
function sum(x, y){return x + y;}; // 함수 리터럴
// sum이라는 함수 객체

sum(1, 2) // 3

//-----

var sum2 = new Function('x', 'y', 'return x + y;');

sum2(1, 2) // 3

// 이렇게 작성하는 것이 불편하기 때문에 함수 리터럴을 이용하여 작성!!
```



- ***함수 리터럴(function literal)***

  `function sum(x, y){return x + y;};`



- ***객체 리터럴(object literal)***

  `var obj = {}`;



- ***배열 리터럴(array literal)***

  `var arr = [];`



#### 리터럴(literal)

*편리하게 어떤 값을 만들 수 있도록 해주는 문법적인 체계*





### apply와 this



함수의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있다. 

```javascript
var o = {}
var p = {}

function func(){
    switch(this){ // function invocation => this는 window
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}

func(); // window
func.apply(o); // o (apply는 첫 번째 인자로 지정한 o가 this가 된다.)
func.apply(p); // p (apply는 첫 번째 인자로 지정한 p가 this가 된다.)
```

***=> 함수를 어떻게 호출하느냐에 따라 결과가 달라진다(JavaScript는 유연하다.)***





참고) ***switch_case***

```javascript
switch(조건){
        
    case a:
        console.log(1);
        break;
        
    case b:
        console.log(2);
        break;
        
    case c:
        console.log(3);
        break;

}
```

***=> switch의 괄호 안의 조건과 부합하는 case가 실행된다. case가 실행되고 break를 만나면 switch문은 종료한다.***



* if문 과 switch문 대체제 관계

* for문과 while문 대체제 관계





----



## 5. 상속 (inheritance)



### 상속이란?



**객체**는 연관된 로직들로 이루어진 작은 프로그램

**상속**은 <u>객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능</u>을 의미

***단순히 물려받는 것이 아니라 기존의 로직을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있게 해준다.***



```javascript
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
// My name is egoing


//-----


function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
// My name is egoing
```

결과는 같지만 상속을 위한 기본적인 준비





### 상속의 사용방법



```javascript
function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return "My name is " + this.name;
}


function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person(); // 상속?


var p1 = new Programmer('egoing');
document.write(p1.introduce() + "</br>");
```

Programmer라는 생성자를 만들고

**이 생성자의 prototype과 Person의 객체를 연결**

Programmer 객체도 메소드 introduce를 사용 가능

***=> Programmer가 Person의 기능을 상속***

부모의 기능을 계속 발전할 수 있는 것이 상속





### 기능의 추가



```javascript
function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is ' + this. name;
}


function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}


var p1 = new Programmer('egoing');
document.write(p1.introduce()+"</br>");
document.write(p1.coding()+"</br>");
```

Person은 introduce의 기능을 가지고 있다.

*Programmer는 Person으로부터 introduce의 기능을 상속받았다.*

*Programmer는 Person이 가지지 못한 coding이라는 기능을 가지고 있다.*

***Programmer는 Person의 기능을 가지고 있으면서 Person이 가지고 있지 않은 기능인 메소드 coding을 가지고 있다.*** 



tip.

```javascript
function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is ' + this. name;
}


function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}


function Designer(name){
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function(){
    return "beautiful!";
}


var p1 = new Programmer('egoing');
document.write(p1.introduce()+"</br>");
document.write(p1.coding()+"</br>");


var p2 = new Designer('leezche');
document.write(p2.introduce()+"</br>");
document.write(p2.design()+"</br>");
```



tip.

상속을 하는 코드를 변경하면 상속을 받는 코드도 전부 변경된다.





---



## 6. prototype



상속의 연장



### prototype이란?



***prototype => 객체의 원형***

***함수(function) => 객체(object)***

그렇기 때문에 생성자로 사용될 함수도 객체

객체는 프로퍼티(property)를 가질 수 있다

prototype === property

***prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결된다. => 상속***



```javascript
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 

var o = new Sub();
console.log(o.ultraProp); // true
```

***=> 이러한 개념을 prototype chain이라고 부른다***

상속을 받기 위해서 생성자 사용?





### prototype chain



```javascript
function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 

var o = new Sub();
o.ultraProp = 1;
console.log(o.ultraProp); // 1


//-----


function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2;
 

var o = new Sub();
console.log(o.ultraProp); // 2


//-----


function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
var s = new Super();
s.ultraProp = 3;
Sub.prototype = s;

var o = new Sub();
console.log(o.ultraProp); // 3


//-----


function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
var t = new Ultra();
t.ultraProp = 4;
Super.prototype = t;
 
function Sub(){}
var s = new Super();
Sub.prototype = s;

var o = new Sub();
console.log(o.ultraProp); // 4


//-----


function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
var t = new Ultra();
Super.prototype = t;
 
function Sub(){}
var s = new Super();
Sub.prototype = s;

var o = new Sub();
console.log(o.ultraProp); // true
```

생성자 Sub를 통해서 만들어진 객체 o가 Ultra의 프로퍼티 ultraProp에 접근 가능한 것은 prototype 체인으로 Sub와 Ultra가 연결되어 있기 때문이다. 내부적으로는 아래와 같은 일이 일어난다.

1. *객체 o에서 ultraProp를 찾는다.*
2. *없다면 Sub.prototype.ultraProp를 찾는다.*
3. *없다면 Super.prototype.ultraProp를 찾는다.*
4. *없다면 Ultra.prototype.ultraProp를 찾는다.*

prototype는 객체와 객체를 연결하는 체인의 역할을 하는 것이다. 이러한 관계를 **prototype chain**이라고 한다.





----



## 7. 표준 내장 객체의 확장



### 표준 내장 객체란?



표준 내장 객체(Standard **Built-in** Object)

=> JavaScript가 기본적으로 가지고 있는 객체들



* Object
* Function
* Array
* String
* Boolean
* Number
* Math
* Date
* RegExp (정규표현식)



***표준 내장 객체 <=> 사용자 정의 객체***





### 배열의 확장



배열의 확장(1)

아래 코드는 배열에서 특정한 값을 랜덤하게 추출하는 코드

```javascript
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');

function getRandomValueFromArray(arr){
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}

console.log(getRandomValueFromArray(arr));
```



배열의 확장(2)

```javascript
/*
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');

function getRandomValueFromArray(arr){
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}

console.log(getRandomValueFromArray(arr));
*/


//-----


Array.prototype.random = function(){ // random이라는 메소드가 배열과 관련되어 있다는 것이 이해하기 쉬움 (가독성 증가)
    
    var index = Math.floor(this.length * Math.random()); // this는 새로 생성된 배열 객체
    return this[index];
    
}

var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');

console.log(arr.random());
```

***=> api를 사용자가 직접 정의할 수 있다는 장점***





---



## 8. Object



### Object란?



Object 객체는 객체의 가장 기본적인 형태를 가지고 있는 객체

***=> 아무것도 상속받지 않는 순수한 객체***

JavaScript에서 값을 저장하는 기본적인 단위로 Object를 사용

```javascript
var grades = {egoing: 10, k8805: 6, sorialgi: 80}
```

동시에 JavaScript의 모든 객체는 Object 객체를 상속받는데, 그런 이유로 **모든 객체는 Object 객체의 프로퍼티(property)를 가지고 있다.**



참고)

***prototype chain에서 Ultra는 Object 객체를 상속 받는다!!***





### Object API 사용법*



<u>***prototype이 있고 없고의 차이에 집중***</u>



* prototype (X)

  ex) `Object.keys(arr)`

  ***prototype이 없는 것은 인자로 어떠한 값을 받아서 처리***

  `Object.keys(어떠한 인자)` => `Object.keys = function(){}`*

  **=> 여기서 Object는 생성자 함수이다.**



* prototype (O)

  ex) `Object.prototype.toString()`

  ***prototype이 있는 것은 어떠한 객체를 만든다.***

  `객체를 담고 있는 식별자.toString` =>`Object.prototype.toString = function(){}`*

  `a.toString()`

  **=> 여기서 Object는 `new Object();`이다.**



```javascript
// Object.keys()

var arr = ['a', 'b', 'c'];
console.log('Object.keys(arr)', Object.keys(arr));

// Object.keys = function(){}
// Object => 생성자 함수


//-----


// Object.prototype.toString()

var o = new Object();
console.log('o.toString()', o.toString());

var a = new Array(1,2,3);
console.log('a.toString()', a.toString());

// Object.prototype.toString = function(){}
// Object => new Object();
```

***중요)***

***=> prototype의 유무로 사용하는 방법이 다르다!!***





### Object 확장



Object 객체를 확장하면 모든 객체가 접근할 수 있는 API를 만들 수 있다.



```javascript
Object.prototype.contain = function(needle){ // 객체나 배열 안에 찾고자 하는 것이 있는 경우 true / 없는 경우 false
    
    for(var name in this){ // this(메소드 안에 this) => 메소드가 소속되어 있는 객체를 의(부모 object) 
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}


var o = {name: 'egoing', city: 'seoul'};
console.log(o.contain('egoing'));

var a = ['egoing', 'leezche', 'grapittie'];
console.log(a.contain('leezche'));
```





### Object 확장의 *<u>위험</u>*



***Object 객체는 확장하지 않는 것이 바람직***

***=> 모든 객체에 영향을 주기 때문***



```javascript
Object.prototype.contain = function(needle){ // 객체나 배열 안에 찾고자 하는 것이 있는 경우 true / 없는 경우 false
    
    for(var name in this){ // this(메소드 안에 this) => 메소드가 소속되어 있는 객체를 의(부모 object) 
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}


var o = {name: 'egoing', city: 'seoul'};

var a = ['egoing', 'leezche', 'grapittie'];


//-----


for(var name in o){
    console.log(name);
}
// name, city, contain
// prototype에 추가한 메소드인 contain이 포함되어 있다.

for(var name in a){
    console.log(name);
}
// 0, 1, 2, contain
// prototype에 추가한 메소드인 contain이 포함되어 있다.

// Object 확장의 위험 => 모든 객체에 영향을 준다.


//-----


// 문제의 해결 => hasOwnProperty()
for(var name in o){
    if(o.hasOwnProperty(name)){
        console.log(name);
    }
}
// name, city
// contain이 제거된다.

for(var name in a){
    if(a.hasOwnProperty(name)){
        console.log(name);
    }
}
// 0, 1, 2
// contain이 제거된다.
```

***문제의 해결***

***=> hasOwnProperty()***

자신의 프로퍼티(property)를 가지고 있느냐라는 것을 체크





---



## 9. 데이터 타입



### 원시데이터 타입과 객체



<u>***데이터 타입 = 데이터 형태***</u>

데이터 타입은 크게 2가지로 구분



* 객체

* 객체가 아닌 것 **(=> 원시 데이터 타입(primitive type))**

  * ***숫자 (number)***
  * ***문자열 (string)***
  * ***불리언(true / false)***
  * ***null***
  * ***undefined***



객체가 아닌 데이터 타입을 ***원시 데이터 타입(primitive type)***이라고 한다.

***그 외의 모든 데이터 타입은 객체***



<u>***원시(기본) 데이터 타입 VS 객체(참조) 데이터 타입***</u>





### 레퍼객체







