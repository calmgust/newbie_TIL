# 함수지향 (functional programing)



JavaScript의 핵심적인 도구는 함수(function)



## 1. 유효범위 (scope)



변수의 수명을 의미



```javascript
var vscope = 'global';

function fscope(){
    alert(vscope);
}

fscope(); // "global"


//-----


var vscope = 'global';

function fscope(){
    var vscope = 'local';
    alert(vscope);
}

fscope(); // "local"
```



* 전역변수(global)
* 지역변수(local)



```javascript
var vscope = 'global';

function fscope(){
    alert(vscope);
}
function fscope(){
    alert(vscope);
}

fscope(); // "global"
fscope(); // "global"


//-----


var vscope = 'global';

function fscope(){
    
    var vscope = 'local';
    var lv = 'local variables';
    alert(lv);
}

fcope(); // "local variables"
alert(lv); // undefined
// 함수 내의 지역변수는 함수 내에서만 접근이 가능
// 함수 내의 지역변수는 전역에서 접근할 수 없다
```



**중요**

```javascript
var vscope = 'global';

function fscope(){
    
    var vscope = 'local'; // 함수 내에서 지역변수 설정
    
}
fscope();
alert(vscope); // "global"


//-----


var vscope = 'global';

function fscope(){
    
    vscope = 'local'; // 전역변수의 변경
    
}
fscope();
alert(vscope); // "local"


//-----


var vscope = 'global';

function fscope(){
    
    var vscope = 'local'; // 함수 내에서 지역변수 설정
    vscope = 'local'; // 전역변수의 변경이 아니라 지역변수의 변경
    
}
fscope();
alert(vscope); // 그렇기 때문에 "global"
```



`var`는 

함수(function)밖에서는 전역변수

함수(function)내에서는 지역변수



***지역변수를 사용해야 한다!!***





---



### 유효범위의 효용



지역변수로 사용했을 때와 전역변수로 사용했을 때의 차이



```javascript
function a (){
    var i = 0; // 지역변수의 설정
}
for(var i = 0; i < 5; i++){
    a();
    document.write(i);
}
// 01234


//-----


function a (){
    i = 0; // 전역변수의 설정
}
for(i = 0; i < 5; i++){ // i는 계속 0
    a();
    document.write(i);
}
// 무한루프 발생
```





---



### 전역변수의 사용

(전역변수를 불가피하게 사용해야 될 경우 => 전역변수를 사용하는 법)



1. **하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리**
2. **익명함수를 호출** (즉시실행함수)



```javascript
var MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());
```

=> 불가피하게 전역변수를 사용해야 하는 경우는 **<u>하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리</u>**하는 방법을 사용한다.



```javascript
(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    document.write(sum());
}())
```

=> 전역변수를 사용하고 싶지 않다면 **<u>익명함수를 호출</u>**





---



### 유효범위의 대상 (함수)



JavaScript는 <u>함수(function)</u>에 대한 유효범위만을 제공

=> **<u>for문이나 if문에서는 지역변수(X)</u>**



많은 언어들이 <u>블록(대체로{,})</u>에 대한 유효범위를 제공하는 것과는 다른 점



***JavaScript의 지역변수는 함수에서만 유효***





---



### 정적 유효범위



<u>JavaScript는 함수(function)가 선언된 시점에서의 유효범위를 갖는다.</u>

이러한 유효범위의 방식을 ***정적 유효범위(static scoping)***, 혹은 ***렉시컬(lexical scoping)***이라고 한다.



```javascript
var i = 5;
 
function a(){
    var i = 10;
    b();
}
 
function b(){
    document.write(i); // 지역변수가 없기 때문에 전역변수를 참조
}
 
a(); // 5
```



사용될 때가 아니라 ***정의될 때의 시점(선언된 시점)***의 변수를 참조 => **정적 유효범위**





---



## 2. 값으로서의 함수와 콜백



### 값으로서의 함수



**<u>JavaScript에서는 함수도 객체(일종의 값)</u>**

JavaScript의 함수가 다른 언어의 함수와 다른 점

=> *함수가 값이 될 수 있다는 점*



* **함수(function)**

`function a(){}` === `var a = function(){}`

***=> 함수 a는 변수 a에 담겨진 값***



* **메소드(method) => 객체**

```javascript
a = {
    b: function(){
        // b(key): func(value)
        // b는 key값이자 변수의 역할
        // 변수의 역할을 하는 것을 속성(property)라고 부른
		// 변수에 설정되어 있는 함수 => 메소드
    }
};
```

***=> 함수는 객체의 값으로 포함 가능 (객체의 속성 값으로 담겨진 함수를 메소드(method)라고 부른다)***



* **함수의 인자화**

```javascript
function cal(func, num){ // 첫 번째 인자는 함수이다
    return func(num)
}
function increase(num){ // cal의 첫 번째 인자
    return num+1
}
function decrease(num){ // cal의 첫 번째 인자
    return num-1
}
alert(cal(increase, 1)); // 2
alert(cal(decrease, 1)); // 0
```

***=> 함수는 값이기 때문에 다른 함수의 인자로 전달 가능***



* **return 값의 함수**

```javascript
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode]; // 함수를 return 해준다
}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1)); 
```





* **배열 값의 함수**

```javascript
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];

// index 순서로 작업 ex) 0, 1, 2, ...

var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
alert(input);
```



***JavaScript에서 함수(function)은 다양하게 사용 가능***

***변수, (함수의)매개변수, 리턴값...***





---



### 콜백 (callback)



콜백은 값으로서의 함수와 밀접하게 연관

***값으로 사용될 수 있는 특성을 이용하면 <u>함수의 인자로 함수로 전달 가능</u>***

값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀수 있다.



```javascript
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

numbers.sort();
// 어떠한 함수가 .앞에 무언가가 있다면 .앞은 객체

// numbers => 배열 객체
// sort() => 함수 - 객체에 속해 있기 때문에 메소드(method)
```

```javascript
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var sortfunc = function(a, b){
    console.log(a, b);
    if(a > b){
        return 1;
    } else if (a < b){
        return -1;
    } else {
        return 0;
    }
}

console.log(numbers.sort(sortfunc));
// sortfunc => callback(콜백 함수)


//-----


numbers.sort(function(a, b){
    return a - b;
})

numbers.sort(function(a, b){
    return b - a; // 역순
})
```

***=> callback이 가능한 이유는 JavaScript에서 함수(function)가 값이기 때문***

