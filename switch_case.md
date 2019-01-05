# switch 조건문(JavaScript)



기본적인 조건문은 `if`문 



조건식에서 비교할 값이 많아질 경우

코드가 길어지고 가독성이 떨어진다는 단점



이러할 경우 switch를 사용



---

***switch문을 사용하는 것이 더 좋다?***



모든 switch는 if로 표현 가능하다

모든 if를 switch로 표현할 수 있는 것은 아니다



컴파일러가 최적화를 할 때 switch쪽이 더 유리

Ex) 각 case의 위치를 미리 배열로 만들어 놓고 바로 해당 위치로 점프 가능



*if문이 3개 일때까지는 switch보다 빠르다?*

---



**문법**

```javascript
switch(condition){
    case value1:
        statement1;
        break;
        
    case value2:
        statement2;
        break;
        
        ...
        
        default:
        statement3;
        
}
```

condition의 값이 

value1 => statement1 실행 

value2 => statement2 실행 

그 어느 것도 아닐 경우 default가 적용되어 statement3을 실행



순차적으로 값을 비교하며, 조건이 맞을 때 break가 있다면 그 이후의 비교는 하지 않는다.(switch구문을 바로 끝낸다.)

**만약 break가 없는 경우 조건이 맞아도 다음 비교를 계속한다**



**예제**

1을 입력하면 'First'를, 2를 입력하면 'Second'를, 3을 입력하면 'Third'를, 이외의 값을 입력했다면 'You did not input 1 or 2 or 3.'을 출력하는 예제

```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Statement | switch</title>
    <script>
      var jb = prompt( 'Enter 1 or 2 or 3', '' );
      switch ( jb ) {
        case '1':
          var jb1 = 'First';
          break;
        case '2':
          var jb1 = 'Second';
          break;
        case '3':
          var jb1 = 'Third';
          break;
        default:
          var jb1 = 'You did not input 1 or 2 or 3.';
      }
    </script>
  </head>

  <body>
    <script>
      document.write( '<p>' + jb1 + '</p>' );
    </script>
  </body>

</html>
```



### if문과 비교

```javascript
var jb = eval(prompt('Enter 1 or 2 or 3', ''));

// switch(jb){
//   case '1':
//     var jb1 = 'First';
//     break;
//   case '2':
//     var jb1 = 'Second';
//     break;
//   case '3':
//     var jb1 = 'Third';
//     break;
//   default:
//     var jb1 = 'You did not input 1 or 2 or 3.'
// }
// console.log(jb1);

if(jb === 1){
  var jb1 = 'First';
}
else if(jb === 2){
  var jb1 = 'Second';
}
else if(jb === 3){
  var jb1 = 'Third';
} else {
  var jb1 = 'You did not input 1 or 2 or 3.'
}

console.log(jb1);
```

*`eval`을 써주지 않으면 입력 값을 `string`으로 해주어야 한다.*





----



## added nomad



```js
function greet (lang) { 
  if (lang === 'spanish') {
    return 'hola';
  } else if (lang === 'korean') {
    return 'annyeonghaseyo';
  } else if (lang === 'greek') {
    return 'giasu';
  } else if (lang === 'italian') {
    return 'chao';
  } else if (lang === 'english') {
    return 'hello';
  } else { 
    return 'don`t know that one';
  }
}

greet('spanish');

//-----

function greet (lang) {
    switch (lang) {
        case 'spanish':
            return 'hola';
        case 'korean':
            return 'annyeonghaseyo';
        case 'greek':
            return 'giazu';
        case 'italian':
            return 'chao';
        case 'english':
            return 'hello';
        default:
            return 'dont know that one';
    }
}

```

