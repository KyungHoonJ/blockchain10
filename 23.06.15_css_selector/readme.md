# CSS

## 단위

### 색상

- 색상 자체의 이름이 있다.

```html
<style>
  * {
    color: red;
    color: green;
  }
</style>
```

- `#`을 사용하여 16진수로 나타낼 수 있다.
  - `#`뒤의 16진수를 2개씩 3개로 나누어 각각 red, green, blue를 뜻한다.
  - ff는 10진수로 몇일까요? 255
    - 0 ~ 9 => 10
    - 16진수는 15까지는 하나의 문자로 나타내야한다.
      - 10 => a, 11 => b, ..., 15 => f
    - 16진수 10을 10진수로 바꾸면? 16
    - 16진수 15를 10진수로 바꾸면? 21

```html
<style>
  * {
    color: #ffffff;
    color: #00ff00;
    color: #aba;
    /* color:#aabbaa */
  }
</style>
```

- rgb() 함수를 사용해서 적용한다.
  - red, green, blue
  - 각각이 0~255까지 값을 가질 수 있다.
  - 빛의 세기를 뜻한다.

```html
<style>
  * {
    color: rgb(255, 0, 0);
    color: rgb(255, 255, 100);
  }
</style>
```

- rgba() 함수를 사용해서 투명도까지 설정할 수 있습니다.

```html
<style>
  * {
    color: rgba(255, 0, 0, 0);
    color: rgba(255, 255, 0, 1);
    color: rgba(255, 0, 0, 0.5);
  }
</style>
```

### 길이/크기

- px
- in
- %
  - 보통 부모의 길이를 기준으로 0%~100%까지
- vw, vh
  - viewport width, viewport height
  - %와 마찬가지로 0~100까지 이며 화면 크기를 기준으로 합니다.
- em
  - 부모의 font-size를 기준으로 합니다.
  - 부모의 font-size가 16px일 때 자식 엘리먼트에게 1em을 설정할 경우 16px로 적용된다.
- rem
  - root em, 최상위 엘리먼트의 font-size를 기준으로 합니다.
  - html이 최상위 엘리먼트입니다.
  - html의 font-size가 32px, div의 font-size를 2rem으로 설정했을 때 출력되는 크기를 px로 나타내면? 64px
