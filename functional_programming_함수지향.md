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





---



### 비동기 처리*



콜백은 비동기 처리에서 유용하게 사용

시간이 오래 걸리는 작업이 있을 때 이 작업이 완료된 후에 처리해야 할 일을 콜백으로 지정하면 해당 작업이 끝났을 때 미리 등록한 작업을 실행하도록 할 수 있다.



**Ajax**

A => asynchronous (비동기)

j => JavaScript

a => and

x => XML 중요(X)

https://opentutorials.org/course/1375/6843



Ajax를 제어할 때 비동기적인 제어를 하게 된다.



#### 추가공부 필요!!





---



## 3. 클로저 (closure)



***클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것***





### 외부함수와 내부함수

JavaScript는 함수(function) 안에서 또 다른 함수를 선언 가능



```javascript
function outter(){
    
    function inner(){
        
        var title = 'coding everybody';
        alert(title);
        
    }
    inner();
    
}
outter();
```

***=> 함수 outter의 내부에 함수 inner가 정의(함수 inner는 내부함수)***



```javascript
function outter(){
    
    var title = 'coding everybody';
    
    function inner(){
        // inner()에서 outter()의 지역변수에 접근 가능
        alert(title);
        
    }
    inner();
    
}
outter();
```

***=> 내부함수는 외부함수의 지역변수에 접근 가능!!***





---



### 클로저



클로저(closure)는 내부함수와 밀접한 관계를 가짐

내부함수는 외부함수의 지역변수에 접근 가능

***특히 외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 가능***



```javascript
function outter(){
    var title = 'coding everybody';  
    return function(){ // 내부함수를 return해주는 것이 point       
        alert(title);
    }
}

var inner = outter(); 
// outter는 return을 하여 소멸
// 소멸한 외부함수의 지역변수에 접근이 가능

inner(); // 'coding everybody'
outter()();
```





---



### private variable*



비밀변수?



```javascript
function factory_movie(title){
    return { // 객체를 return
        // 객체 안에는 내부함수(function)
        // 내부함수는 외부함수의 지역변수에 접근할 수 있다
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
// title을 private variable(비밀변수)로 묶어놓고
// 변수의 값을 가져올 때는 get_title을 통해서만
// 변수의 값을 수정할 때는 set_title을 통해서
// 변수(데이터)가 안전하게 저장되고 수정될 수 있다.


ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title()); // 'Ghost in the shell'
alert(matrix.get_title()); // 'Matrix'
 

ghost.set_title('공각기동대');
 
alert(ghost.get_title()); // '공각기동대'
alert(matrix.get_title()); // 'Matrix'
```



```javascript
function factory_movie(title){
    return {
        get_title: function(){
            return title;
        },
        set_title: function(){
            if(typeof _title === 'String'){
                title = _title
            } else {
                alert('제목은 문자열이어야 합니다.');
            }
        }
    }     
}

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title()); // 'Ghost in the shell'
alert(matrix.get_title()); // 'Matrix'
 

ghost.set_title(1); // '제목은 문자열이어야 합니다.'
 
alert(ghost.get_title()); // 'Ghost in the shell' => 변수가 바뀌지 않았다
alert(matrix.get_title()); // 'Matrix'
```



위의 예제를 통해서 알 수 있는 것들을 정리해보면 아래와 같다.

1. 클로저는 객체의 메소드에서도 사용할 수 있다. 위의 예제는 함수의 리턴값으로 객체를 반환하고 있다. 이 객체는 메소드 get_title과 set_title을 가지고 있다. 이 메소드들은 외부함수인 factory_movie의 인자값으로 전달된 지역변수 title을 사용하고 있다.

2. 동일한 외부함수 안에서 만들어진 내부함수나 메소드는 외부함수의 지역변수를 공유한다. 17행에서 실행된 set_title은 외부함수 factory_movie의 지역변수 title의 값을 '공각기동대'로 변경했다. 19행에서 ghost.get_title();의 값이 '공각기동대'인 것은 set_title와 get_title 함수가 title의 값을 공유하고 있다는 의미다.

3. 그런데 똑같은 외부함수 factory_movie를 공유하고 있는 ghost와 matrix의 get_title의 결과는 서로 각각 다르다. 그것은 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성되기 때문에 ghost와 matrix는 서로 완전히 독립된 객체가 된다.

4. factory_movie의 지역변수 title은 2행에서 정의된 객체의 메소드에서만 접근 할 수 있는 값이다. 이 말은 title의 값을 읽고 수정 할 수 있는 것은 factory_movie 메소드를 통해서 만들어진 객체 뿐이라는 의미다. JavaScript는 기본적으로 Private한 속성을 지원하지 않는데, 클로저의 이러한 특성을 이용해서 Private한 속성을 사용할 수 있게된다.

