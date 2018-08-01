

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



### jQuery!



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



### jQuery Effects!

##### (Hide and Show)



---

#### jQuery hide() and show()



### Effect 중에 Hide and Show가 중요!!



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

tip.

*한 번씩 실행해보자!!*



* ***animate()***

(지정 애니메이션을 실행)

```javascript
$("button").click(function(){
    $("#box").animate({height: "300px"});
});//박스가 늘어난다
```

Examples:

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#box").animate({height: "300px"});
    });
    $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
    });
});
</script>
</head>
<body>

<button id="btn1">Animate height</button>
<button id="btn2">Reset height</button>

<div id="box" style="background:#98bf21;height:100px;width:100px;margin:6px;"></div>

</body>
</html>
```



* ***clearQueue()***

(선택한 요소에서 대기 열에 있는 나머지 기능을 모두 제거)

```javascript
$("button").click(function(){
    $("div").clearQueue();
});//기능을 정지?
```

Examples:

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("#start").click(function(){
        $("div").animate({height: 300}, 1500);
        $("div").animate({width: 300}, 1500);
        $("div").animate({height: 100}, 1500);
        $("div").animate({width: 100}, 1500);
    });
    $("#stop").click(function(){
        $("div").clearQueue();
    });
});
</script> 
</head>
<body>

<button id="start">Start Animation</button>
<button id="stop">Stop Animation</button>
<br><br>

<div style="background:red;height:100px;width:100px;"></div>
 
</body>
</html>
```



* ***delay***

(선택한 요소에서 모든 대기 열 기능에 대한 지연을 설정합니다.)

**"slow" / "fast" / 1000 = 1초**

```javascript
$("button").click(function(){
    $("#div1").delay("slow").fadeIn();
    $("#div2").delay("fast").fadeIn();
});
```

Examples:

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").delay("slow").fadeIn();
    $("#div2").delay("fast").fadeIn();
    $("#div3").delay(800).fadeIn();
    $("#div4").delay(2000).fadeIn();
    $("#div5").delay(4000).fadeIn();
  });
});
</script>
</head>
<body>

<p>This example sets different speed values for the delay() method.</p>
<button>Click to fade in boxes with a delay</button>
<br><br>

<div id="div1" style="width:90px;height:90px;display:none;background-color:black;"></div><br>
<div id="div2" style="width:90px;height:90px;display:none;background-color:green;"></div><br>
<div id="div3" style="width:90px;height:90px;display:none;background-color:blue;"></div><br>
<div id="div4" style="width:90px;height:90px;display:none;background-color:red;"></div><br>
<div id="div5" style="width:90px;height:90px;display:none;background-color:purple;"></div><br>

</body>
</html>
```

 



---

---



## 7강



### jQuery Effects

##### (Fading)



* fadeIn()
* fadeOut()
* fadeToggle()
* fadeTo()



---



* ***fadeIn()***

**Syntax:**

```javascript
$(selector).fadeIn(speed, callback);
```

선택자 지정하고 페이드인을 한다.

속도 지정하고 콜백



Examples:

```javascript
$("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});
</script>
</head>
<body>

<p>Demonstrate fadeOut() with different parameters.</p>

<button>Click to fade out boxes</button><br><br>

<div id="div1" style="width:80px;height:80px;background-color:red;"></div><br>
<div id="div2" style="width:80px;height:80px;background-color:green;"></div><br>
<div id="div3" style="width:80px;height:80px;background-color:blue;"></div>

</body>
</html>
```



* ***fadeOut()***

**Syntax:**

```javascript
$(selector).fadeOut(speed, callback);
```

Examples:

```javascript
$("button").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});
</script>
</head>
<body>

<p>Demonstrate fadeOut() with different parameters.</p>

<button>Click to fade out boxes</button><br><br>

<div id="div1" style="width:80px;height:80px;background-color:red;"></div><br>
<div id="div2" style="width:80px;height:80px;background-color:green;"></div><br>
<div id="div3" style="width:80px;height:80px;background-color:blue;"></div>

</body>
</html>
```



* ***fadeToggle()***

**Syntax:**

```javascript
$(selector).fadeToggle(speed, callback);
```

토글은 스위치!!



Examples:

```javascript
$("button").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});
</script>
</head>
<body>

<p>Demonstrate fadeToggle() with different speed parameters.</p>

<button>Click to fade in/out boxes</button><br><br>

<div id="div1" style="width:80px;height:80px;background-color:red;"></div>
<br>
<div id="div2" style="width:80px;height:80px;background-color:green;"></div>
<br>
<div id="div3" style="width:80px;height:80px;background-color:blue;"></div>

</body>
</html>
```



* ***fadeTo()***

**Syntax:**

```javascript
$(selector).fadeTo(speed,opacity,callback);
```

fadeTo()의 경우 opacity가 포함!!

(opacity => 투명도(0에서 1사이))



Examples:

```javascript
$("button").click(function(){
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });
});
</script>
</head>
<body>

<p>Demonstrate fadeTo() with different parameters.</p>

<button>Click to fade boxes</button><br><br>

<div id="div1" style="width:80px;height:80px;background-color:red;"></div><br>
<div id="div2" style="width:80px;height:80px;background-color:green;"></div><br>
<div id="div3" style="width:80px;height:80px;background-color:blue;"></div>

</body>
</html>
```





---

---



## 8강



### jQuery Effects

##### (Sliding)



* slideDown()
* slideUp()
* slideToggle()



---



* ***slideDown()***

**Syntax:**

```javascript
$(selector).slideDown(speed,callback);
```

Examples:

```javascript
$("#flip").click(function(){
    $("#panel").slideDown();
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});
</script>
 
<style> 
#panel, #flip {
    padding: 5px;
    text-align: center;
    background-color: #e5eecc;
    border: solid 1px #c3c3c3;
}

#panel {
    padding: 50px;
    display: none;
}
</style>
</head>
<body>
 
<div id="flip">Click to slide down panel</div>
<div id="panel">Hello world!</div>

</body>
</html>
```



* ***slideUp()***

**Syntax:**

```javascript
$(selector).slideUp(speed,callback);
```

Examples:

```javascript
$("#flip").click(function(){
    $("#panel").slideUp();
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideUp("slow");
    });
});
</script>
 
