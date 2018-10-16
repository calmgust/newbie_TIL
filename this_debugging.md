# this

#### What happens when the engine runs code?



* Global memory 생성

```javascript
var num = 2;

function pow(num){
    return num * num;
}
```

| variable name | value                    |
| ------------- | ------------------------ |
| num           | 2                        |
| pow           | function pow(num){ ... } |

***엔진이 하는 일은 (글로벌 영역에?)Global memory를 생성해서 위와 같은 테이블을 만드는 것 (장부를 기록하는 일 / 변수와 값을 저장한다)***



* Global execution context 생성

tip. execution => 실행

<u>(전역에 실행 맥락을 생성?)</u>



---

#### What happens if I call the function?



* Local Memory 생성
  * lexical scope에 의존
* Local execution  context 생성



---

#### Execution context

***=> 입력한 코드?***



* 어떤 함수가 호출되면, 실행 컨텍스트 execution context가 만들어진다.
  * call stack에 push,
  * 함수를 벗어나면 call stack에서 pop
* scope 별로 생성(*<u>function 단위</u>*)
* ***여기에 담긴 것(중요)***
  * scope 내 변수 및 함수(Local, Global)

    => Global은 전부 접근이 가능하기 때문에 적어줌

  * 전달 인자(arguments) (*<u>파라미터에 들어갈</u>*)

    => console창에 <u>arguments</u>

  * 호출된 근원(caller) (*<u>누가 호출 했는지</u>*)

    => console창에 <u>arguments.callee.caller</u>

  * ***this(중요)***





tip. 

call stack => 발자국??

*<u>크롬 개발자 도구에서 sources탭</u>에서 call stack에 담겨 있는 것 하나하나가 execution context이다.*

*또한 execution context 하나 하나가 **함수(function)**이다.*

*<u>함수(function)내에 코드</u> 하나 하나가execution context!!*



***execution context에 담겨있는 것***

*<u>크롬 개발자 도구에서 sources탭</u>에서 scope에 담겨 있는 것들*

=> scope chain, 변수 및 함수 목록, 그리고 this



***전역 영역을 대표하는 것 => <u>window</u>***





---

#### Demo: Get Started Debugging JavaScript with Chrome DevTools



https://googlechrome.github.io/devtools-samples/debug-js/get-started





### 디버깅(debugging)하는 법

디버깅으로 확인하고 싶은 경우 정의되어 있는 곳 다음 부분에 *브레이크 포인트(Break Point)*를 설정!!

tip. console.log();



---

#### 'this' keyword



* 모든 함수 scope 내에서 자동으로 설정되는 특수한 식별자
* execution context의 구성 요소 중 하나로, <u>함수가 실행되는 동안</u> 이용할 수 있다.



*** 함수가 실행되는 동안에만 이용할 수 있다!!**

*** this가 어떻게 결정되느냐는 *<u>누가, 어떻게 호출</u>하느냐가 중요!!***

*** => 함수(function) 실행 방법에 따라(중요)** => 구분 방법

 

---

#### 5 Patterns of Binding 'this'



<img width="1280" alt="2018-07-05 2 28 04" src="https://user-images.githubusercontent.com/40155174/46077923-79293400-c1cd-11e8-904f-aac75de70f62.png">



1. ***Global: <u>window</u>***
2. ***Function 호출: <u>window</u>***
3. ***Method 호출: <u>부모 object</u>***
4. ***Construction mode(new 연산자로 생성된 function 영역의 this): <u>새로 생성된 객체</u>***
5. ***.call or .apply 호출: call, apply의 <u>첫 번째 인자로 명시 된 객체</u>***



---

#### Global & function invocation(this는 window)



```javascript
var name = 'Global Variable';
console.log(this.name); // 'Global Variable'

function foo(){
    console.log(this.name); // 'Global Variable'
}

foo(); // function invocation

// 함수(function)내에 this는 window

```

```javascript
var name = 'Global Variable';

window.name === name; // true
```



```javascript
var name = 'Global Variable';
// 전역 변수로 window에 등륵 되었기 때문

function outer(){
    function inner(){
        console.log(this.name); // 'Global Variable'
    }
    
    inner(); // function invocation
}

outer(); // function invocation

// 이 함수(function)에서도 this는 window
```



**key.**

**어떻게 호출했느냐**

**this는 어떻게 불렸는지가 가장 중요**

inner에 있든지 outer에 있든지

