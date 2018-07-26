

# jQuery



* jQuery Tutorial

  * jQuery Home

  * jQuery Intro

  * jQuery Install

  * jQuery Syntax

  * jQuery Selector

  * jQuery Events

    

* jQuery Effect

  * jQuery Hide / Show

  * jQuery Fade

  * jQuery Slide

  * jQuery Animate

  * jQuery stop()

  * jQuery Callback

  * jQuery Chaining

    

* jQuery HTML

  * jQuery Get

  * jQuery Set

  * jQuery Add

  * jQuery Remove

  * jQuery CSS Classes

  * jQuery css()

  * jQuery Dimensions

    

* jQuery Traversing

  * jQuery Traversing

  * jQuery Ancestors

  * jQuery Descendants

  * jQuery Siblings

  * jQuery Filtering

    

* jQuery AJAX

  * jQuery AJAX Intro

  * jQuery Load

  * jQuery Get / Post

    

* jQuery Misc

  * jQuery noConflict()

    

* jQuery Examples

  * jQuery Examples

  * jQuery Quiz

  * jQuery Certificate

    

* jQuery References

  * jQuery Selectors
  * jQuery Events
  * jQuery Effects
  * jQuery HTML / CSS
  * jQuery Traversing
  * jQuery AJAX
  * jQuery Misc
  * jQuery Properties





## 1강



### jQuery



***jQuery is a JavaScript Library.***

***자바스크립트 라이브러리다.***



***jQuery greatly simplifies JavaScript programming.***

***자바스크립트 프로그래밍을 단순화 시킨다.***



***jQuery is easy to learn.***

***쉽게 배울 수 있다.***



```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
}); //p태그를 클릭하면 사라진다.
</script>
</head>
<body>

<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

</body>
</html>

```





---

---



## 2강



### jQuery Introduction



* HTML
* CSS
* JavaScript



**jQuery** => "***write less, do more***"

("***적게 쓰고, 더 많이***")

### => 가성비!!



jQuery library contatins

(jQuery 라이브러리에는 다음과 같은 기능이 포함)

* HTML / DOM manipulation
* CSS manipulation
* HTML event methods
* Effects and animations
* AJAX
* Utilities





---

---



## 3강



### jQuery Install



* Download the jQuery library from jQuery.com
* Include jQuery from a CDN, like Google



---



### jQuery Download



다운로드 할 수있는 두 가지 버전의 jQuery가 있습니다.

- 제작 버전 - 압축 및 압축되어 라이브 웹 사이트 용입니다.
- 개발 버전 - 테스트 및 개발 용 (압축되지 않고 읽을 수있는 코드)