<style> 
#panel, #flip {
    padding: 5px;
    text-align: center;
    background-color: #e5eecc;
    border: solid 1px #c3c3c3;
}

#panel {
    padding: 50px;
}
</style>
</head>
<body>
 
<div id="flip">Click to slide up panel</div>
<div id="panel">Hello world!</div>

</body>
</html>
```



* ***slideToggle()***

**Syntax:**

```javascript
$(selector).slideToggle(speed,callback);
```

토글은 스위치!!



Examples:

```javascript
$("#flip").click(function(){
    $("#panel").slideToggle();
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
</script>

<style> 
#panel, #flip {
    padding: 5px;
    text-align: center;
    background-color: #e5eecc;
    border: solid 1px #c3c3c3;
}

#panel {
    padding: 50px;
    display: none;
}
</style>
</head>
<body>
 
<div id="flip">Click to slide the panel down or up</div>
<div id="panel">Hello world!</div>

</body>
</html>
```





---

---



## 9강



### jQuery Effects

##### (Animation)



* ***animate()***

**Syntax:**

```javascript
$(selector).animate({params},speed,callback);
```

Examples:

```javascript
$("button").click(function(){
    $("div").animate({left: '250px'});
}); //왼쪽에 250px만큼 공간을 두고 이동
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '250px'});
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>
```



* ***animate()*** - **(Manipulate Multiple Properties)**



tip.

복합적



Examples:

```javascript
$("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); 
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>
```



* ***animate()*** - (**Using Relative Values)**



tip.

+= : 상대적 증가

-= : 상대적 감소



Examples:

```javascript
$("button").click(function(){
    $("div").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
});
/*
relative
+=(상대적 증가) / -=(상대적 감소)
*/
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>
```



* ***animate()*** - **(Using Pre-defined Values)**



tip.

toggle

### 스위치!!



Examples:

```javascript
$("button").click(function(){
    $("div").animate({
        height: 'toggle'
    });
}); 
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            height: 'toggle'
        });
    });
});
</script> 
</head>
<body>

<p>Click the button multiple times to toggle the animation.</p>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>
```



* ***animate()*** - **(Uses Queue Functionality)**



tip.

#### 순서!!(연속적 / 하나씩)



Examples. 1

```javascript
$("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
}); 
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

</body>
</html>

```



Examples. 2

```javascript
$("button").click(function(){
    var div = $("div");
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
}); 
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");  
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
});
</script> 
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:200px;position:absolute;">HELLO</div>

</body>
</html>
```





---

---



## 10강



### jQuery Stop Animation



* ***stop()***

동작 중인 애니메이션을 멈춘다!!



**Syntax:**

```javascript
$(selector).stop(stopAll,goToEnd);
```



tip. *전부 기본 값은 아니다!*(이해가 잘 안됨!!)

**stopAll**: 전부 멈출지 / 현재 진행 중인 것만 멈출지

(기본값으로는 현재 진행 중인 것만 멈춘다.)

**goToEnd**: 멈추었을 때 처음부터 다시 시작할 것 인지



기본 값이 아니라는 것이 비어있어도 된다는 의미?

비어있어도 동작은 한다!!



Examples:

```javascript
$("#stop").click(function(){
    $("#panel").stop();
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script> 
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });
});
</script>
 
<style> 
#panel, #flip {
    padding: 5px;
    font-size: 18px;
    text-align: center;
    background-color: #555;
    color: white;
    border: solid 1px #666;
    border-radius: 3px;
}

#panel {
    padding: 50px;
    display: none;
}
</style>
</head>
<body>
 
<button id="stop">Stop sliding</button>

<div id="flip">Click to slide down panel</div>
<div id="panel">Hello world!</div>

</body>
</html>
```





---

---



## 11강



### jQuery Callback Function



***주고 있는 효과가 다 끝났을 때 실행되는 함수***

***콜백 함수는 현재 효과가 끝난 후에 실행 됩니다.***



일반적인 구문

Typical syntax:

```javascript
 $(selector).hide(speed,callback);
```



tip.

**speed**: 대기시간 ("slow", "fast", "1000", ...)

**callback**: 콜백 함수

ex) 10초 후(**speed**)에 hide기능(**callback**)을 실행한다!!



**Example with Callback**

```javascript
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });
});
</script>
</head>
<body>

<button>Hide</button>

<p>This is a paragraph with little content.</p>

</body>
</html>
```



**Example without Callback**

```javascript
$("button").click(function(){
    $("p").hide(1000);
    alert("The paragraph is now hidden");
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide(1000);
        alert("The paragraph is now hidden");
    });
});
</script>
</head>
<body>

<button>Hide</button>

<p>This is a paragraph with little content.</p>

</body>
</html>
```





---

---



## 12강



### jQuery Chaining



***동일한 요소에서 여러 jQuery명령을 차례로 실행***



Example:

```javascript
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```

*선택자 #p1에서 css기능 slideUp기능 slideDown기능을 순서대로 실행!!*

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});
</script>
</head>
<body>

<p id="p1">jQuery is fun!!</p>

<button>Click me</button>

</body>
</html>
```



Example:

```javascript
$("#p1").css("color", "red")
  .slideUp(2000)
  .slideDown(2000);
```

*jQuery는 관대한 언어라 이런 식으로 작성하여도 오류가 발생하지 않는다!!*





---

---



## 13강



### jQuery HTML!

#### (Get Content and Attributes)



---

### ***jQuery DOM Manipulation***

#### ***(DOM = Document Object Model)***

#### ***(문서 객체 모델)***

*문서들의 여러 부분들을 object로 모듈화 시켜 트리 형태로  나타내는 것을 DOM이라고 한다.*

(브라우저에서 시각적으로 볼 때 그 많은 것들은 표준화 된 DOM이라는 것을 이용해서 쉽게 처리)

jQuery는 이러한 DOM을 간단하게 다룰 수 있는 장점이 있다. (***내용 이해 필수!!***)

---



