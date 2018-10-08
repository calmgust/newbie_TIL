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
Programmers.prototype = new Person(); // 상속?


var p1 = new Programmer('egoing');
document.write(p1.introduce() + "</br>");
```

Programmer라는 생성자를 만들고

**이 생성자의 prototype과 Person의 객체를 연결**

Programmer 객체도 메소드 introduce를 사용 가능

***=> Programmer가 Person의 기능을 상속***

부모의 기능을 계속 발전할 수 있는 것이 상속





### 기능의 추가



