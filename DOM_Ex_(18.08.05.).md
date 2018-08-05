# DOM

## (Document Object Model)



##### 18.07.24. session



### Example (in jsbin.com)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

  <input type='text' id='querystring'>
  <button id='submit'>click</button>
  
  <div id='result'>여기에 결과 출력</div>
  
</body>
</html>
```

```javascript
var elInput = document.getElementById('querystring');
var elButton = document.querySelector('#submit');
var elResult = document.getElementById('result');

function changeValue () {
  elResult.innerText = elInput.value;
}

elButton.onclick = changeValue;
elInput.onkeydown = changeValue;
//입력 시 클릭없이 바로 결과 출력

//-----

/*
elButton.onclick = function() {
  elResult.innerText = elInput.value;
}
클릭 시 결과 출력
*/
```