* ***text()*** - 선택한 요소의 텍스트 내용을 설정하거나 반환합니다.
* ***html()*** - 선택한 요소의 내용을 설정하거나 반환합니다(HTML 마크 업 포함).
* ***val()*** - 양식 필드의 값을 설정하거나 반환합니다.
* ***attr()*** - href의 속성값을 가져오는 방법



Example: text() / html()

```javascript
$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
});
</script>
</head>
<body>

<p id="test">This is some <b>bold</b> text in a paragraph.</p>

<button id="btn1">Show Text</button>
<button id="btn2">Show HTML</button>

</body>
</html>
```

**text()** =>

Text: This is some bold text in a paragraph.



**html()** =>

HTML: This is some <b>bold</b> text in a paragraph.





Example: val()

```javascript
$("#btn1").click(function(){
    alert("Value: " + $("#test").val());
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        alert("Value: " + $("#test").val());
    });
});
</script>
</head>
<body>

<p>Name: <input type="text" id="test" value="Mickey Mouse"></p>

<button>Show Value</button>

</body>
</html>
```

**val()** =>

Value: Mickey Mouse





Example: attr()

```javascript
$("button").click(function(){
    alert($("#w3s").attr("href"));
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        alert($("#w3s").attr("href"));
    });
});
</script>
</head>
<body>

<p><a href="https://www.w3schools.com" id="w3s">W3Schools.com</a></p>

<button>Show href Value</button>

</body>
</html>
```

**attr()** =>

https://www.w3schools.com





---

---



## 14강



### jQuery Add Elements



* ***append()*** - 선택한 요소의 끝에 내용을 삽입합니다.
* ***prepend()*** - 선택한 요소의 시작 부분에 내용을 삽입합니다.
* ***after()*** - 선택한 요소 뒤에 내용을 삽입
* ***before()*** - 선택한 요소 앞에 내용을 삽입



Example: append()

```javascript
$("p").append("Some appended text.");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function(){
        $("ol").append("<li>Appended item</li>");
    });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>

<button id="btn1">Append text</button>
<button id="btn2">Append list items</button>

</body>
</html>
```



Example: prepend()

```javascript
$("p").prepend("Some prepended text.");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").prepend("<b>Prepended text</b>. ");
    });
    $("#btn2").click(function(){
        $("ol").prepend("<li>Prepended item</li>");
    });
});
</script>
</head>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>

<button id="btn1">Prepend text</button>
<button id="btn2">Prepend list item</button>

</body>
</html>
```



Example: 여러 가지 새로운 element 추가 방법 (**중요!!**)

```javascript
function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("body").append(txt1, txt2, txt3);      // Append the new elements 
}
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
function appendText() {
    var txt1 = "<p>Text.</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";               // Create text with DOM
    $("body").append(txt1, txt2, txt3);     // Append new elements
}
</script>
</head>
<body>

<p>This is a paragraph.</p>
<button onclick="appendText()">Append text</button>

</body>
</html>
```

*jQuery가 가장 간편?*



Example: after() / before()

```javascript
$("img").after("Some text after");

$("img").before("Some text before");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#btn1").click(function(){
        $("img").before("<b>Before</b>");
    });

    $("#btn2").click(function(){
        $("img").after("<i>After</i>");
    });
});
</script>
</head>
<body>

<img src="/images/w3jquery.gif" alt="jQuery" width="100" height="140"><br><br>

<button id="btn1">Insert before</button>
<button id="btn2">Insert after</button>

</body>
</html>
```



Example: 여러가지 새로운 element 추가 방법(**중요!!**)

```javascript
function afterText() {
    var txt1 = "<b>I </b>";                    // Create element with HTML  
    var txt2 = $("<i></i>").text("love ");     // Create with jQuery
    var txt3 = document.createElement("b");    // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
}
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
function afterText() {
    var txt1 = "<b>I </b>";                   // Create element with HTML
    var txt2 = $("<i></i>").text("love ");    // Create with jQuery
    var txt3 = document.createElement("b");   // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);      // Insert new elements after img
}
</script>
</head>
<body>

<img src="/images/w3jquery.gif" alt="jQuery" width="100" height="140">

<p>Click the button to insert text after the image.</p>

<button onclick="afterText()">Insert after</button>

</body>
</html>
```

tip.

txt1 => 볼드체

txt2 => 이텔릭체

txt3 => 볼드체





### jQuery Remove Elements



* ***remove()*** - 선택된 요소 (및 그 자식 요소)를 제거합니다.
* ***empty()*** - 선택한 요소에서 자식 요소를 제거합니다.



tip.

*둘의 차이는*

*remove()는 전체를 제거*

*empty()는 자식 요소(child element)만 제거*



Example: remove()

```javascript
$("#div1").remove();
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").remove();
    });
});
</script>
</head>
<body>

<div id="div1" style="height:100px;width:300px;border:1px solid black;background-color:yellow;">

This is some text in the div.
<p>This is a paragraph in the div.</p>
<p>This is another paragraph in the div.</p>

</div>
<br>

<button>Remove div element</button>

</body>
</html>
```



Example: empty()

```javascript
$("#div1").empty();
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").empty();
    });
});
</script>
</head>
<body>

<div id="div1" style="height:100px;width:300px;border:1px solid black;background-color:yellow;">

This is some text in the div.
<p>This is a paragraph in the div.</p>
<p>This is another paragraph in the div.</p>

</div>
<br>

<button>Empty the div element</button>

</body>
</html>
```



Example: Filter the Elements to be Removed

(제거할 요소 ***필터링***)

예제. 1 : .test(test class)만 remove!!

```javascript
$("p").remove(".test");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").remove(".test");
    });
});
</script>
<style>
.test {
    color: red;
    font-size: 20px;
}
</style>
</head>
<body>

<p>This is a paragraph.</p>
<p class="test">This is another paragraph.</p>
<p class="test">This is another paragraph.</p>

<button>Remove all p elements with class="test"</button>

</body>
</html>
```

예제. 2 : .test / .demo (test class / demo class)만 remove!!

```javascript
$("p").remove(".test, .demo");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").remove(".test, .demo");
    });
});
</script>
<style>
.test {
    color: red;
    font-size: 20px;
}

.demo {
    color: green;
    font-size: 25px;
}
</style>
</head>
<body>

<p>This is a paragraph.</p>
<p class="test">This is p element with class="test".</p>
<p class="test">This is p element with class="test".</p>
<p class="demo">This is p element with class="demo".</p>

<button>Remove all p elements with class="test" and class="demo"</button>

</body>
</html>
```





