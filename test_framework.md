# Test Framework



## 필요한 이유



코드가 알맞은 코드인지 확인하기 위해

정형화된 틀을 매번 직접 작성하기는 까다롭기 때문에 프레임워크를 사용

간단하고 쉽게 코드를 테스트하기 위함



* 프레임워크란?

  소프트웨어 제작을 편리하게 할 수 있도록 미리 정형화된 틀을 만들어 모아놓은 것.

  간단하게 말해서 프로그램을 처음부터 만드는 것이 아니고, 이미 잘 만들어진 틀 위에서 만드는 것



## Mocha 소개



***Mocha***는 Node.js와 웹 브라우저 환경에서 JavaScript 코드를 테스트 할 수 있게 해주는 테스트 프레임워크



***Chai***는 assertion을 위한 라이브러리



## 사용법



1. **describe**

   *describe는 테스트 제목*

   ```javascript
   describe('테스트 제목', function(){
       // 테스트 코드
   });
   ```

2. **it**

   *it은 테스트에 대한 설명*

   ```javascript
   describe('제목', function(){
       it('설명', function(){
           // 테스트 코드
       });
   });
   ```

   * `it('설명');` 와 같이 테스트 코드를 작성하지 않으면 pending상태로 나타납니다. 



3. **assertion**

   *assertion*을 위한 대표적인 라이브러리로는 ***chai***



   * ***mocha***의 기본 assertion을 사용해 보기

   ```javascript
   describe('제목', function(){
       it('설명', function(){
           assert.equal(코드1, 코드2);
       });
   });
   ```

   **<u>코드1과 코드2가 같아야 함을 의미</u>**



   * ***chai***의 assertion 스타일에는 크게 3가지

     **: Expert, Should, Assert**



     **BDD(Behavior-Driven Development)스타일** : <u>Expect / Should</u>

     **TDD(Test-Driven Development)스타일 :** <u>Assert</u>



---



#### Expect / Should



BDD 스타일의 assertion

: BDD는 비즈니스 요구사항에 집중하여 테스트 케이스를 만드는 방식

자연어와 유사하게 코드를 작성



Ex)

`expect('hello').to.equal('hello');`

`expect('hello').to.be.a('string');`

`'hello'.should.equal('hello');`

`'hello'.should.be.a('string');`



---



#### assert



TDD 스타일의 assertion

: TDD는 테스트에 집중하여 코드를 작성하는 것

assert는 하나의 메소드로써 테스트를 진행



Ex)

`assert.equal(123, '123', '==와 같은 검사입니다');`

`assert.notEqual(3, 4, '!=와 같은 검사입니다');`

`assert.strictEqual(true, true, '===와 같은 검사입니다');`

`assert.notStrictEqual(5, '5', '!==와 같은 검사입니다');`

