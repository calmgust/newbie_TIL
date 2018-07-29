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