---

---



## 15강



### jQuery - CSS!

##### (Get and Set CSS Classes)



#### jQuery Manipulating CSS



* ***addClass()*** - 선택한 요소에 하나 이상의 클래스를 추가합니다.
* ***removeClass()*** - 선택한 요소에서 하나 이상의 클래스를 제거합니다.
* ***toggleClass()*** - 선택한 요소에서 클래스를 추가 / 제거 토글 (**스위치**)
* ***css()*** - 스타일 속성을 설정하거나 반환합니다.



Tip.

```css
.important {
    font-weight: bold;
    font-size: xx-large;
}

.blue {
    color: blue;
}
```

*아래의 예제에서는 위의 CSS가 공통적으로 사용된다!!*



Example: addClass()

```javascript
$("button").click(function(){
    $("h1, h2, p").addClass("blue");
    $("div").addClass("important");
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important");
    });
});
</script>
<style>
.important {
    font-weight: bold;
    font-size: xx-large;
}

.blue {
    color: blue;
}
</style>
</head>
<body>

<h1>Heading 1</h1>
<h2>Heading 2</h2>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<div>This is some important text!</div><br>

<button>Add classes to elements</button>

</body>
</html>
```

*addClass()매서드 내에서 여러 클래스를 지정할 수 도 있다*

```javascript
$("button").click(function(){
    $("#div1").addClass("important blue");
});
```

*" " 내에서 띄어쓰기!!*

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").addClass("important blue");
    });
});
</script>
<style>
.important {
    font-weight: bold;
    font-size: xx-large;
}

.blue {
    color: blue;
}
</style>
</head>
<body>

<div id="div1">This is some text.</div>
<div id="div2">This is some text.</div>
<br>

<button>Add classes to first div element</button>

</body>
</html>
```



Example: removeClass()

```javascript
$("button").click(function(){
    $("h1, h2, p").removeClass("blue");
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("h1, h2, p").removeClass("blue");
    });
});
</script>
<style>
.important {
    font-weight: bold;
    font-size: xx-large;
}

.blue {
    color: blue;
}
</style>
</head>
<body>

<h1 class="blue">Heading 1</h1>
<h2 class="blue">Heading 2</h2>

<p class="blue">This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Remove class from elements</button>

</body>
</html>
```



Example: toggleClass()

```javascript
$("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("h1, h2, p").toggleClass("blue");
    });
});
</script>
<style>
.blue {
    color: blue;
}
</style>
</head>
<body>

<h1>Heading 1</h1>
<h2>Heading 2</h2>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Toggle class</button>

</body>
</html>
```





#### jQuery css() Method



***CSS의 속성 반환***

지정된 CSS속성의 값을 반환하려면 다음 구문을 사용

```javascript
css("propertyname");
```



Example:

```javascript
$("p").css("background-color");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        alert("Background color = " + $("p").css("background-color"));
    });
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p style="background-color:#ff0000">This is a paragraph.</p>
<p style="background-color:#00ff00">This is a paragraph.</p>
<p style="background-color:#0000ff">This is a paragraph.</p>

<button>Return background-color of p</button>

</body>
</html>
```

*Background 컬러의 rgb 값을 보여준다.*

=> Background color = rgb(255, 0, 0)



***CSS의 속성 설정*** **중요!!**  

지정된 CSS의 속성을 설정하려면 다음 구문을 사용

```javascript
css("propertyname","value");
```

**하나의 CSS의 속성을 사용하기 위해서는 *,(쉼표)*를 사용해야 한다.**



Example:

```javascript
$("p").css("background-color", "yellow");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").css("background-color", "yellow");
    });
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p style="background-color:#ff0000">This is a paragraph.</p>
<p style="background-color:#00ff00">This is a paragraph.</p>
<p style="background-color:#0000ff">This is a paragraph.</p>

<p>This is a paragraph.</p>

<button>Set background-color of p</button>

</body>
</html>
```



***여러 CSS의 속성 설정*** **중요!!**

여러 CSS의 속성을 사용하려면 다음 구문을 사용

```javascript
css({"propertyname":"value","propertyname":"value",...});
```

**여러 개의 CSS의 속성을 사용하기 위해서는 *:(콜론)*을 사용해야한다.**



Example:

```javascript
$("p").css({"background-color": "yellow", "font-size": "200%"});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
    });
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p style="background-color:#ff0000">This is a paragraph.</p>
<p style="background-color:#00ff00">This is a paragraph.</p>
<p style="background-color:#0000ff">This is a paragraph.</p>

<p>This is a paragraph.</p>

<button>Set multiple styles for p</button>

