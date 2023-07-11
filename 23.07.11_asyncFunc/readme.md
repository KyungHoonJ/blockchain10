# 재귀 함수 Stack Overflow

```js
function func2(num) {
  console.log(num);
  //   if (!num) return 0;
  func2(num - 1);
}
```

- func2(10)
  - num = 10;
  - func2(10 - 9)
    - num = 9;
    - func2(9 - 1)
      - num = 8;
      - func2(8 - 1)
        - num = 7;
        - func2(7 - 1)
          - num = 6;
          - func2(6 - 1)
            - num = 5;
            - func2(5 - 1)
              - num = 4;
              - func2(4 - 1)
                - num = 3;
                - func2(3 - 1)
                  - num = 2;
                  - func2(2 - 1)
                    - num = 1;
                    - func2(1 - 1)
                      - num = 0;
                      - func2(0 - 1)
                        - num = -1;
                        - func2(-1 - 1)
                          - ...

```js
function func2(num) {
  console.log(num);
  if (!num) return 0;
  func2(num - 1);
}
```

- func2(10)
  - num = 10;
  - if(!10) X
  - func2(10 - 9)
    - num = 9;
    - if(!9) X
    - func2(9 - 1)
      - num = 8;
      - if(!8) X
      - func2(8 - 1)
        - num = 7;
        - if(!7) X
        - func2(7 - 1)
          - num = 6;
          - if(!6) X
          - func2(6 - 1)
            - num = 5;
            - if(!5) X
            - func2(5 - 1)
              - num = 4;
              - if(!4) X
              - func2(4 - 1)
                - num = 3;
                - if(!3) X
                - func2(3 - 1)
                  - num = 2;
                  - if(!2) X
                  - func2(2 - 1)
                    - num = 1;
                    - if(!1) X
                    - func2(1 - 1)
                      - num = 0;
                      - if(!0) return 0;