local에 있든지 global에 있든지

상관없이 전부 window가 된다!!

*function invocation(괄호 열고 괄호 닫고)이기 때문*

<u>***Global Variable에서 선언 되었기 때문***</u>

<u>***=> if. function 내부에서 변수를 선언 할 경우 window가 아니다***</u>





***closure(중요)***

```javascript
var name= 'Global Variable';

function outer2(){
    var closure = function(){
        console.log(this.name); // 'Global Variable'
    }
    return closure;
    
}

outer2()();
```



---

#### Method invocation(this는 부모 object)



```javascript
var counter = {
    val: 0,
    increment: function(){
        this.val += 1; //this === counter
    }
};

counter.increment();
// counter 객체 내의 key값 increment의 value값 함수를 실행행
console.log(counter.val); // 1
counter['increment']();
console.log(counter.val); // 2

//increment는 매서드이다.
//객체에 딸려있기 때문

/*
console.log(counter.val);
console이라는 객체의 매서드 => log

increment는 counter라는 객체의 매서드
*/
```

**key.**

**매서드 호출일 경우**

**this는 부모 object가 되기 때문에**

**위의 예제에서 this는 counter가 된다.**



***??***

```javascript
var obj = {
    fn: function(a, b){
        return this; // => obj.fn
    }
};
var obj2 = {
    method: obj.fn//;(X)
};

console.log(obj2.method() === obj2); // true
console.log(obj.fn() === obj); // true
```

key.

this를 return하는 것

**부모만 보면 된다!!**



---

#### Construction mode(this는 새로 생성된 객체(ex붕어빵) => new keyword를 써주는 것)



```javascript
function F(v){
    this.val = v;
}

// create new instance of F
var f = new F('WooHoo!');

console.log(f.val); // WooHoo!
console.log(val); // REferenceError
```



* `F` => ***class***

* `f` => ***instance***



tip.

F는 붕어빵 틀이면 f는 붕어빵



ex.1

```javascript
function Car(name){
    this.name = name; //this.name은 파라미터 name과는 다른 것이다
}

var benz = new Car('benz');

benz.name // => 'benz'
// 즉 this는 새로 만든 instance(var benz)이다

var avante = new Car('avante');

avante.name // => 'avante'
// this는 새로 만든 instance(var avante)
```



ex.2

```javascript
function Human(age){
    this.age = age;
    debugger;
}

var hoyong = new Human(100);

var ingi = new Human(50);
```



* `Car` or `Human`은 ***class***

* `benz`, `avante`, `hoyong`, `ingi`는 ***instance***



tip.

**new** keyword를 썼을 때 해당

**new** keyword를 안 쓸 경우 => ***this === window***



---

#### .call or .apply invocation(<u>첫 번째 인자</u>로 명시된 객체)



```javascript
function identify(){
    return this.name.toUpperCase();
}

function speak(){
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = { name: 'Kyle' };
var you = { name: 'Reader' };

identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER

identify.call(me, you); // KYLE
identify.call(you, me); // READER
speak.call(me, you); // Hello, I'm KYLE
speak.call(you, me); // Hello. I'm READER
// 첫 번째 인자로 명시된 객체이기 때문에
```

tip. execution context

**맥락(context)을 달리하면서 함수를 재활용할 수 있기 때문에 사용**

**맥락(context)이 뭐냐에 따라서 하는 행동이 달라진다**



***<u>코드의 재활용이 용이</u>***

=> 특히 argument(인자)를 넘길 때 굉장히 유용



***첫 번째 인자가 this로 넘어간다(꼭 기억)***





* .call과 .apply의 차이

```javascript
var add = function (x, y){
    this.val = x + y;
}

// this는 obj

var obj = {
    val: 0
};

add.apply(obj, [2, 8]);
console.log(obj.val); // 10

add.call(obj, 2, 8);
console.log(obj.val); // 10
```

**.apply**

=> apply일 경우 <u>**배열(array)**</u> 그 자체를 넘겨서 파라미터에 할당



**.call**

=> call일 경우 <u>**인자(argument)**</u> 그 자체를 하나씩 넘겨서 파라미터에 할당



*** *debugger 해보자!!***

console.log(); 전 / 후?



---

<img width="695" alt="2018-09-27 21 43 06" src="https://user-images.githubusercontent.com/40155174/46146693-5dda2980-c29e-11e8-8d2e-6a8c0ee759d6.png">