</body>
</html>
```



***jQuery CSS Method 참고***

| Method                                                       | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [addClass()](https://www.w3schools.com/jquery/html_addclass.asp) | Adds one or more class names to selected elements            |
| [after()](https://www.w3schools.com/jquery/html_after.asp)   | Inserts content after selected elements                      |
| [append()](https://www.w3schools.com/jquery/html_append.asp) | Inserts content at the end of selected elements              |
| [appendTo()](https://www.w3schools.com/jquery/html_appendto.asp) | Inserts HTML elements at the end of selected elements        |
| [attr()](https://www.w3schools.com/jquery/html_attr.asp)     | Sets or returns attributes/values of selected elements       |
| [before()](https://www.w3schools.com/jquery/html_before.asp) | Inserts content before selected elements                     |
| [clone()](https://www.w3schools.com/jquery/html_clone.asp)   | Makes a copy of selected elements                            |
| [css()](https://www.w3schools.com/jquery/css_css.asp)        | Sets or returns one or more style properties for selected elements |
| [detach()](https://www.w3schools.com/jquery/html_detach.asp) | Removes selected elements (keeps data and events)            |
| [empty()](https://www.w3schools.com/jquery/html_empty.asp)   | Removes all child nodes and content from selected elements   |
| [hasClass()](https://www.w3schools.com/jquery/html_hasclass.asp) | Checks if any of the selected elements have a specified class name |
| [height()](https://www.w3schools.com/jquery/css_height.asp)  | Sets or returns the height of selected elements              |
| [html()](https://www.w3schools.com/jquery/html_html.asp)     | Sets or returns the content of selected elements             |
| [innerHeight()](https://www.w3schools.com/jquery/html_innerheight.asp) | Returns the height of an element (includes padding, but not border) |
| [innerWidth()](https://www.w3schools.com/jquery/html_innerwidth.asp) | Returns the width of an element (includes padding, but not border) |
| [insertAfter()](https://www.w3schools.com/jquery/html_insertafter.asp) | Inserts HTML elements after selected elements                |
| [insertBefore()](https://www.w3schools.com/jquery/html_insertbefore.asp) | Inserts HTML elements before selected elements               |
| [offset()](https://www.w3schools.com/jquery/css_offset.asp)  | Sets or returns the offset coordinates for selected elements (relative to the document) |
| [offsetParent()](https://www.w3schools.com/jquery/css_offsetparent.asp) | Returns the first positioned parent element                  |
| [outerHeight()](https://www.w3schools.com/jquery/html_outerheight.asp) | Returns the height of an element (includes padding and border) |
| [outerWidth()](https://www.w3schools.com/jquery/html_outerwidth.asp) | Returns the width of an element (includes padding and border) |
| [position()](https://www.w3schools.com/jquery/css_position.asp) | Returns the position (relative to the parent element) of an element |
| [prepend()](https://www.w3schools.com/jquery/html_prepend.asp) | Inserts content at the beginning of selected elements        |
| [prependTo()](https://www.w3schools.com/jquery/html_prependto.asp) | Inserts HTML elements at the beginning of selected elements  |
| [prop()](https://www.w3schools.com/jquery/html_prop.asp)     | Sets or returns properties/values of selected elements       |
| [remove()](https://www.w3schools.com/jquery/html_remove.asp) | Removes the selected elements (including data and events)    |
| [removeAttr()](https://www.w3schools.com/jquery/html_removeattr.asp) | Removes one or more attributes from selected elements        |
| [removeClass()](https://www.w3schools.com/jquery/html_removeclass.asp) | Removes one or more classes from selected elements           |
| [removeProp()](https://www.w3schools.com/jquery/html_removeprop.asp) | Removes a property set by the prop() method                  |
| [replaceAll()](https://www.w3schools.com/jquery/html_replaceall.asp) | Replaces selected elements with new HTML elements            |
| [replaceWith()](https://www.w3schools.com/jquery/html_replacewith.asp) | Replaces selected elements with new content                  |
| [scrollLeft()](https://www.w3schools.com/jquery/css_scrollleft.asp) | Sets or returns the horizontal scrollbar position of selected elements |
| [scrollTop()](https://www.w3schools.com/jquery/css_scrolltop.asp) | Sets or returns the vertical scrollbar position of selected elements |
| [text()](https://www.w3schools.com/jquery/html_text.asp)     | Sets or returns the text content of selected elements        |
| [toggleClass()](https://www.w3schools.com/jquery/html_toggleclass.asp) | Toggles between adding/removing one or more classes from selected elements |
| [unwrap()](https://www.w3schools.com/jquery/html_unwrap.asp) | Removes the parent element of the selected elements          |
| [val()](https://www.w3schools.com/jquery/html_val.asp)       | Sets or returns the value attribute of the selected elements (for form elements) |
| [width()](https://www.w3schools.com/jquery/css_width.asp)    | Sets or returns the width of selected elements               |
| [wrap()](https://www.w3schools.com/jquery/html_wrap.asp)     | Wraps HTML element(s) around each selected element           |
| [wrapAll()](https://www.w3schools.com/jquery/html_wrapall.asp) | Wraps HTML element(s) around all selected elements           |
| [wrapInner()](https://www.w3schools.com/jquery/html_wrapinner.asp) | Wraps HTML element(s) around the content of each selected element |

 



----

---



## 16강



### jQuery Dimensions (면적)



* ***width()*** - 너비(폭) (element만의)
* ***height()*** - 높이 (element만의)
* ***innerWidth()*** - 내부 폭 (element를 포함한 padding까지)
* ***innerHeight()*** - 내부 높이 (element를 포함한 padding까지)
* ***outerWidth()*** - 외부 폭 (element와 padding을 포함한 border까지)
* ***outerHeight()*** - 외부 높이 (element와 padding을 포함한 border까지)
* ***outerWidth(true)*** - 전체 폭 (margin 포함)
* ***outerHeight(true)*** - 전체 높이 (margin 포함)



![jQuery Dimensions](https://www.w3schools.com/jquery/img_jquerydim.gif)





***jQuery의 width()와 height() Method***



Example

```javascript
$("button").click(function(){
    var txt = "";
    txt += "Width: " + $("#div1").width() + "</br>";
    txt += "Height: " + $("#div1").height();
    $("#div1").html(txt);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height();
        $("#div1").html(txt);
    });
});
</script>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
</head>
<body>

<div id="div1"></div>
<br>

<button>Display dimensions of div</button>

<p>width() - returns the width of an element.</p>
<p>height() - returns the height of an element.</p>

</body>
</html>
```



***jQuery의 innerWidth()와 innerHeight() Methods***



Example

```javascript
$("button").click(function(){
    var txt = "";
    txt += "Inner width: " + $("#div1").innerWidth() + "</br>";
    txt += "Inner height: " + $("#div1").innerHeight();
    $("#div1").html(txt);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
        txt += "Inner height of div: " + $("#div1").innerHeight();
        $("#div1").html(txt);
    });
});
</script>
</head>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
<body>

<div id="div1"></div>
<br>

<button>Display dimensions of div</button>

<p>innerWidth() - returns the width of an element (includes padding).</p>
<p>innerHeight() - returns the height of an element (includes padding).</p>

</body>
</html>
```



***jQuery의 outerWidth()와 outerHeight() Methods***



Example . 1

```javascript
$("button").click(function(){
    var txt = "";
    txt += "Outer width: " + $("#div1").outerWidth() + "</br>";
    txt += "Outer height: " + $("#div1").outerHeight();
    $("#div1").html(txt);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Outer width of div: " + $("#div1").outerWidth() + "</br>";
        txt += "Outer height of div: " + $("#div1").outerHeight();
        $("#div1").html(txt);
    });
});
</script>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
</head>
<body>

