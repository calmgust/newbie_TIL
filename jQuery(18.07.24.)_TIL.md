

# jQuery($)

1. 엘리먼트를 선택하는 강력한 방법과
2. 선택된 엘리먼트들을 효율적으로 제어할 수 있는 다양한 수단을 제공하는
3. 자바스크립트 라이브러리(자바스크립트로 만들어진 라이브러리)



*HTML의 엘리먼트들*



---

#### library(라이브러리)

자주 사용하는 코드들을 **재사용**할 수 있는 형태로 가공해서 프로그래밍 효율을 높여주는 코드들

---



#### jQuery의 문법

***$(제어대상).method1().method2();***



$(제어대상) => 주어

.method1().method2(); => 서술어



(제어대상에 클래스나 id를 입력)



tip. chain!!

꼬리에 꼬리를 물어서 서술어를 붙일 수 있다.





---

---



### JavaScript와 jQuery 비교



**JavaScript의 경우**



* list-style: none(리스트의 점이나 숫자를 표시하지 않는다.)

* float: left(리스트를 한줄로)

* #navigation//(id) selected{

  background-color: red

  color: white;

  }

* if(target.addEventListener){

  *//W3C DOM(표준)*

  *//addEventListener가 있으면*

  target.addEventListener(코드)

  *//addEventListener에 코드를 실행*

  }

  * **target**





**jQuery의 경우**



```javascript
$('#navigation li').live('click', function(){
    $('#navigation li').removeClass('selected');
    $(this).addClass('selected');
})
```



***JavaScript를 jQuery로 입력할 경우 코딩의 경제성이 증가(더 적은 양으로 동일한 효과 가능)***





---

---



### wrapper !!!



*jQuery라는 이름으로 시작되는 함수*



jQuery라는 이름을 가지고 있는 함수를 호출하는 것

**엘리먼트 오브젝트**를 전달하거나

**CSS스타일 선택자**를 전달



---

tip.

엘리먼트 오브젝트?



자바스크립트의 DOM을 배울 때

document.getElementbyid하고 인자를 전달하면

어떤 값을 리턴해주는데 리턴한 객체가 엘리먼트 오브젝트이다



tip.

CSS스타일선택자?



