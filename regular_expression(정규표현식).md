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





---



## 옵션 (option)



### i

i를 붙이면 대소문자를 구분하지 않는다.

```javascript
var xi = /a/;

console.log("Abcde".match(xi)); // null

var oi = /a/i;
console.log("Abcde".match(oi)); // ["A"];
```



### g

g를 붙이면 검색된 모든 결과를 리턴한다.

```javascript
var xg = /a/;

console.log("abcdea".match(xg)); // ["a"]

var og = /a/g;

console.log("abcdea".match(og)); // ["a", "a"]
```



참고) ***옵션 i와 g를 동시에 사용 가능***

```javascript
var ig = /a/ig;

console.log("AabcdAa".match(ig)); // ["A", "a", "A", "a"]
```





---



## 캡쳐 (capture)



괄호안의 패턴은 마치 변수처럼 재사용할 수 있다. 이때 기호 $를 사용하는데 아래 코드는 coding과 everybody의 순서를 역전시킨다.

```javascript
var pattern = /(\w+)\s(\w+)/;

var str = "coding everybody";

var result = str.replace(pattern, '$2, $1');

console.log(result); // "everybody coding"

//-----
// cf)

var result = str.replace(pattern, '($2) ($1)');

console.log(result); // "(everybody) (coding)"
```



참고)

<img width="706" alt="2018-09-30 22 13 44" src="https://user-images.githubusercontent.com/40155174/46257975-223d9a80-c4fe-11e8-8e73-92745d804430.png">

**()** => **괄호**는 그룹(group)을 의미

**\w** => 문자(string)를 의미 *(A~Z, a~z, 0~9)*

**+** => 수량자

**\w+** => 문자(string)가 하나 이상 (문자가 하나인 경우에도 속함)

**\s** => 공백



참고자료)

* 정규표현식 시각화(https://regexper.com/)
* 정규표현식 빌더(https://regexr.com/)





---



## 치환



아래 코드는 본문 중의 URL을 링크 html 태그로 교체한다.

**=> url에 해당하는 부분만 찾아서 링크로 고쳐준다.**



```javascript
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);
```



결과

```javascript
생활코딩 : <a href="http://opentutorials.org/course/1">http://opentutorials.org/course/1</a> 입니다. 네이버 : <a href="http://naver.com">http://naver.com</a> 입니다.
```





---



**정규표현식 심화**

https://opentutorials.org/course/909/5142