<div id="div1"></div>
<br>

<button>Display dimensions of div</button>

<p>outerWidth() - returns the width of an element (includes padding and border).</p>
<p>outerHeight() - returns the height of an element (includes padding and border).</p>

</body>
</html>
```



Example . 2

```javascript
$("button").click(function(){
    var txt = "";
    txt += "Outer width (+margin): " + $("#div1").outerWidth(true) + "</br>";
    txt += "Outer height (+margin): " + $("#div1").outerHeight(true);
    $("#div1").html(txt);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Outer width of div (margin included): " + $("#div1").outerWidth(true) + "</br>";
        txt += "Outer height of div (margin included): " + $("#div1").outerHeight(true);
        $("#div1").html(txt);
    });
});
</script>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
</head>
<body>

<div id="div1"></div>
<br>

<button>Display dimensions of div</button>

<p>outerWidth(true) - returns the width of an element (includes padding, border, and margin).</p>
<p>outerHeight(true) - returns the height of an element (includes padding, border, and margin).</p>

</body>
</html>
```



***jQuery More width() and height()***



Example . 1

```javascript
$("button").click(function(){
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "x" + $(document).height() + "\n";
    txt += "Window width/height: " + $(window).width();
    txt += "x" + $(window).height();
    alert(txt);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });
});
</script>
</head>
<body>

<button>Display dimensions of document and window</button>

</body>
</html>
```



Example . 2

```javascript
$("button").click(function(){
    $("#div1").width(500).height(500);
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").width(500).height(500);
    });
});
</script>
<style>
#div1 {
    height: 100px;
    width: 300px;
    padding: 10px;
    margin: 3px;
    border: 1px solid blue;
    background-color: lightblue;
}
</style>
</head>
<body>

<div id="div1"></div>
<br>

<button>Resize div</button>

</body>
</html>
```





---

---



## 17강



### jQuery Traversing!



**Traversing**

*브라우저 상에서 지정된 DOM(Tree)내에서 자유자재로 이동이 가능*!



traverse

가로지르다 / 횡단하다 / 넘다 / 건너다



![jQuery í¬ê¸°](https://www.w3schools.com/jquery/img_travtree.png)



Illustration explained:

* <div> element는 <ul>의 parent 이자 ancestor
* <ul> element는 <li>의 parent이고 <div>의 child
* left <li> element는 <span>의 parent이고 <ul>의 child이고 <div>의 descendant
* <span> element는 left <li>의 child이고 <ul>과<div>의 descendant
* 양쪽 <li>는 siblings(형제) (그들은 같은 부모를 공유한다.)
* right <li> element는 <b>의 parent이고 <ul>의 child이고  <div>의 descendant
* <b> element는 right <li>의 child이고 <ul>, <div>의 descendant





#### Ancestors



* ***parent()*** - 상위
* ***parents()*** - 모든 상위
* ***parentsUntil()*** - 





***parent()***



Example

```javascript
$(document).ready(function(){
    $("span").parent();
});
```

tip.

*span이라는 element의 parent*



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("span").parent().css({"color": "red", "border": "2px solid red"});
});

//span이라는 element의 parent의 CSS를 수정!

</script>
</head>
<body>

<div class="ancestors">
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (grandparent)  
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>   
  </div>

  <div style="width:500px;">div (grandparent)   
    <p>p (direct parent)
        <span>span</span>
      </p> 
  </div>
</div>

</body>
</html>
```

tip.

*span이라는 element의 parent의 CSS를 수정!*





***parents()***



Example . 1

```javascript
$(document).ready(function(){
    $("span").parents();
});
```

tip.

*span이라는 element의 모든 parents*



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("span").parents().css({"color": "red", "border": "2px solid red"});
});

//span이라는 element의 모든 parents들의 CSS

</script>
</head>

<body class="ancestors">body (great-great-grandparent)
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (grandparent)  
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>   
  </div>
</body>

<!-- The outer red border, before the body element, is the html element (also an ancestor) -->
</html>
```

tip.

*span이라는 element의 모든 parents들의 CSS를 수정*



Example . 2 **특정 상위** 

(괄호 속에 내용을 채워 넣을 수 있다!)

```javascript
$(document).ready(function(){
    $("span").parents("ul");
});
```

tip.

상위 중에 특정한 부분만!



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("span").parents("ul").css({"color": "red", "border": "2px solid red"});
});
</script>
</head>

<body class="ancestors">body (great-great-grandparent)
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (grandparent)  
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>   
  </div>
</body>

</html>
```

tip.

*span의 parents 중 ul태그만!*





***parentsUntil()***

(괄호 속에 내용을 채워 넣을 수 있다!)



Example

```javascript
$(document).ready(function(){
    $("span").parentsUntil("div");
});
```

tip.

*span 상위 div까지!!*

*상위까지 중간 태그도 포함*



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.ancestors * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("span").parentsUntil("div").css({"color": "red", "border": "2px solid red"});
});
</script>
</head>

<body class="ancestors"> body (great-great-grandparent)
  <div style="width:500px;">div (great-grandparent)
    <ul>ul (grandparent)  
      <li>li (direct parent)
        <span>span</span>
      </li>
    </ul>   
  </div>
</body>
```





#### Descendants



* ***children()*** - 하위
* ***find()*** -





***children()***



Example . 1

```javascript
$(document).ready(function(){
    $("div").children();
});
```

tip.

*div의 바로 아래 자식만!*



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.descendants * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("div").children().css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body>

<div class="descendants" style="width:500px;">div (current element) 
  <p>p (child)
    <span>span (grandchild)</span>     
  </p>
  <p>p (child)
    <span>span (grandchild)</span>
  </p> 
</div>

</body>
</html>
```



Example . 2 **특정 부분**

```javascript
$(document).ready(function(){
    $("div").children("p.first");
});
```

tip.

*div 아래의 클래스가 first인 것만!*



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.descendants * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("div").children("p.first").css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body>

