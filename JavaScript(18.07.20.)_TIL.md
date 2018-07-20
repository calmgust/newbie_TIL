# JavaScript와의 접목



```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>JavaScript와의 접목</title>


        <script>
            //코드(보통 초기화를 위해서 사용)
            //html 태그를 건드리지 않는 것은 위에 
        </script>
    </head>
    <body>
        <h1>Hello World</h1>

        <button id="myFirstButton">
            Hi
        </button>
        <!--
            [inline 방식]
            <button onclick="alert('안녕!')">
                Hi
            </button>
            => 코드가 길어질수록 가독성이 떨어진다!
            
            <button
            onclick="
            for(var i = 0; i <= 5; i+=1){
                alert(i);
                }
              "
            >
                Hi
            </button>
            => script 태그 안에서 함수를 선언해 주는 것이 바람직 *****
        -->

        <button="handleClick()">
            Hi
        </button>


        <script>
            //코드(페이지 기능에 관한 코드)
            //body 끝 부분에 script를 넣는 이유는 
            //html, css를 모두 불러온 후 script를 작동시키기 때문에 
            //로딩이 빨라진다.

            var button = document.getElementByld('myFirstButton');
            //document는 문서 전체를 의미
            //getElementByld는 해당 id값의 element를 반환해 주는 메소드

            button.onclick = function(){
                alert('안녕!');
            } 
            //script 외부에 event handler를 이용 가능
            //button 내부로

            var handleClick = function(){
                for(var i = 0; i <= 5; i += 1){
                    alert(i);
                }
            }

        </script>
    </body>
</html>
```



<script> </script>

내부에 JavaScript 코드 삽입



---



head태그 안에는 보통 **초기화**를 위해 사용

*(html 태그를 건드리지 않는 것)*



---



body태그 안에는 **페이지 기능**에 관한 코드

*body 끝 부분에 script를 넣어야 한다!!*

=> html, css를 모두 불러온 후 script를 작동시켜야 로딩이 빨라진다!!



---





