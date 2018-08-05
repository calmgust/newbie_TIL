# jQuery

##### 18.07.24. session



### Basic jQuery Syntax

* Selecting Elements

  * $(selector)

* Creating Element

  * $(html string)
  * $('<div></div>')

* It returns jQuery object(array-like)

  => return을 jQuery object로 





#### Example (in jsbin.com)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  
  <script src="https://code.jquery.com/jquery-git.js"></script>
  
  <!--
    jQuery 다운로드 필수!!
  -->
  
  <style>
    .red {
      color:red;
    }
    .bold{
      font-weight:bold;
      font-size:20px;
    }
  </style>

</head>
<body>
  
  <div id='hello'>world</div>

</body>
</html>
```

```javascript
$('#hello')
  .addClass('red')
  .on('mouseover', function(){
  $(this).addClass('bold');
})
  .on('mouseout', function(){
  $(this).removeClass('bold');
})
//마우스를 올리면 CSS 볼드, 20px / 마우스를 내리면 CSS 효과 삭제
//method chaining(줄줄이 쓴다)
```





### Useful Methods

* Manipulation
  * addClass / removeClass
  * html / text
  * append / appendTo
  * prepend / prependTo
  * remove / empty
  * val
* Event
  * on /off
* Effect
  * show / hide



```html
<body>
    
    <div id='hello'>
        world
    </div>
    
</body>
```

```javascript
$('#hello').html('asdf<b>asdf</b>asdf');
```

=> asdf**asdf**asdf

```javascript
$('#hello').text('asdf<b>asdf</b>asdf');
```

=>asdf<b>asdf</b>asdf



```html
<body>
    
    <div id="result">
        기준
    </div>
    
</body>
```

```javascript
var newEl = $('<h4>NEW</h4>')

newEl.appendTo('#result')
//=> newEl이 '#result' 아래에 붙는다.
$('#result').append(newEl)
//=> '#result'아래에 newEl이 붙는다.

newEl.prependTo('#result')
//=> newEl이 '#result' 위에 붙는다.
$('#result').prepend(newEl)
//=> '#result'위에 newEl이 붙는다.
```

append => 아래에 붙는다!!

prepend=> 위에 붙는다!!



```javascript
$('#hello')
  .on('mouseover', function(){
  $('#result').html('ssds');
})

/*
  .on('mouseout', function(){
  $('#result').remove();  
})
*/
// => element 자체를 제거

  .on('mouseout', function(){
  $('#result').empty();
})
// => element를 빈 상태로 
```

***remove() / empty()***



```javascript
var elInput = document.getElementById('querystring');
var elButton = document.querySelector('#submit');
var elResult = document.getElementById('result');

var elInput2 = $('#querystring');
var elButton2 = $('#submit');
var elResult2 = $('#result');


function changeValue(){
    //elResult.innerText = elInput.value;
    $(elResult2).text( $(elInput2).val() );
}
//DOM에서 jQuery로
```

***val()***

tip. input!!