<div class="descendants" style="width:500px;">div (current element) 
  <p class="first">p (child)
    <span>span (grandchild)</span>     
  </p>
  <p class="second">p (child)
    <span>span (grandchild)</span>
  </p> 
</div>

</body>
</html>
```





***find()***



Example . 1

```javascript
$(document).ready(function(){
    $("div").find("span");
});
```

tip.

*div 아래에 span을 찾아라*



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.descendants * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("div").find("span").css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body>

<div class="descendants" style="width:500px;">div (current element) 
  <p>p (child)
    <span>span (grandchild)</span>     
  </p>
  <p>p (child)
    <span>span (grandchild)</span>
  </p> 
</div>

</body>
</html>
```

tip.

*div 아래에 span을 찾아서 CSS효과를 넣어라*



Example . 2

```javascript
$(document).ready(function(){
    $("div").find("*");
});
```

tip.

***div 아래에 전체를 선택!!*** (전체)



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.descendants * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("div").find("*").css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body>

<div class="descendants" style="width:500px;">div (current element) 
  <p>p (child)
    <span>span (grandchild)</span>     
  </p>
  <p>p (child)
    <span>span (grandchild)</span>
  </p> 
</div>

</body>
</html>
```





#### Siblings



* ***siblings()*** - 형제 요소를 반영

  

* ***next()*** - 선택한 요소의 다음 형제 요소

* ***nextAll()*** - 선택한 요소의 다음 모든 형제 요소

* ***nextUntil()*** - 주어진 두 인수 사이에 있는 모든 다음 형제 요소

  

* ***prev()*** - 선택한 요소의 이전 형제 요소

* ***prevAll()*** - 선택한 요소의 이전 모든 형제 요소

* ***prevUntil()*** - 주어진 두 인수 사이에 있는 모든 이전 형제 요소





***siblings()***



Example . 1

```javascript
$(document).ready(function(){
    $("h2").siblings();
});
```

tip.

*본인을 제외한 다른 모든 형제 요소들*



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("h2").siblings().css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>

</body>
</html>
```

tip.

*본인을 제외한 다른 모든 형제 요소들*



Example . 2

```javascript
$(document).ready(function(){
    $("h2").siblings("p");
});
//h2의 형제 중 p
```

(h2의 형제 중 p)

tip.

*특정 형제 요소*



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("h2").siblings("p").css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>

</body>
</html>
```





***next()***



Example

```javascript
$(document).ready(function(){
    $("h2").next();
});
```

tip.

선택한 h2 요소의 다음 형제 요소



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("h2").next().css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>

</body>
</html>
```





***nextAll()***



Example

```javascript
$(document).ready(function(){
    $("h2").nextAll();
});
```



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("h2").nextAll().css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <p>p</p>
</div>

</body>
</html>
```





***nextUntil()***



Example

```javascript
$(document).ready(function(){
    $("h2").nextUntil("h6");
});
```

tip.

***h2부터 h6까지***



```javascript
<!DOCTYPE html>
<html>
<head>
<style>
.siblings * { 
    display: block;
    border: 2px solid lightgrey;
    color: lightgrey;
    padding: 5px;
    margin: 15px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("h2").nextUntil("h6").css({"color": "red", "border": "2px solid red"});
});
</script>
</head>
<body class="siblings">

<div>div (parent)
  <p>p</p>
  <span>span</span>
  <h2>h2</h2>
  <h3>h3</h3>
  <h4>h4</h4>
  <h5>h5</h5>
  <h6>h6</h6>
  <p>p</p>
</div>

</body>
</html>
```





#### Filtering



* ***first()*** - 지정된 요소의 첫 번째 요소를 반환

* ***last()*** - 지정된 요소의 마지막 요소를 반환

  

* ***eq()*** - 선택된 요소의 특정 인덱스 번호가 있는 요소를 반환

  

* ***filter()*** - 기준과 일치하지 않는 요소는 선택 항목에서 제거되고 일치하는 요소는 반환

* ***not()*** - 조건과 일치하지 않는 모든 요소를 반환



**not()은 filter()의 반대!!**





***first()***



Example

```javascript
$(document).ready(function(){
    $("div").first();
});
```

tip.

*div의 첫 번째 요소를 반환*



```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("div").first().css("background-color", "yellow");
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>This is a paragraph.</p>

<div style="border: 1px solid black;">
  <p>A paragraph in a div.</p>
  <p>Another paragraph in a div.</p>
</div>
<br>

<div style="border: 1px solid black;">
  <p>A paragraph in another div.</p>
  <p>Another paragraph in another div.</p>
</div>
<br>

<div style="border: 1px solid black;">
  <p>A paragraph in another div.</p>
  <p>Another paragraph in another div.</p>
</div>

</body>
</html>
```





***last()***



Example

```javascript
$(document).ready(function(){
    $("div").last();
});
```

tip.

*div의 마지막 요소를 반환*



```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("div").last().css("background-color", "yellow");
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>This is a paragraph.</p>

<div style="border: 1px solid black;">
  <p>A paragraph in a div.</p>
  <p>Another paragraph in a div.</p>
</div>
<br>

<div style="border: 1px solid black;">
  <p>A paragraph in another div.</p>
  <p>Another paragraph in another div.</p>
</div>
<br>

<div style="border: 1px solid black;">
  <p>A paragraph in another div.</p>
  <p>Another paragraph in another div.</p>
</div>

</body>
</html>
```





***eq()*** **- 인덱스!!**



Example

```javascript
$(document).ready(function(){
    $("p").eq(1);
});
```

tip.

*p태그에서 인덱스 값이 1인 것*



```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("p").eq(1).css("background-color", "yellow");
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>My name is Donald (index 0).</p>
<p>Donald Duck (index 1).</p>
<p>I live in Duckburg (index 2).</p>
<p>My best friend is Mickey (index 3).</p>

</body>
</html>
```





***filter()*** **- 일치하는 요소**



Example

```javascript
$(document).ready(function(){
    $("p").filter(".intro");
});
```



```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("p").filter(".intro").css("background-color", "yellow");
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>My name is Donald.</p>
<p class="intro">I live in Duckburg.</p>
<p class="intro">I love Duckburg.</p>
<p>My best friend is Mickey.</p>

