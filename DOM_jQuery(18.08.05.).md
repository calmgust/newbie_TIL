# DOM / jQuery



## DOM과 jQuery 비교



##### 18.07.24. session



### Example (in jsbin.com)



```javascript
// DOM

var elInput = document.getElementById('querystring');
var elButton = document.querySelector('#submit');
var elResult = document.getElementById('result');

//-----


//jQuery

var elInput2 =$('#querystring');
var elButton2 =$('#submit');
var elResult2 =$('#result');


function changeValue () {
  elResult.innerText = elInput.value;
}

//=====

//DOM

elButton.onclick = changeValue;
elInput.onkeydown = changeValue;
//입력 시 클릭없이 바로 결과 출력

/*
elButton.onclick = function() {
  elResult.innerText = elInput.value;
}
클릭 시 결과 출력
*/

//-----


//jQuery

elButton2.on('click', changeValue);
elInput2.on('keydown', changeValue);

//=====

//DOM

function createButton() {
  var btn = document.createElement("Button");
  var t = document.createTextNode("Click me!");
  btn.appendChild(t);
  document.body.appendChild(btn);
}

createButton();

//-----


// jQuery

function createButton2 () {
  var btn = $('<button>Click Me jquery!</button>');
  $('body').append(btn);
}

createButton2();
```

