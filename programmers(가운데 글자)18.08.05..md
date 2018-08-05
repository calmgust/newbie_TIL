# 프로그래머스



## 가운데 글자 가져오기( level 1)



단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두 글자를 반환하면 됩니다.



제한사항

* s는 길이가 1 이상, 100 이하인 스트링입니다.



입출력 예

| s       | Return |
| ------- | ------ |
| "abcde" | "c"    |
| "qwer"  | "we"   |



```javascript
function solution(s){
    if(s.length % 2 === 1){
        return s[Math.floor(s.length / 2)];
    } else if(s.length % 2 === 0){
        return s[(s.length / 2) - 1] + s[s.length / 2];
    } 
}

//-----

function solution(s){
    return s.length % 2 === 1 ? s[Math.floor(s.length / 2)] : s[(s.length / 2) - 1] + s[s.length / 2];
}
```