</body>
</html>
```





***not()*** **- 일치하지 않는 요소**



Example

```javascript
$(document).ready(function(){
    $("p").not(".intro");
});
```



```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("p").not(".intro").css("background-color", "yellow");
});
</script>
</head>
<body>

<h1>Welcome to My Homepage</h1>

<p>My name is Donald.</p>
<p class="intro">I live in Duckburg.</p>
<p class="intro">I love Duckburg.</p>
<p>My best friend is Mickey.</p>

</body>
</html>
```





---

---



## 18강



### AJAX



**AJAX = Asynchronous JavaScript and XML**

Asynchronous => 비동기화



***특정 영역에 지정된(필요한) 부분만 불러오는 것이 AJAX***





#### jQuery 

#### - AJAX load() Method

##### (서버와 통신을 한다!)



**Syntax**:

```javascript
$(selector).load(URL,data,callback);
```

*서버에서 클라이언트에게 내용을 불러준다.*



**demo_test.txt** (ex 서버에 있는 문서)

```javascript
<h2>jQuery and AJAX is FUN!!!</h2>
<p id="p1">This is some text in a paragraph.</p>
```



Example . 1

```javascript
$("#div1").load("demo_test.txt");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt");
    });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

</body>
</html>
```



Example . 2 **(특정 내용만 불러오기)**

```javascript
$("#div1").load("demo_test.txt #p1");
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt #p1");
    });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

</body>
</html>
```



선택적 callback 매개변수

* responseTxt - 호출이 성공하면 결과 컨텐트를 포함합니다.
* statusTxt - 호출 상태를 포함합니다.
* xhr - XMLHttpRequest 객체를 포함합니다.



Example

```javascript
$("button").click(function(){
    $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});
```



```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

</body>
</html>
```





#### jQuery AJAX Method



| Method                                                       | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [$.ajax()](https://www.w3schools.com/jquery/ajax_ajax.asp)   | Performs an async AJAX request                               |
| $.ajaxPrefilter()                                            | Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax() |
| [$.ajaxSetup()](https://www.w3schools.com/jquery/ajax_ajaxsetup.asp) | Sets the default values for future AJAX requests             |
| $.ajaxTransport()                                            | Creates an object that handles the actual transmission of Ajax data |
| [$.get()](https://www.w3schools.com/jquery/ajax_get.asp)     | Loads data from a server using an AJAX HTTP GET request      |
| [$.getJSON()](https://www.w3schools.com/jquery/ajax_getjson.asp) | Loads JSON-encoded data from a server using a HTTP GET request |
| $.parseJSON()                                                | Deprecated in version 3.0, use [JSON.parse()](https://www.w3schools.com/js/js_json_parse.asp) instead. Takes a well-formed JSON string and returns the resulting JavaScript value |
| [$.getScript()](https://www.w3schools.com/jquery/ajax_getscript.asp) | Loads (and executes) a JavaScript from a server using an AJAX HTTP GET request |
| [$.param()](https://www.w3schools.com/jquery/ajax_param.asp) | Creates a serialized representation of an array or object (can be used as URL query string for AJAX requests) |
| [$.post()](https://www.w3schools.com/jquery/ajax_post.asp)   | Loads data from a server using an AJAX HTTP POST request     |
| [ajaxComplete()](https://www.w3schools.com/jquery/ajax_ajaxcomplete.asp) | Specifies a function to run when the AJAX request completes  |
| [ajaxError()](https://www.w3schools.com/jquery/ajax_ajaxerror.asp) | Specifies a function to run when the AJAX request completes with an error |
| [ajaxSend()](https://www.w3schools.com/jquery/ajax_ajaxsend.asp) | Specifies a function to run before the AJAX request is sent  |
| [ajaxStart()](https://www.w3schools.com/jquery/ajax_ajaxstart.asp) | Specifies a function to run when the first AJAX request begins |
| [ajaxStop()](https://www.w3schools.com/jquery/ajax_ajaxstop.asp) | Specifies a function to run when all AJAX requests have completed |
| [ajaxSuccess()](https://www.w3schools.com/jquery/ajax_ajaxsuccess.asp) | Specifies a function to run when an AJAX request completes successfully |
| [load()](https://www.w3schools.com/jquery/ajax_load.asp)     | Loads data from a server and puts the returned data into the selected element |
| [serialize()](https://www.w3schools.com/jquery/ajax_serialize.asp) | Encodes a set of form elements as a string for submission    |
| [serializeArray()](https://www.w3schools.com/jquery/ajax_serializearray.asp) | Encodes a set of form elements as an array of names and values |





#### jQuery

#### - AJAX get() and post() Method



##### HTTP Request: GET vs. POST



* **GET** - Requests data from a specified resource

  (지정된 리소스에서 데이터를 요청합니다.)

  Ex) 검색엔진에서 검색하고 검색 결과를 받는 것

  

* **POST** - Submits data to be processed to a specified resource

  (처리할 데이터를 자원에 제출합니다.)

  Ex) 비밀번호 입력하거나 회원가입할 때 입력하는 것





***jQuery $.get() Method***



**Syntax:**

```javascript
$.get(URL,callback);
```

Example

```javascript
$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.get("demo_test.asp", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});
</script>
</head>
<body>

<button>Send an HTTP GET request to a page and get the result back</button>

</body>
</html>
```





***jQuery $.post() Method***



**Syntax:**

```javascript
$.post(URL,data,callback);
```

Example

```javascript
$("button").click(function(){
    $.post("demo_test_post.asp",
    {
        name: "Donald Duck",
        city: "Duckburg"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
```

```javascript
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.post("demo_test_post.asp",
        {
          name: "Donald Duck",
          city: "Duckburg"
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});
</script>
</head>
<body>

<button>Send an HTTP POST request to a page and get the result back</button>

</body>
</html>
```





---

---



## 19강



### jQuery Misc!



#### jQuery - The noConflict() Method





YOUTUBE에서 jQuery 튜토리얼

https://www.youtube.com/watch?v=2PDC3lLi2FE&index=2&list=PLsGh7Wc318kgN8_X1f833ah9IfC8KbNs7



w3schools.com

https://www.w3schools.com/jquery/jquery_noconflict.asp

