# HTML/CSS

**웹 페이지를 만들기 위해서**



#### HTML: HyperText Markup Language

틀*****



#### CSS: Cascading Style Sheets

스타일을 정의



* learn _1_1

```HTML
<!doctype html><!--이 문서가 HTML문서임을 명시-->
<html>         <!--html태그: html문서 전체의 틀을 구성-->
    <head>     <!--head 태그는 문서의 메타데이터를 선언하는 곳-->
        <meta charset="utf-8">
        <!--title 태그는 문서의 제목을 선언하는 곳 => 브라우저 탭에 보여집니다.-->
        <title>
            HTML/CSS
        </title>
        <!--</태그이름>은 해당 태그가 끝났음을 의미-->
        
        <script>
            /*
            웹 페이지를 만들기 위해서
            HTML: HyperText Markup Language
            틀*****

            CSS: Cascading Style Sheets
            스타일을 정의

            HTML은 tag들의 집합
            tag란 꺾쇠 괄호로 묶여진 HTML의 기본 구성 요소
            */

            //----------

            /*
            <tag></tag>와 같이 표현되는 경우
            <tag/>와 같이 줄여 쓸 수 있습니다.

            ex)
            <img src="http://www.codestates.com/images.png"></img>
            <img src="http://www.codestates.com/images.png"/>

            <div></div> => <div/>
            */
        </script>

    </head>
    <body><!--body 태그는 문서의 내용을 담는 곳-->
        <h1>Hello World</h1><!--h태그는 h1~h6으로 이루어져 있으며, 중요한 내용임을 나타냄-->

    </body><!--body태그의 끝을 나타냄-->
</html><!--html태그의 끝을 나타냄-->
```



HTML은 tag들의 집합

tag란 꺾쇠 괄호로 묶여진 HTML의 기본 구성 요소

```html
<tag></tag>와 같이 표현되는 경우
<tag/>와 같이 줄여 쓸 수 있습니다.
ex)
<img src="http://www.codestates.com/images.png"></img>
<img src="http://www.codestates.com/images.png"/>

<div></div> => <div/>
```



* learn_1_2

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>HTML/CSS</title>

        <style>
            h2{
                color : red;
            } /*2. HTML 내부에 스타일 시트를 작성 하는 방식*/            
            
            #hello{
                color : red;
            }

            #code-states{
                color : blue;
            }

        </style>

        <!--
        3. HTML 외부에 스타일 시트를 작성하는 방식
        <link rel="stylesheet"type="text/css"href="myFirstStyle.css">
        -->

        <script>
            /*
            CSS의 사용법

            1. 인라인(inline) 방식
            2. HTML 내부에 스타일 시트를 작성하는 방식
            3. HTML 외부에 스타일 시트를 작성하는 방식
            */

            /*
            id / class *****
            id속성은 해당 태그의 id값을 의미
            보통 한 문서 내에 서로 다른 태그가 같은 id값을 사용하는 일은 없어야 한다

            #id이름{
                //style 작성
            }


            class는 id와 다르게 한 문서 내에서 서로 다른 태그끼리도 공유가 가능한 속성
            띄어쓰기를 기준으로 여러 class를 가질 수 있다

            .class이름{
                //style 작성
            }
            */
        </script>

    </head>
    <body>
        <h1 style="color : red;">
            Hello World
        </h1> <!--1. 인라인 방식-->

        <h2>Hello World</h2>
        <h2>Code States</h2>

        <h3 id="hello">Hello World</h3>
        <h3 id="code-states">Code States</h3>

    </body>
</html>
```



**CSS의 사용법**

1. 인라인(inline) 방식
2. HTML 내부에 스타일 시트를 작성하는 방식
3. HTML 외부에 스타일 시트를 작성하는 방식



* ***id 와 class 차이 숙지***



* learn_1prac

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>
            Practice
        </title>
        
        <style>
            
            h1{
                font-weight: bold;
                font-style: italic;
            }

            h3{
                text-decoration : underline;
            }

            #describe{
                color : blue;
            }

            #title{
                color : red;
            }

            .common{
                font-family: "나눔고딕", NanumGothic
            }

        </style>

        <script>
        </script>
    </head>
    <body>
        <h1 id="title" class="common">Hello World</h1>
        <h3 id="describe" class="common">Code States</h3>
    </body>
</html>
```



* learn_1prac(2)

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>
            Practice
        </title>
        
        <!--
        <style>
            
            h1{
                font-weight: bold;
                font-style: italic;
            }

            h3{
                text-decoration : underline;
            }

            #describe{
                color : blue;
            }

            #title{
                color : red;
            }

            .common{
                font-family: "나눔고딕", NanumGothic
            }

        </style>
        -->
        
        <!--HTML 외부에 스타일 시트를 작성하는 방식-->
        <link rel="stylesheet" type="text/css" href="learn_1prac(2).css">

        <script>
        </script>
    </head>
    <body>
        <h1 id="title" class="common">Hello World</h1>
        <h3 id="describe" class="common">Code States</h3>
    </body>
</html>
```



HTML 내부에 스타일시트를 작성하는 방식과 HTML 외부에 스타일시트를 작성하는 방식의 차이를 숙지

<style> </style>의 내부에 작성과 외부에 작성

