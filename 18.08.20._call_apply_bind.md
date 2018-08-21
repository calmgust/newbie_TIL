# call & apply & bind

#### Function prototype methods

* Function.prototype.call
  * function.call(**thisArg**, arg1, arg2, ...)

* Function.prototype.apply
  * function.apply(**thisArg**, [argsArray])



---

tip. ***mdn이나 기타 참조 문서에서 볼 줄 알아야 한다***

***arg*** => 인자(argument)

***[argsArray]*** => 배열 인자

---



* **prototype**

붕어빵의 틀이 있고 틀에서 찍어내는 것이 붕어빵

붕어빵의 틀을 prototype이다.

prototype => 원형 / 원본

***prototype에 기능이 있다. => 원본에 기능이 있다.***

*(자바스크립트는 prototype 기반의 언어이다.)*



cf) new keyword

(새로 생성된 instatnce)



참고만 (객체 지향 + prototype에 대한 설명)

```javascript
function Car(name){
    this.name = name;
}

Car.prototype.ride = function(){
    console.log('붕붕~' + this.name);
} // Car에 ride기능을 만들어준 것
// 원형에 기능을 추가
// 앞으로 new Car로 생성된 변수들은 ride라는 기능을 가지게 된다.

var benz = new Car('benz');

benz.ride(); // 붕붕~ benz
```

```javascript
Array // f Array(){ [native code] }
Object // f Object(){ [native code] }

var newArr = [1, 2, 3];


// 배열 만드는 법

var arr = []; // []

arr = new Array(); // []

arr = new Array(3); // [empty x 3]
```

```javascript
Array.prototype.hello = function(){
    console.log(this);
    console.log('world');
} // 앞으로 새로 만든 배열은 전부 hello라는 기능을 갖게 됨

arr = new Array(); // []

arr.hello(); // [] / world
```

---



**함수(function)을 실행하는 방법**

```javascript
function foo(){
    console.log('i am foo');
}

// 실행하는 방법 3가지
foo(); // i am foo

foo.call(); // i am foo

foo.apply(); // i am foo
```

*** *bind***는 실행하는 방법이 아니다

***.call과 .apply의 다른 점은 this를 뭘 넘겨주느냐가 다르다***



***복습**

```javascript
function identify(){
    return this.name.toUpperCase(); // 2. 첫 번째 인자 (call에서 넘어왔기 때문에)
}

function speak(){
    var greeting = "Hello, I'm " + identify.call(this); // 1. 첫 번째 인자
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

```javascript
var add = function (x, y){
    this.val = x + y;
}

// this는 obj

var obj = {
    val: 0
};

add.apply(obj, [2, 8]); // obj => 첫 번째 인자
console.log(obj.val); // 10

add.call(obj, 2, 8); // obj => 첫 번째 인자
console.log(obj.val); // 10
```



---

***중요**

```javascript
var obj = {
    string: 'origin',
    foo: function(){
    console.log(this.string);
  }
};

var obj2 = {
    string: 'what?'
};

obj.foo(); // origin
// Method invocation이기 때문에 this는 부모 object

obj.foo.call(obj2); // what?
// .call을 해줬기 때문에 첫 번째 인자(obj2)가 this
```



---



```javascript
function foo(){
    console.log(arguments); // arguments를 쓰는 이유
    debugger;
}

foo('hello', 'world', 100, 10, 10000);
// Arguments(5) ['hello', 'world', 100, 10, 10000]
```

*** *arguments를 쓰는 이유***

***=> arguments를 몇 개를 받을 지 알 수 없기 때문에***

```javascript
Math.max(3, 5, 100, 2, 300); // 300

var Math = {
    max: function(/* num1, num2, num3, num4, .... */){
        console.log(arguments);
        debugger;
    }
};
```

tip. 

*** arguments**는 유사 배열이다. **=> 배열이 아니다!!** (<u>배열 매서드를 쓸 수 없다</u>)

**(배열같이 생긴 object)**

forEach와 같은 배열 매서드를 사용할 수 없다!!



*** length**는 있기 때문에 <u>for문을 통해서 배열로 만들어 줄 수는 있다.</u>

```javascript
var Math = {
    max: function(){
        var arr = [];
        for(var i = 0; i < arguments.length; i++){
            arr.push(arguments[i]);
        }
        console.log(arr);
        debugger;
    }
}

Math.max(3, 5, 100, 2, 300);

//-----

var Math = {
    max: function(){
        var arr = Array.prototype.slice.call(arguments);
        console.log(arr);
        debugger;
    }
}

Math.max(3, 5, 100, 2, 300);
```

```javascript
function makeParamsToArray(){
    return Array.prototype.slice.call(arguments);
}

console.log(makeParamsToArray('code', 'states'));
//["code", "states"]
```



---

#### Using *.call* in action



```javascript
// same as Math.max([value1[, value2[, ...]]])
// Math.max(1, 2, 3, 4, 5) === 5

