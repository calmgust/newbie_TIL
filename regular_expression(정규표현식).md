# 정규표현식 (regular expression)



***문자열에서 특정한 문자를 찾아내는 도구***



JavaScript 뿐만 아니라 기타 다른 언어에서도 정규표현식이 사용된다.



---



* **컴파일** => 필요한 대상이나 패턴을 찾는 것
* **실행** => 작업을 하는 것



---



## 정규표현식에서 패턴을 만드는 방법



### 정규표현식 리터럴

```javascript
var pattern = /a/;

// /(슬래시)와 /(슬래시)사이가 찾고자 하는 대상
```



### 정규표현식 객체 생성자

```javascript
var pattern = new RegExp('a');

// RegExp => regular expression(정규표현식)의 약자
// RegExp의 괄호 안이 찾고자 하는 대상
```





---



**정규표현식의 주요 작업**

1. 추출할 때 사용

2. 추출한 내용이 찾아야 할 대상에 있는 지 없는 지 test

3. 찾아낸 정보를 다른 정보로 치환하는 것

---



## 정규표현식 메소드 실행

정규표현시을 컴파일해서 객체를 만들었다면

문자열에서 원하는 문자를 찾아야 한다.



`pattern.exec(검색하고자 하는 대상)` => **추출**

```javascript
var pattern = /a/;

console.log(pattern.exec('abcdef')); // ["a"]

console.log(pattern.exec('bcdefg')); // null (찾고자 하는 값이 없다)
```



tip.

```javascript
var pattern = /a./; // .은 하나의 문자(어떤 문자인지 관계 (X))

console.log(pattern.exec('abcdef')); // ["ab"]
```



`pattern.test(테스트하고자 하는 대상)` => **존재 유무의 테스트**

```javascript
var pattern = /a/;

console.log(pattern.exec('abcdef')); // true

console.log(pattern.exec('bcdefg')); // false
```





---



## 문자열 메소드 실행

문자열 객체의 몇몇 메소드는 정규표현식을 사용 가능



`String.match()` => **추출 (RegExp.exec()와 비슷)**

```javascript
var pattern = /a/;

var str1 = 'abcdef';

str1.match(pattern); // ["a"]

var str2 = 'bcdefg';

str2.match(pattern); // null

//-----

var pattern = /a/;

console.log('abcdef'.match(pattern)); // ["a"]

console.log('bcdefg'.match(pattern)); // null
```



`String.replace()` => **문자열에서 패턴을 검색 후 변경 후 변경된 값을 리턴**

```javascript
var pattern = /a/;

console.log('abcdef'.replace(pattern, 'A')) // Abcdef
```

