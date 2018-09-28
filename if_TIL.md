# if (조건문)



### if

```javascript
if(true){
	console.log(1); // 실행 (O)
} else {
    console.log(2); // 실행 (X)
}

// => 1


if(false){
    console.log(1); // 실행 (X)
} else {
    console.log(2); // 실행 (O)
}

// => 2
```



### else if

```javascript
if(false){
    console.log(1); // 실행 (X)
} 
else if(true){
    console.log(2); // 실행 (O)
} 
else if(true){ // else는 앞 조건문이 실행되지 않았을 때 실행
    console.log(3); // 실행 (X) *
} else {
    console.log(4); // 실행 (X)
}

// => 2


if(false){
    console.log(1); // 실행 (X)
}
else if(false){
    console.log(2); // 실행 (X)
}
else if(true){
    console.log(3); // 실행 (O)
} else {
    console.log(4); // 실행 (X)
}

// => 3


if(false){
    console.log(1); // 실행 (X)
}
else if(false){
    console.log(2); // 실행 (X)
}
else if(false){
    console.log(3); // 실행 (X)
} else {
    console.log(4); // 실행 (O)
}

// => 4
```



### 비교

```javascript
if(false){
    console.log(1);
}
else if(true){
    console.log(2);
}
else if(true){
    console.log(3);
} else {
    console.log(4);
}

if(true){
    console.log(5);
}

// => 2, 5
```





---

---



# 조건연산자(삼항연산자)



주로 if문을 줄여서 간단하게 만들 때 많이 사용



```
(조건) ? true : false
```

```javascript
//if문으로 표현한 조건문

if(a > b){
    c = 10;
} else {
    c = 20;
}

//조건연산자(삼항연산자)
(a > b) ? c = 10 : c = 20;
```

