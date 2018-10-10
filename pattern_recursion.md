# pattern



**패턴**은 자주 사용하는 로직들의 구현방법과 그것에 대한 이름을 의미한다. 



**pattern**

* 자주 사용하는 로직들의 구현방법
* 자주 사용하는 로직들의 이름



문제 해결을 위한 방법 논의 시 패턴의 이름을 사용함으로 의사소통의 효율성을 증대





## 재귀함수 (recursion)



**재귀함수**는 함수 자신을 호출하는 프로그래밍 기법



<http://opentutorials.org/module/904/6700>



반복적으로 보기



Node 종류 API

### 재귀함수 - 1.



***재귀함수 => 어떠한 함수가 실행될 때 자기 자신을 호출하는 것***



```html
<!DOCTYPE html>
<html>
    <body id='start'>
        <ul>
            <li><a href='./532'>html</a></li>
            <li><a href='./533'>css</a></li>
            <li><a href='./534'>JavaScript</a>
            	<ul>
                    <li><a href='./535'>JavaScript Core</a></li>
                    <li><a href='./536'>DOM</a></li>
                    <li><a href='./537'>BOM</a></li>
                </ul>
            </li>
        </ul>
        
        <script>
            
            function traverse(target, callback){
                
                if(target.nodeType === 1){
                    // if(target.nodeName === 'A')
                    callback(target);
                    var c = target.childNodes;
                    for(var i = 0; i < c.length; i++){
                        traverse(c[i], callback);
                    }
                }
                
            }
            
            
            traverse(document.getElementById('start'), function(elem){
                console.log(elem);
                // elem.style.color = 'red';
                /*
                if(elem.nodeName === 'A'){
                	elem.style.backgroundColor = 'blue';
                }
                */
            });
            
        </script>
        
    </body>
</html>
```



```javascript
function traverse(target, callback){
    
    if(target.nodeType === 1){
        // if(target.nodeName === 'A')
        callback(target);
        var c = target.childNodes;
        for(var i = 0; i < c.length; i++){
            traverse(c[i], callback);
        }
    }
    
}

traverse(document.getElementById('start'), function(elem){
    console.log(elem);
    // elem.style.color = 'red';
    /*
    if(elem.nodeName === 'A'){
    	elem.style.backgroundColor = 'blue';
    }
    */
});
```







### 재귀함수 - 2.



```html
<!DOCTYPE html>
<html>
    <body id='start'>
        <ul>
            <li><a href='./532'>html</a></li>
            <li><a href='./533'>css</a></li>
            <li><a href='./534'>JavaScript</a>
            	<ul>
                    <li><a href='./535'>JavaScript Core</a></li>
                    <li><a href='./536'>DOM</a></li>
                    <li><a href='./537'>BOM</a></li>
                </ul>
            </li>
        </ul>
        
        <script>
            /*
            function traverse(target, callback){
                
                if(target.nodeType === 1){
                    // if(target.nodeName === 'A')
                    callback(target);
                    var c = target.childNodes;
                    for(var i = 0; i < c.length; i++){
                        traverse(c[i], callback);
                    }
                }
                
            }
            */
            
            function traverse(target, callback){
                if(target.nodeType === Node.ELEMENT_NODE){
	                callback(target);                    
                }

            }
            
            traverse(document.getElementById('start'), function(elem){
                console.log(elem);

            });
            
        </script>
        
    </body>
</html>
```