두 버전 모두 [jQuery.com](http://jquery.com/download/) 에서 다운로드 할 수 있습니다 .



```html
<head>
<script src="jquery-3.3.1.min.js"></script>
</head>
```



jQuery 라이브러리는 단일 JavaScript 파일이며 HTML <script> 태그로 참조합니다 (***<script> 태그는 <head> 섹션 안에 있어야 함***).





---

---



## 4강



### jQuery Syntax



**Basic syntax is:**

(**기본 문법**)

```javascript
$(selector).action()
```



Examples:

```javascript
$(this).hide() //hides the current element.*****
$("p").hide() //hides all <p> elements.
$(".test").hide() //hides all elements with class="test".
$("#test").hide() //hides the element with id="test".
```

***$(this).hide()***



---

#### **The Document Ready Event**

### ***기본***

```javascript
$(document).ready(function(){
    
    //jQuery methods go here...
    
})
```

jQuery는 *도큐멘트 레디 이벤트*

***먼저 jQuery 라이브러리가 로딩이 되어야 실행이 된다!!***

---

#### The element Selector



You can select all <p> elements on a page like this:

```javascript
$("p")
```



Examples:

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
// 버튼을 클릭하면 p태그를 숨긴다.
```

---

#### The #id Selector



```javascript
$("#test")
```



Examples:

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});
// 버튼을 클릭하면 test라는 id를 가진 elements를 숨긴다.
```

---

#### The .class Selector



```javascript
$(".test")
```



Examples:

```javascript
$(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    });
});
// 버튼을 클릭하면 test라는 class에 속해 있는 elements를 숨긴다.
```

---

#### More Examples of jQuery Selectors



| Syntax                     | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| $("*")                     | Selects ***all*** elements                                   |
| **$(this)**                | Selects the ***current*** HTML element                       |
| $("p.intro")               | Selects all <p> elements with class="intro" (***p태그와 class가 intro 모두에 속하는 element를***) |
| $("p:first")               | Selects the first <p> element (***첫 p태그의 element를***)   |
| $("ul li:first")           | Selects the first <li> element of the first <ul> (***ul의 첫 번째 li***) |
| $("ul li:first-child")     | Selects the first <li> element of every <ul> (***모든 ul의 첫 번째 li들***) |
| $("[href]")                | Selects all elements with an href attribute (***하이퍼 레퍼런스* 속성을 가진 것은 전부 선택**) |
| *$("a[target='_blank']")*  | Selects all <a> elements with a target attribute value equal to "_blank" (***타겟으로 언더바 블랭크가 있는 것을 전부 선택***) |
| *$("a[target!='_blank']")* | Selects all <a> elements with a target attribute value NOT equal to "_blank" (***타겟으로 언더바 블랭크가 아닌 것을 전부 선택***) |
| $(":button")               | Selects all <button> elements and <input> elements of type="button" (***모든 버튼을 선택***) |
| *$("tr:even")*             | Selects all even <tr> elements (***테이블의 짝수 번째들을 선택***) |
| *$( "tr:odd")*             | Selects all odd <tr> elements (***테이블의 홀수 번째들을 선택***) |

---

---



## 5강



### jQuery Event Method



***Event***

visitor's actions



Examples:

* moving a mouse over an element
* selecting a radio button
* clicking on an element



---

#### ***DOM events:***

| Mouse Events | Keyboard Events | Form Events | Document/Window Events |
| ------------ | --------------- | ----------- | ---------------------- |
| click        | keypress        | submit      | load                   |
| dblclick     | keydown         | change      | resize                 |
| mouseenter   | keyup           | focus       | scroll                 |
| mouseleave   |                 | blur        | unload                 |

___

#### jQuery Syntax for Event Methods



To assign a click event to all paragraphs on an page, you can do this:

(클릭 이벤트 할당)

```javascript
$("p").click();
```



The next step is to define what should happen when the event fires. You must pass a function to the event:

```javascript
$("p").click(function(){
    // action goes here!!
    // ex) 사라지거나 경고창을 띄우는
});
```

---

#### Commonly Used jQuery Event Methods



### ***$ (document) .ready ()***





* ***click()***

Examples:

```javascript
$("p").click(function(){
    $(this).hide();
});
```



* ***dblclick()***

Examples:

```javascript
$("p").dblclick(function(){
    $(this).hide();
});
```



* ***mouseenter()***

(*마우스를 가져다 대는 것*)

Examples:

```javascript
$("#p1").mouseenter(function(){
    alert("You entered p1!");
});
```



* ***mouseleave()***

(마우스를 떼는 것)

Examples:

```javascript
$("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
});
```



* *mousedown()*

(마우스 왼쪽 버튼을 누를 때(누르는 순간))

Examples:

```javascript
$("#p1").mousedown(function(){
    alert("Mouse down over p1!");
});
```



* *mouseup()*

(마우스 왼쪽 버튼을 누를 때(떼는 순간))

Examples:

```javascript
$("#p1").mousedown(function(){
    alert("Mouse up over p1!");
});
```



* *hover()*

Examples:

```javascript
$("#p1").hover(function(){
    alert("You entered p1!");
},
function(){
    alert("Bye! You now leave p1!");
});
```



* ***focus()***

(마우스를 클릭 해놓으면 색이 변한다.)

Examples:

```javascript
$("input").focus(function(){
    $(this).css("background-color", "#cccccc");
});
```



* ***blur()***

(마우스가 클릭 된 곳에서 다른 곳을 클릭하면 변했던 색이 다시 원래로 돌아온다.)

Examples:

```javascript
$("input").blur(function(){
    $(this).css("background-color", "#ffffff");
});
```





=> 외울 필요는 전혀 없다.

필요할 때 마다 찾아서 쓰자



---

---



## 6강



### jQuery Effects

##### (Hide and Show)



---

#### jQuery hide() and show()



**syntax**

```javascript
$(selector).hide(speed,callback);

$(selector).show(speed,callback);
```

tip.

***speed***

ex) "fast" / "slow" / "1초 = 1000"

***callback***

다음 챕터에서...



Examples:

```javascript
$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});
```



```javascript
$("button").click(function(){
    $("p").hide(1000);
});
```

---

#### jQuery toggle()

(*스위치로 껐다 켰다 하는 것* )



### 스위치!!



**syntax**

```javascript
$(selector).toggle(speed,callback);
```



Examples:

```javascript
$("button").click(function(){
    $("p").toggle();
});
```

---

#### jQuery Effect Methods

| Method        | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| animate()     | Runs a custom animation on the selected elements             |
| clearQueue()  | Removes all remaining queued functions from the selected elements |
| delay()       | Sets a delay for all queued functions on the selected elements |
| dequeue()     | Removes the next function from the queue, and then executes the function |
| fadeIn()      | Fades in the selected elements                               |
| fadeOut()     | Fades out the selected elements                              |
| fadeTo()      | Fades in/out the selected elements to a given opacity        |
| fadeToggle()  | Toggles between the fadeIn() and fadeOut() methods           |
| finish()      | Stops, removes and completes all queued animations for the selected elements |
| hide()        | Hides the selected elements                                  |
| queue()       | Shows the queued functions on the selected elements          |
| show()        | Shows the selected elements                                  |
| slideDown()   | Slides-down (shows) the selected elements                    |
| slideToggle() | Toggles between the slideUp() and slideDown() methods        |
| slideUp()     | Slides-up (hides) the selected elements                      |
| stop()        | Stops the currently running animation for the selected elements |
| toggle()      | Toggles between the hide() and show() methods                |