function getMax(){
    
    var argsArray = Array.prototype.slice.call(arguments);
    
    var maxValue = argsArray.reduce(function(accumulator, currentValue){
        return (accumulator > currentValue) ? accumulator : currentValue;
    });
    
    return maxValue;
    
}

console.log(getMax(4,5,2,7,3)); //7
```



---

#### Using *.call* to chain constructors for an object

**(.call을 상속과 같은 기능으로도 사용할 수 있다.)**



**난이도**

```javascript
function Product(name, price){
    this.name = name;
    this.price = price;
    this.print = function(){
        console.log(this.constructor.name + ': ' + this.name + '\t\t' + this.price + ' USD');
    }
}


// 위의 기능을 빌려오고 싶다
function Food(name, price){
    Product.call(this, name, price); // arguments == [name, price]
    this.category = 'food';

}


// 위의 기능을 빌려오고 싶다
function Toy(name, price){
    product.call(this, name, price);
    this.category = 'toy';
}


var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
var lego = new Toy('robot', 400);

cheese.print();
lego.print();
fun.print();


// "Food: feta  5 USD"
// "Toy: lego  400 USD"
// "Toy: robot  40 USD"
```



---

#### Using *.apply* in action



```javascript
Math.max(3, 5, 100, 2, 300); // 300

var arr = [8, 2, 5, 1, 200];
Math.max(arr); // NAN

Math.max.apply(null, arr); //200
// 이 경우 this는 중요하지 않다 null
// apply가 배열을 넘겨주는 것이 가능
```

```javascript
var min = Math.min(7, 35, 2, 8, 21);
console.log(min); // 2

var arr = [7, 35, 2, 8, 21];
var min2 = Math.min.apply(null, arr);
console.log(min2); // 2
```



---

#### Function prototype methods

* Function.prototype.bind
  * 인자로 넘겨준 객체와 연결(bind)된 새로운 함수를 반환
  * callback 함수를 특정 객체와 연결하고 싶을 때 사용



fn. bind(**thisArg**[, arg1[, arg2[, ...]]])



*call과 유사하다*

*다만, 실행하지 않는다.(this만 바인딩해준다)*



```javascript
function foo(){
    return this;
}

var boundFoo = foo.bind({a:1}); // 실행되지 않는다. / 	this가 bind된 함수만 return할 뿐
foo(); // Window
boundFoo(); // {a:1}
```

*그냥 foo()를 실행해줄 경우 window가 나오지만*

*bind된 boundfoo()를 실행해줄 경우 {a:1}이 나온다.*



---

**callback 함수를 특정 객체와 연결하고 싶을 때 사용(난이도)**



```javascript
// singleton pattern bind example

function box(w, h){
    return {
        width: w,
        height: h,
        getArea: function(){
            return this.width * this.height; //this는 return 될 object
        },
        printArea: function(){
            console.log(this.getArea());
        }
    }
}

var b = box(100, 20);
b.printArea(); // 2000


//-----
//setTimeout 적용 예

function box(w, h){
    return {
        width: w,
        height: h,
        getArea: function(){
            return this.width * this.height; //this는 return 될 object
        },
        printArea: function(){
            debugger;
            console.log(this.getArea());
        }
    }
}

var b = box(100, 20);
//b.printArea(); // 2000

setTimeout(b.printArea, 1000); // Error (this가 	window이기 때문에)

//문제를 해결하기 위해서
setTimeout(b.printArea.bind(b), 1000);
// b가 return된 object이기 때문에 => b가 this
```



**setTimeout**

```javascript
// window.setTimeout(function, milliseconds)
// 타이머가 만료된 뒤 function이 실행된다.

function foo(){
    console.log('i am foo');
}

setTimeout(foo, 3000); // 3초 뒤에 foo()

//-----

setTimeout(function(){
    console.log('i am groot')
}, 4000); // 4초 뒤에 function 실행
```



**난이도**

```javascript
// constructor pattern bind example

function Box(w, h){
    this.width = w;
    this.height = h;
    
    this.getArea = function(){
        return this.width * this.height;
    }
    
    this.printArea = function(){
        console.log(this.getArea());
    }
    
    this.printArea();
    setTimeout(this.printArea, 2000); //Error
    //setTimeout(this.printArea.bind(this), 2000);
}

var b = new Box(100, 50);
```



참고

```javascript
function template(name, money){
    return '<h1>' + name + '</h1><span>' + money + '</span>';
}

var tmplIngi = template.bind(null, 'Ingi Kim');
var tmplHoyong = template.bind(null, 'Hoyong Lee');

//실행
console.log(template('Johnny Koo', 30));

//console.log(tmplIngi(60));
//console.log(tmplIngi(70));

//console.log(tmplHoyong(100));
```



해보기

```javascript
function foo(){
    console.log('i am foo');
}

setTimeout(foo, 3000); // 3초 뒤에 실행
setTimeout(foo(), 3000); // 즉시 실행
// 둘의 차이
```