참고)

참고 Private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미한다. 이를 통해서 객체의 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일 수 있다. 자바와 같은 언어에서는 이러한 특성을 언어 문법 차원에서 지원하고 있다.



#### 추가공부 필요!!





---



### 클로저의 응용*



```javascript
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}

// 함수가 함수 외부의 컨텍스트에 접근할 수 있을 것으로 기대하겠지만 위의 결과는 아래와 같다

// 5
// 5
// 5
// 5
// 5
```



```javascript
var arr = [];
for(var i = 0; i < 5; i++){
    arr[i] = function(id){ // 매개변수로 id => 일종의 지역변수
        return function(){
            return id; // 내부함수에서 외부함수의 지역변수인 id를 참조
        }
    }(i); // 외부함수의 매개변수의 인자로 i값
    // 정의된 외부함수를 즉시 호출(실행
	// 정의된 외부함수가 실행되면서 내부함수가  return
    // return된 내부함수가 배열에 담긴다
}
for(var index in arr) {
    console.log(arr[index]());
}

// 0
// 1
// 2
// 3
// 4
```



#### 추가공부 필요!!





---



## 4. arguments



함수에는 ***arguments***라는 <u>*변수에 담긴 숨겨진 유사 배열*</u>이 있다.

=> 사용 방법이 배열과 유사하기 때문에 유사 배열

`arguments는 사실 배열은 아니다. 실제로는 arguments 객체의 인스턴스다.`



이 배열에는 함수를 호출할 때 입력한 ***인자***가 담겨있다.



```javascript
function sum(){
    var i, _sum = 0;    
    for(i = 0; i < arguments.length; i++){ // 인자의 수만큼 for문이 반복 실행
        document.write(i+' : '+arguments[i]+'<br />');
        _sum += arguments[i];
    }   
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));
```



`arguments`의 역할

* `arguments.length`를 사용하여 인자(arguments)의 수를 알 수 있다
* `arguments[i]`를 사용하여 특정 인자를 알 수 있다.





---



### 매개변수의 수



매개변수 (parameter)



```javascript
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length 0 arguments 0



function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
one('val1', 'val2');  // one.length 1 arguments 2 



function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
two('val1');  // two.length 2 arguments 1
```



`함수(function)의 이름.length` => 매개변수(parameter)의 수

`arguments.length` => 인자(arguments)의 수



***함수(function)를 사용할 때 유용***





---



## 5. 함수의 호출



### 함수호출



함수를 호출하는 가장 기본적인 방법

```javascript
function func(){
    
}
func();
```



***JavaScript에서함수(function)는 일종의 객체(object)***

=> 지금은 이해가 잘 안되겠지만



객체는 속성들을 가지고 있다.

* 속성에 **값**이 저장되어 있다면 **속성(property)**이라 부른다.

  `객체 - 속성`



* 속성에 **함수**가 저장되어 있다면 **메소드(method)**라고 부른다.

  `객체 - 함수(function)`





#### apply의 소개



```javascript
function sum(arg1, arg2){
    return arg1 + arg2;
}

console.log(sum(1, 2)); // 3
console.log(sum.apply(null, [1, 2])); // 3
```



*apply는 인자로 **배열** 사용*

`sum.apply(null, [arg1, arg2])` <=> `sum.call(null, arg1, arg2)`





#### apply의 사용



```javascript
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    // var this = o1 or o2;
    var _sum = 0;
    for(name in this){
        _sum += this[name]; // this는 현재 정의되어 있지 않다. (호출할 때 정의 된다.)
    }
    return _sum;
}


// this가 정의 된다.
alert(sum.apply(o1)) // 6
alert(sum.apply(o2)) // 185


// o1을 인자로 주게 되면 sum이라는 함수의 this가 된다. => var this = o1 or o2;
```

`sum.apply(o1) === o1.sum(메소드)`



```javascript
function sum(){
    var _sum = 0;
    for(name in this){
        if(typeof this[name] !== 'function'){
			_sum += this[name];   
        }
    }
    return _sum;
}

o1 = {val1:1, val2:2, val3:3, sum:sum}
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum}
alert(o1.sum());
alert(o2.sum());

// alert(sum.apply(o1)) // 6
// alert(sum.apply(o2)) // 185
```



* ***객체 안에 데이터와는 상관없는 함수를 추가***해야되는 불편함 

* ***if문(타입이 function이 아닌 것만)을 사용***해야 되는 번거로움

위의 단점을 보완하기 위해서

***apply를 사용***하게 되면 호출되는 시점에서 함수의 this 값을  변경하여

마치 ***함수가 o1이라는 객체의 속성인 것처럼 실행***되게 할 수 있다.