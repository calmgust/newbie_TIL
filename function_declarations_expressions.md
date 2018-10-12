# Declarations / Expressions



## Function Declarartions (함수 선언식)



syntax

```javascript
function 함수명(){
    로직
}
```



ex

```javascript
function boo(){
    return 1 + 2;
}

boo(); // 3
```





---



## Function Expressions (함수 표현식)



***유연한 JavaScript 언어의 특징을 활용한 선언 방식***



syntax

```javascript
var 함수명 = function(){
    로직
}
```



ex

```javascript
var boo = function(){
    return 1 + 2;
}

boo(); // 3
```





----



### 함수선언식과 함수표현식의 차이점



함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.



* ***함수 선언식*** => <u>호이스팅에 영향을 받음</u>
* ***함수 표현식*** => <u>호이스팅에 영향을 받지 않음</u>



함수 선언식은 코드를 구현한 위치와 관계없이 JavaScript의 특징인 ***호이스팅***에 따라 브라우저가 JavaScript를 해석할 때 맨 위로 끌어올린다.



```javascript
sendMessage();
calculrateNumber();
 function sendMessage(){
	return 'hello guys';
}
 var calculrateNumber = function(){
	return 1 + 2;
}
 
 
// 호이스팅에 의해 위의 코드는 아래와 같이 인식된다.
 
 
function sendMessage(){
	return 'hello guys';
}
 var calculrateNumber;
 sendMessage();
calculrateNumber();
 calculrateNumber = function(){
	return 1 + 2;
}
 
// 코드의 결과
// Uncaught TypeError : calculrateNumber is not a function
 
 //calculateNumber를 함수로 인식하는게 아니라, 변수로 인식하는 중
```



### 함수표현식의 장점



* 호이스팅에 영향을 받지 않는다
* 클로저로 사용
* 콜백으로 사용 (다른 함수의 인자로 넘길 수 있다)





### 비동기적이란?



***=> 언제 일어날지 모르는 것***



즉 비동기적 이벤트란 이벤트가 언제 일어날지 프로그래머가 전혀 알 수 없는 이벤트를 뜻한다.



ex) 사용자의 마우스 클릭

