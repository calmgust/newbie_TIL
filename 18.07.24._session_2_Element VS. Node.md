## Element VS. Node



* **Element belongs to Node**

  EventTarget <= Node <= Element <= HTMLElement <= HTMLParagraphElement



* **Text (text contents) is Node but not is element**

  EventTarget <= Node <= CharacterData <= Text



***=> element는 text를 포함하지 않는다.***



<**$0.childNodes** 와 **$0.children** 의 차이 비교>

$0.childNodes에는 text가 포함되어 있고,

$0.children에는 text가 제외되어 있다.



---



### element와 node의 차이

W3C의 DOM(Document Object Model) 스펙에 따르면, 노드 인터페이스(Node Interface)는 DOM의 가장 기본이 되는 데이터 타입이다.

노드 인터페이스를 구현한 여러 오브젝트가 있으며, 노드 타입으로 구분 할 수 있다.

ex) Element Node(엘리먼트 노드), Text Node(텍스트 노드), Attribute Node(속성 노드) 등등

***=> Node는 Element의 상위 개념이다***.



---