(#)id selector, (.)class selector, ()element selector

이러한 CSS문법이 들어가는 것이 CSS스타일선택자

---



##### wrapper의 안전한 사용(충돌을 예방)

```html
<script type="text/javascript">
//$ 대신 jQuery를 사용 *****
jQuery('body').html('hello world');
</script>

<!-- ------------------------- -->

<script type="text/javascript">
//$를 함수의 지역변수로 선언해서 외부에 있을지 모르는 타 라이브러리의 $와의 충돌을 예방
(function($){
    $('body').html('hello world');
})(jQuery)
    
//$를 함수로 *****
</script>
```



##### 제어 대상을 지정하는 방법

* ***jQuery(selector, [context])***
* ***jQuery(element)***



jQuery(selector, [context])

```html
<html>
    <body>
        <ul>
            <li>test2</li>
        </ul>
        <ul class="foo">
            <li>test</li>
        </ul>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript">
            (function($){            
                $('ul.foo').click( function() {
                    $('li', this).css('background-color','red');
                });
            })(jQuery)
        </script>
    </body>
</html>
```



jQuery(element)

```html
<html>
    <body>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript">
            jQuery(document.body).css( "background-color", "black" );
        </script>
    </body>
</html>
```





---

---



### 선택자



CSS스타일 선택자

(**api.jquery.com**)



리스트도 인덱스 값이 있다.





---

---



### chain



***chain이란***

jQuery의 메소드들은 반환값으로 자기 자신을 반환해야 한다는 규칙을 가지고 있다.

이를 이용하면 한번 선택한 대상에 대해서 연속적인 제어를 할 수 있다.



* jQuery를 이용해서 코딩하는 경우

```html
<html>
    <body>
        <a id="tutorial" href="http://jquery.com" target="_self">jQuery</a>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript">
            jQuery('#tutorial').attr('href', 'http://jquery.org').attr('target', '_blank').css('color', 'red');
        </script>
    </body>
</html>
```





* JavaScript의 DOM을 이용해서 코딩하는 경우

```html
<html>
     <body>
         <a id="tutorial" href="http://jquery.com" target="_self">jQuery</a>
         <script type="text/javascript">
             var tutorial = document.getElementById('tutorial');
             tutorial.setAttribute('href', 'http://jquery.org');
             tutorial.setAttribute('target', '_blank');
             tutorial.style.color = 'red';
         </script>
     </body>
 </html>
```



---

***chain의 장점***

* 코드가 간결해진다 (중복 X)
* 인간의 언어와 유사해서 사고의 자연스러운 과정과 일치

---





#### 탐색(traversing)



- chain의 대상을 바꿔서 체인을 계속 연장시킬 수 있는 방법
- <http://api.jquery.com/category/traversing/>
- [taeyo.net jQuery traverse 강좌](http://www.taeyo.pe.kr/Columns/View.aspx?SEQ=375&PSEQ=29)
- 너무 복잡한 chain은 코드의 가독성을 떨어 뜨릴 수 있다.



traversing을 이용해서 chain안에서 대상을 움직일 수 있다.

```html
<html>
    <body>
        <ul class="first">
            <li class="foo"> list item 1 </li>
            <li> list item 2 </li>
            <li class="bar"> list item 3 </li>
        </ul>
        <ul class="second">
            <li class="foo"> list item 1 </li>
            <li> list item 2 </li>
            <li class="bar"> list item 3 </li>
        </ul>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript">$('ul.first').find('.foo').css('background-color', 'red').end().find('.bar').css('background-color', 'green');</script>
    </body>
</html>
```

**.find()** 괄호 안을 찾아라

**.end()** 중요!!





---

---



### event



***event란***

* 시스템에서 일어나는 사건을 의미

* javascript나 jQuery에게 이벤트란 브라우저에서 일어나는 사건을 의미한다.(**클릭, 마우스 이동, 타이핑, 페이지 로딩 등**)

* 이벤트가 발생했을 때 작동할 로직을 시스템에게 알려두면 이벤트가 발생했을 때 시스템이 그 로직을 호출한다.

* 이벤트에 대한 기본적인 내용은 **자바스크립트 이벤트 편 참고**

   

***jQuery의 이벤트***

- 크로스브라우징의 문제를 해결해줌 (다른 브라우저에서 테스트 해야되는 문제를 해결)
- bind로 이벤트 핸들러를 설치하고, unbind로 제거 **(예제1)**
- trigger로 이벤트 핸들러를 강제로 실행 **(예제2)**
- click, ready와 같이 다양한 **이벤트 헬퍼(helper)**를 제공함
- live를 이용하면 현재 존재 하지 않는 엘리먼트에 이벤트 핸들러를 설치할 수 있음



 ***bind, unbind, trigger를 이용한 이벤트의 설치, 제거, 호출***

```html
<html>
    <head>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript">
            function clickHandler(e){
                alert('thank you');
            }
            $(document).bind('ready', function(){
                 $('#click_me').bind('click', clickHandler);
                 $('#remove_event').bind('click', function(e){
                     $('#click_me').unbind('click', clickHandler);
                 });
                 $('#trigger_event').bind('click', function(e){
                     $('#click_me').trigger('click');
                 });
             })
        </script>
    </head>
    <body>
        <input id="click_me" type="button" value="click me" />
        <input id="remove_event" type="button" value="unbind" />
        <input id="trigger_event" type="button" value="trigger" />
    </body>
</html>
```

**.bind**: 이벤트를 설치할 때 쓰는 메소드

**.unbind**: 이벤트를 제거할 떄 쓰는 메소드

(bind를 했을 때 이벤트 타입과 이벤트 핸들러를 동일하게 unbind로 전달해야 이벤트 핸들러가 삭제된다.)

**function()**: 익명함수

주로 사용되는 이유는 이벤트를 설치하는 함수는 재활용 되는 경우가 없기 때문에 익명함수가 주로 사용된다.



***이벤트 헬퍼!!!***

```html
<html>
    <head>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript">
            function clickHandler(e){
                alert('thank you');
            }
            $(document).ready(function(){
                 $('#click_me').click(clickHandler);
                 $('#remove_event').click(function(e){
                     $('#click_me').unbind('click', clickHandler);
                 });
                 $('#trigger_event').click(function(e){
                     $('#click_me').trigger('click');
                 });
             })
        </script>
    </head>
    <body>
        <input id="click_me" type="button" value="click me" />
        <input id="remove_event" type="button" value="unbind" />
        <input id="trigger_event" type="button" value="trigger" />
    </body>
</html>
```

*bind, unbind, trigger를 이용한 이벤트의 설치, 제거, 호출(예제1) 와 이벤트 헬퍼(예제2)는 결과는 동일하고 코딩은 다르다.*

**이벤트 헬퍼는 bind를 사용하지 않고 ready라는 메소드를 사용!!** => *간결하고 직관적(미적이고 경제적)* 

*이벤트 헬퍼가 더 많이 사용된다!!*



~~***live를 이용하면 존재하지 않는 엘리먼트에 대해서 이벤트를 설치할 수 있다.***~~

```html
<html>
    <head>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript">
            function clickHandler(e) {
                alert('thank you');
            }
            $('#click_me').live('click', clickHandler);
            $('#remove_event').live('click', function(e) {
                $('#click_me').die('click', clickHandler);
            });
            $('#trigger_event').live('click', function(e) {
                $('#click_me').trigger('click');
            });
        </script>
    </head>
    <body>
        <input id="click_me" type="button" value="click me" />
    <input id="remove_event" type="button" value="unbind" />
    <input id="trigger_event" type="button" value="trigger" />
    </body>
</html>
```

역시 결과는 같고 로직이 다르다!!

~~**live 사용**~~

~~live가 굳이 필요하지 않는 경우 사용되지 않는다.(위험이 있기 때문)~~



***live(), die() => on(), off()***





---

---



### 엘리먼트 제어(Manipulation)



문서로 만드는 것은 HTML , CSS로 가능

애플리케이션으로 만들기 위해서는 (동적으로 구현하기 위해서 (ex 구글의 gmail이나 스프레드시트 등)) JavaScript가 필요!!

JavaScript의 효율을 극대화하기 위해서는 jQuery가 필요!!



*(api.jquery.com)에서 **manipulation**에서 메소드들을 찾아보자!!*



***자식으로 삽입***

```html
<!-- http://api.jquery.com/append/ -->
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                background:yellow;
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <p>
            I would like to say:
        </p>
        <script>$("p").append("<strong>Hello</strong>");</script>
    </body>
</html>
```

p태그 안에

**.append()**: 추가하는 

.appendTo()

.html()

.prepend()

.prependTo()

.text() 





***형제로 삽입***

```html
<!-- http://api.jquery.com/after/ -->
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                background:yellow;
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <p>
            I would like to say:
        </p>
        <script>$("p").after("<b>Hello</b>");</script>
    </body>
</html>
```

p태그 옆에

**.after()**:

.before()

.insertAfter()

.insertBefore()





***부모로 감싸기***

```html
<!-- http://api.jquery.com/wrap/ -->
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                border:2px blue solid;
                margin:2px;
                padding:2px;
            }
            p {
                background:yellow;
                margin:2px;
                padding:2px;
            }
            strong {
                color:red;
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <span>Span Text</span>
        <strong>What about me?</strong>
        <span>Another One</span>
        <script>$("span").wrap("<div><div><p><em><b></b></em></p></div></div>");</script>
    </body>
</html>
```

div가 부모

span이 자녀

div안에 span

**.wrap()**:

.unwrap()

.wrapAll()

wrapInner()





***삭제***

```html
<!-- http://api.jquery.com/remove/ -->
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                background:yellow;
                margin:6px 0;
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <p>
            Hello
        </p>
        how are
        <p>
            you?
        </p>
        <button>
            Call remove() on paragraphs
        </button>
        <script>
            $("button").click( function () {
                $("p").remove();
            });
        </script>
    </body>
</html>
```

$("p").remove();

p태그라는 이름을 가지고 있는 엘리먼트들이 전부 삭제

**.remove()**:

.detach()

.empty()

.unwrap()





***치환*** => 어떤 엘리먼트를 다른 엘리먼트로 변경하는 것

```html
<!-- http://api.jquery.com/replaceAll/ -->
<!DOCTYPE html>
<html>
    <head>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <p> Hello </p>
        <p> cruel </p>
        <p> World </p>
        <script>$("<b>Paragraph. </b>").replaceAll("p"); // check replaceWith() examples        </script>
    </body>
</html>
```

.replaceAll()은 다른 문법적 구성을 가지고 있기 때문에

api.jquery.com에서 찾아보기!!

---

.replaceAll(**target**) => target이라는 인자

*target은 제어하고 하는 인자*



*교체될 엘리먼트는 .replaceAll() 앞쪽에서 선언해 놓은 엘리먼트가*

*target을 교체한다!!*

---

**.replaceAll()**:

.replaceWith()





***클래스***

```html
<!-- http://api.jquery.com/toggleClass/ -->
<!DOCTYPE html>
<html>
    <head>
        <style>p {
                margin: 4px;
                font-size:16px;
                font-weight:bolder;
                cursor:pointer;
            }
            .blue {
                color:blue;
            }
            .highlight {
                background:yellow;
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <p class="blue"> Click to toggle </p>
        <p class="blue highlight"> highlight </p>
        <p class="blue"> on these </p>
        <p class="blue"> paragraphs </p>
        <script>
             $("p").click( function () {
                 $(this).toggleClass("highlight");
             });
         </script>
    </body>
</html>
```

**.addClass()**: 클래스를 추가하는 것

**.hasClass()**: 클래스를 가지고 있는지 체크

**.removeClass()**: 클래스를 삭제하는 것

**.toggleClass()**: 클래스를 가지고 있다면 삭제하고 가지고 있지 않다면 추가해주는 것





***속성제어***

```html
<!DOCTYPE html>
<html>
    <head>
        <style>p {
                color:blue;
                margin:8px;
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <input type="text" value="some text"/>
        <p>
        </p>
        <script>$("input").keyup( function () {
                var value = $(this).val();
                $("p").text(value);
            }).keyup();</script>
    </body>
</html>
```

*빈 칸에 텍스트를 입력하면 p태그 안의 입력 값이 변한다!!*

***keyup***이라는 메소드는 사용자가 어떠한 타이핑을 누르고 떼었을 때 발생한다.(타이핑을 하면 발생한다!!)

*아래쪽의 keyup();은 트리거 이다!!*(초기값을 세팅해줄 때 주로 트리거를 사용해준다.)



**.val()**: (벨류를 줄인) 특정 엘리먼트가 가지고 있는 벨류 값을 리턴 

.attr()

.prop()

.removeAttr()

removeProp()





---

---



### 폼(Form)

***서버로 데이터를 전송하기 위한 수단***



- 서버로 데이터를 전송하기 위한 수단
- Query는 폼을 제어하는데 필요한 이벤트와 메소드를 제공한다.
- jQuery 폼 API 문서 : <http://api.jquery.com/category/forms/>



예제1.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            span {
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <p>
            <input type="text" />
            <span></span>
        </p>
        <script>
            $("input").focus( function () {
                $(this).next("span").html('focus');
            }).blur( function() {
                $(this).next("span").html('blur');
            }).change(function(e){
                alert('change!! '+$(e.target/* = this */).val());//엘리먼트 제어에서 .val() 참고
            }).select(function(){
                $(this).next('span').html('select');
            });
        </script>
    </body>
</html>
```

.focus()

.blur()

.change()

.select()





예제 2.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p {
                margin:0;
                color:blue;
            }
            div, p {
                margin-left:10px;
            }
            span {
                color:red;
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <p>
            Type 'correct' to validate.
        </p>
        <form action="javascript:alert('success!');">
            <div>
                <input type="text" />
 
                <input type="submit" />
            </div>
        </form>
        <span></span>
        <script>
            $("form").submit( function() {
                if ($("input:first").val() == "correct") {
                    $("span").text("Validated...").show();
                    return true;
                }
                $("span").text("Not valid!").show().fadeOut(1000);
                return false;
            });
        </script>
    </body>
</html>
```

.submit()

.val()



*tip.*

*fadeout*





---

---



### 탐색(Traversing)



***영상을 보면서 따라해보기***



- ***체인 컨텍스트를 유지하면서 제어의 대상이 되는 엘리먼트를 변경하는 기법***
- <http://api.jquery.com/category/traversing/>



```html
<!-- http://opentutorials.org/example/jquery/example.traversing.html -->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <style>
            body{
                font-size:11px;
                width:1000px;
            }
            #panel div,#panel li,#panel ul{
                border:2px solid black;
                margin:10px;
                padding:10px;
            }
            #panel ul{
                list-style: none;
            }
            #panel .s{
                border:2px solid red;
                background-color: #808080;
            }
            #panel #root{
                margin-top:0;
            }
            textarea{
                width:982px;
                height:100px;
                font-size:11px;
                overflow: visible;
            }        
            #help{
                float:left;
                width:500px;
                height:450px;
                overflow-y: scroll;
                overflow-x: hidden
            }
            #panel{
                float:left;
                width:500px;
            }
            #help table{
                border:1px solid gray;
                border-collapse: collapse;
                width:100%;
            }
            #help table td{
                border:1px solid gray;
                padding:5px;
            }
            #help .title{
                color:white;
                background-color:#555;
                padding:3px;
            }
            #help .title.checked{
                background-color:red;
            }
        </style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <div id="wrapper">
            <p>
                javascript을 입력 한 후에 엔터를 눌러주세요.
                <textarea id="code"></textarea></p>
            <div id="help">
                <table>
                    <tr id="add"><td><div class="title">.add(selector)</div>엘리먼트를 추가한다</td></tr>
                    <tr id="andSelf"><td><div class="title">.andSelf()</div>현재 엘리먼트 셋에 이전 엘리먼트 셋을 더 한다</td></tr>
                    <tr id="children"><td><div class="title">.children([selector])</div>자식 엘리먼트를 선택한다</td></tr>
                    <tr id="closet"><td><div class="title">.closest(selector)</div>가장 가까운 selector 조상 엘리먼트를 탐색한다</td></tr>
                    <tr id="each"><td><div class="title">.each(function(index,Element))</div>현재 엘리먼트 셋에 반복 작업을 실행한다</td></tr>
                    <tr id="end"><td><div class="title">.end()</div>이전 체인 컨텍스트로 돌아간다.</td></tr>
                    <tr id="eq"><td><div class="title">.eq(index)</div>현재 엘리먼트 셋에서 index에 해당하는 엘리먼트를 선택한다</td></tr>
                    <tr id="filter"><td><div class="title">.filter(selector)</div>현재 엘리먼트 셋에서 selector에 해당하는 엘리먼트를 선택한다</td></tr>
                    <tr id="find"><td><div class="title">.find(selector)</div>현재 엘리먼트 셋에서 selector에 해당하는 자손 엘리먼트를 선택한다</td></tr>
                    <tr id="first"><td><div class="title">.first()</div>현재 엘리먼트 셋 중 첫번째 엘리먼트를 선택한다</td></tr>
                    <tr id="last"><td><div class="title">.last()</div>현재 엘리먼트 셋 중 마지막 엘리먼트를 선택한다</td></tr>
                    <tr id="next"><td><div class="title">.next()</div>각각의 엘리먼트에 대한 다음 형재 엘리먼트를 선택한다</td></tr>
                    <tr id="nextAll"><td><div class="title">.nextAll()</div>각각의 엘리먼트에 대한 다음 형재 엘리먼트 전부를 선택한다</td></tr>
                    <tr id="prev"><td><div class="title">.prev()</div>각각의 엘리먼트에 대한 이전 형재 엘리먼트를 선택한다</td></tr>
                    <tr id="prevAll"><td><div class="title">.prevAll()</div>각각의 엘리먼트에 대한 이전 형재 엘리먼트 전부를 선택한다</td></tr>
                    <tr id="siblings"><td><div class="title">.siblings()</div>각각의 엘리먼트에 대한 형재 엘리먼트 전부를 선택한다</td></tr>
                    <tr id="slice"><td><div class="title">.slice(start, [end])</div>현제의 엘리먼트 셋 중 start에서 end까지의 엘리먼트를 선택한다</td></tr>
                </table>
            </div>
            <div id="panel">
                <div id="root">
                    div#root
                    <div>
                        div
                    </div>
                    <div>
                        div
                        <ul>
                            ul
                            <li>li</li>
                            <li>li</li>
                            <li>li</li>
                            <li>li</li>
                        </ul>
                    </div>
                    <div>
                        div
                    </div>
                </div>    
            </div>
        </div>
        <script>
            var $wrapper = $('#root').addClass('selected');
            $('#code').keydown(function(e){
                if(e.keyCode == 13){
                    eval($(this).val());
                    return false;
                }
            }).change(function(){
                    eval($(this).val());
            });
            $('tr').click(function(){
                $(this).find('.title').toggleClass('checked');
            })
        </script>
    </body>
</html>
```

**.filter()** 와 **.find()**는 혼동할 가능성이 있으니 주의하자





---

---



### 애니메이션



(effects??)

*jQuery를 이용하지 않으면 고난이도*



효과란?

- 자바 스크립트와 CSS를 HTML 요소로 사용하면 효과가 있습니다.
- jQuery의 효과적 방법을 간단하게 처리 할 수 있습니다.



예제 1

```html
<!DOCTYPE html>
<html>
    <head>
        <style>        span {
                color:red;
                cursor:pointer;
            }
            div {
                margin:3px;
                width:80px;
                height:80px;
            }
            div {
                background:#f00;
            }
</style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <input type="button" id="fadeout" value="fade out" />
        <input type="button" id="fadein" value="fade in" />
        <input type="button" id="hide" value="hide" />
        <input type="button" id="show" value="show" />
        <input type="button" id="slidedown" value="slide down" />
        <input type="button" id="slideup" value="slide up" />
        <input type="button" id="mix" value="mix" />
        <div id="target">
            target
        </div>
        <script>$('input[type="button"]').click( function(e) {
                var $this = $(e.target);
                switch($this.attr('id')) {
                    case 'fadeout':
                        $('#target').fadeOut('slow');
                        break;
                    case 'fadein':
                        $('#target').fadeIn('slow');
                        break;
                    case 'hide':
                        $('#target').hide();
                        break;
                    case 'show':
                        $('#target').show();
                        break;
                    case 'slidedown':
                        $('#target').hide().slideDown('slow');
                        break;
                    case 'slideup':
                        $('#target').slideUp('slow');
                        break;
                    case 'mix':
                        $('#target').fadeOut('slow').fadeIn('slow').delay(1000).slideUp().slideDown('slow', function(){alert('end')});//익명함수 사용 / slideDown이 끝나면 함수가 호출된다.
                        break;
                }
            }) 
        </script>
    </body>
</html>
```





예제 2

```html
 <!DOCTYPE html>
<html>
    <head>
        <style>        
            div {
                background-color:#bca;
                width:100px;
                border:1px solid green;
            }
</style>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
    </head>
    <body>
        <button id="go">
            &raquo; Run
        </button>
 
        <div id="block">
            Hello!
        </div>
        <script>/* Using multiple unit types within one animation. */
 
            $("#go").click( function() {
                $("#block").animate({
                    width: "300px",
                    opacity: 0.4,
                    marginLeft: "50px",
                    fontSize: "30px",
                    borderWidth: "10px"
                }, 3000);
            });</script>
    </body>
</html>
```

*run이라는 버튼을 클릭하면 Hello!라는 박스가 커진다.*

tip.

1000 = 1초





---

---



### ajax



나중에 공부하기 꼭!!









---

---

