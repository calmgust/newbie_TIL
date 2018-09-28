# 반복문(JavaScript)



### for문



```javascript
for(초기식; 조건식; 증감식){
    명령구문(조건이 참일때 실행되는 구문)
}


//ex
for(var i = 0; i < a.length; i++){
    
}
```



### while문



```javascript
초기식;
while(조건식){
    명령;
    증감식;
}
```





#### for문과 while문 비교



```javascript
//1~100까지 합을 for문으로

var sum = 0;
for(var i = 1; i <= 100; i++){ //(초기식; 조건식; 증감식)
    sum = sum + i; //명령
}
console.log(sum);


//1~100까지 합을 while문으로

var sum = 0;
var i = 1; //초기식
while(i <= 100){ //조건식
    sum += i; //명령
    i++; //증감식
}
console.log(sum);
```





#### for문과 while문의 예시 (런코)



```javascript
//for
var result = 0;
var i = 0;
for(var i = 1; i <= 100; i+=1){
  // i는 1부터 시작하고 100이라면 1씩 더한다
    result += i;// result에 i를 더한다
}

//--------------------------------

//while
var result = 0;	// result는 0이다
var i = 1;		// i는 1이다
while(i<=100){	// i가 100이하라면
    result += i;// result에 i를 더한다
    i+=1;		// i를 1 증가시킨다
}
```





---

---



### break

<u>***반복문의 종료***</u>



반복작업을 중간에 중단시키고 싶다면 `break`를 사용하자



tip.

`break` <=> `continue`



```javascript
for(var i = 0; i < 10; i++){
    
    if(i === 5){
        break;
    }
    
    document.write('Coding everybody' + i + '<br/>');
    
}

//Coding everybody0
//Coding everybody1
//Coding everybody2
//Coding everybody3
//Coding everybody4

// 조건문에 부합하는 경우 반복문을 중단(break)시킨다.
```





---



### continue

<u>***그 순간에만 종료시키고 반복문은 계속 된다***</u>



tip. 

`continue` <=>  `break`



```javascript
for(var i = 0; i < 10; i++){
    
    if(i === 5){
        continue;
    }
    
    document.write('Coding everybody' + i + '<br/>');
    
}

//Coding everybody0
//Coding everybody1
//Coding everybody2
//Coding everybody3
//Coding everybody4
//*
//Coding everybody6
//Coding everybody7
//Coding everybody8
//Coding everybody9

// Coding everybody5가 없는 이유
// 조건에 부합하는 경우에서 반복문이 종료되고 반복문이 다시 실행되기 때문
```





---

---



### 반복문의 중첩



for문을 여러번 써준다



```javascript
for(var i = 0; i < 10; i++){
    
    for(var j = 0; j < 10; j++){
        
        document.write('Coding everybody'+ i + j + <br/>);
        // 문자(string)와 숫자(number)를 결합해주는 경우 숫자는 문자로 전환된다.
        
    }
    
}
```



