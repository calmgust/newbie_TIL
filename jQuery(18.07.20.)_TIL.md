# jQuery



### jQuery란

jQuery란 웹에서 JavaScript로 구현할 수 있는 기능들을 미리 구현해 모아놓은 라이브러리 

우리가 원하는 기능들을 사용하기 쉽게 정리해서 모아두었기 때문에 

jQuery는 JavaScript만으로는 작성하기 번거로운 코드들을 쉽게 짤 수 있게 도와줌



=>편리한 도구!!



* learn_3

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>jQuery</title>
    </head>
    <body>
        <!--
            jQuery란 웹에서 JavaScript로 구현할 수 있는 기능들을 
            미리 구현해 모아놓은 라이브러리

            우리가 원하는 기능들을 사용하기 쉽게 정리해서 모아두었기 때문에
            
            jQuery는 JavaScript만으로는 작성하기 번거로운 코드들을 
            쉽게 짤 수 있게 도와줌
        -->
        <script>
        </script>
    </body>
</html>
```



* learn_3_1

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js">
        //jQuery를 사용한다는 뜻
        </script>
        <title>jQuery 연습</title>
    </head>
    <body>
        <h1 id="title">jQuery를 연습해 봅시다</h1>
        <script>
            //"jQuery를 연습해 봅시다"라는 글에 마우스를 올렸을 때, 색이 변하게!!

            $(document).ready(function(){          //document가 준비가 되면(로딩이 끝나면) 하위 코드를 실행합니다.
                //코드를 작성할 곳
                $('#title')                        //css의 선택자를 기억하고 있나요? id값이 title인 DOM을 호출합니다.*****
                .on('mouseover', function(){       //mouseover 이벤트가 발생할 때 실행하는 함수입니다.
                    $(this)[0].style.color = 'red';//$(this)[0]는 선택된 객체이고, style의 color를 red로 바꿔줍니다.
                })
                /*
                .mouseover(function(){
                    $(this)[0].style.color = 'red';
                })
                => 이렇게 줄여쓰기도 가능
                단, 이렇게 줄여쓰면 이미 로딩된 객체들에게만 이 코드가 작동
                */
                .on('mouseleave', function(){      //마우스가 떠났을 때에는 원래의 색깔로 돌려줘야 하므로
                    $(this)[0].style.color='black';//mouseleave 이벤트가 발생했을 때의 코드를 작성해 줍니다.
                })
                /*
                .mouseover(function(){
                    $(this)[0].style.color = 'black';
                })
                => 이렇게 줄여쓰기도 가능
                단, 이렇게 줄여쓰면 이미 로딩된 객체들에게만 이 코드가 작동
                */
            });

        </script>
    </body>
</html>

<!--
    DOM

    DOM은 문서 객체 모델(The Document Object Model)의 약자로, 프로그래밍 언어로 문서 내부의 객체들을 다룰 수 있게 도와주는 역할을 합니다.
    예를 들어, id가 title인 객체를 불러오기 위해서는 document.getElementByld('title'); 와 같이 불러올 수 있습니다. 
    jQuery에선 이 문장을 $('#title')[0]으로 간결하게 끝낼 수 있습니다. $('선택자')와 같이 사용하면 선택자에 해당하는 모든 DOM들을 배열과 비슷한 형태로 불러옵니다.
    그러므로 $('#title')[0]와 같이 뒤에 [0]을 붙여주어야 DOM에 접근이 가능합니다.

-->
```



#### DOM

​    DOM은 문서 객체 모델(The Document Object Model)의 약자로, 프로그래밍 언어로 문서 내부의 객체들을 다룰 수 있게 도와주는 역할을 합니다.

​    예를 들어, id가 title인 객체를 불러오기 위해서는 document.getElementByld('title'); 와 같이 불러올 수 있습니다. 

​    jQuery에선 이 문장을 $('#title')[0]으로 간결하게 끝낼 수 있습니다. $('선택자')와 같이 사용하면 선택자에 해당하는 모든 DOM들을 배열과 비슷한 형태로 불러옵니다.

​    그러므로 $('#title')[0]와 같이 뒤에 [0]을 붙여주어야 DOM에 접근이 가능합니다.



```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js">
        //jQuery를 사용한다는 뜻
        </script>
        <title>jQuery 연습</title>
    </head>
    <body>
        <h1 class="practice">jQuery를 연습해 봅시다</h1> <!--class로 바꿔주고 시작-->
        <script>
            //"jQuery를 연습해 봅시다"라는 글에 마우스를 올렸을 때, 색이 변하게!!

            $(document).ready(function(){          //document가 준비가 되면(로딩이 끝나면) 하위 코드를 실행합니다.
                //코드를 작성할 곳

                setInterval(function(){            //3000ms(3초)마다 함수를 실행시켜 줍니다.
                    $('body').append($("<h2 class='practice'>연습!!</h2>")) //body에 practice class를 가진 h2 DOM을 추가시켜 줍니다.
                }, 3000);                                                  //페이지가 로딩될 때에는 $('.practice')가 가리키는 DOM이 h1태그가 하나였기 때문(마우스를 올려도 색이 변하지 않는다!)                                              //html파일을 실행시키고, 3초 뒤에 나타나는 '연습!!'에 마우스를 올려도 색이 변하지 않는다.  
                
                $('body') //<=$('.practice')              //$('body')에 이벤트를 거는 것
                .on('mouseover', '.practice', function(){ //body 내부의 .practice 선택자에 이벤트를 걸어 버리는 것
                    $(this)[0].style.color = 'red';       //그러면 후에 덧붙일 DOM에도 함수가 작동
                })
                /*                                             
                .mouseover(function(){
                    $(this)[0].style.color = 'red';
                })
                
                => 이렇게 줄여쓰기도 가능
                단, 이렇게 줄여쓰면 이미 로딩된 객체들에게만 이 코드가 작동
                */
                
                .on('mouseover', '.practice', function(){
                    $(this)[0].style.color = 'black';
                })
                /*
                .mouseover(function(){
                    $(this)[0].style.color = 'black';
                })
                
                => 이렇게 줄여쓰기도 가능
                단, 이렇게 줄여쓰면 이미 로딩된 객체들에게만 이 코드가 작동
                */
            });

        </script>
    </body>
</html>
```





