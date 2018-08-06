### JSON.stringify() / .toSting() 차이



Example

```javascript
//Object

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};

person.toString();
// => "[object Object]"

JSON.stringify(person);
// => "{"firstName":"Joe","lastName":"Blow"}"
```

