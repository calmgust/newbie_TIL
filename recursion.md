# Recursion

### (재귀함수)



```javascript
function foo(){
    foo();
}
```

=> 함수 내에서 함수를 재실행(재귀적 실행)

( 무한루프에 빠지게 된다!!)



***Iterative way***

```javascript
var factorial = function(number){
    var result = 1;
    for(var i = number; i > 0; i--){
        result *= i;
    }
    return result;
}
```



***Recursive way***

```javascript
var factorial = function(number){
    if(number === 0){
        return 1; //if문은 무한루프에 빠지지 않게 해준다
    }
    return (number * factorial(number - 1)); //함수의 재실행
}
```

=> recursion은 코드를 직관적으로 보여준다



<u>EX.1 Factorial</u>

```javascript
function factorial(n){
    // - Base Case
    // when n is equal to 0, we stop the recursion
    
    if(n === 0){
        return 1;
    }
    
    // - Recursive Case
    // It will run for all other condition except when n is equal to 0
    
    return n * factorial(n-1);
}
```

=> Base Case를 항상 먼저 만들어 주어야 한다(무한 루프에 빠지지 않기 위해서)

(빠져나갈수 있도록 만들어준다)

```javascript
var function_name = function(input){
    
    if(termination_condition){ // to prevent infinite recursion(예외 처리)
        return value;
    }
    
    else if(base_case){
        return value;
    }
    
    // recursive case
    return (expression_with_recursion_call)
}
```



<u>EX.2 Fibonacci</u>

```javascript
function fib(){
    
    if(n < 0/*termination_condition*/){
        return 0; // 예외처리
        
    }
    
    else if(n === 0/*base_case*/){
        return 0; // n이 0일경우 return 0
        
    }
            
    else if(n === 1/*base_case*/){
        return 1; // n이 1일경우 return 1
        
    }
    
    else{
        return fib(n - 1) + fib(n - 2);
        
    }
}


//----- 위에 것을 정리


function fibonacci(num){
    if(num <= 1){
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

var result = fibonacci(10);
console.log(result);


//----- 세션


function fibonacci(num){
    if(num <= 1) return 1;
    
    return fibonacci(num - 1) + fibonacci(num - 2);
}

var result = fibonacci(10);
console.log(result);
```

=> 정의된 것과 가장 흡사하게 코딩을 할 수 있다는 것(recursive의 장점)



iterative case로 코드 구성 시

```javascript
function fibonacci(num){
    var a=1, b=0, temp;
    
    while(num >= 0){
        temp = a;
        
        a = a + b;
        b = temp;
        num--;
    }
    
    return b;
}

var result = fibonacci(10);
console.log(result);
```

=> 직관적이지 않다



**모든 recursion는 iteration로 교체가 가능**

**(모든 iteration은 recursion으로 교체 가능)**





tip.

recursion의 단점

=> iteration보다 recursion이 연산이 훨씬 많다(속도의 차이가 많다)



=> 그렇기 때문에 **_.memoize**가 필요하다. **(중요)**



---



tip.

*_.memoize* 란

cache라는 임의의 공간을 하나 따로 만들어 놓고 input과 output을 저장을 하는 용도로 쓰는데, 한 번도 실행이 되지 않았다면 실행을 시켜서 cache에 저장을 하겠다는 것이 _.memoize의 개념



memoize를 사용하면 카운트가 줄어들어 연산 속도가 빨라진다



---



```javascript
var count = 0;//+
function fibonacci(num){
    count++;//+
    
    if(num <= 1) return 1;
    
    return fibonacci(num - 1) + fibonacci(num - 2);
}

var result = fibonacci(10);
console.log(result);
console.log('count: ' + count);

// 0, 1, 2, 3, 4, 5, 6, ...
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ...

/*
var cache = {
input : output,
0 : 0,
1 : 1,
2 : 1,
3 : 2
}
// 불릴때마다 넣어요
*/

// fib(3) = 1; // fib(2) fib(1)
// fib(2) = 1; // fib(1) fib(0)
// fib(1) = 1;
// fib(0) = 0;

// var cache = {};
// fib(3) //fib(2) -> 1
```



