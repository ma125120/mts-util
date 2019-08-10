## ts的函数式编程 [![Build Status](https://travis-ci.org/ma125120/mts-util.svg?branch=master)](https://travis-ci.org/ma125120/mts-util)

- compose
- curry
- first
- last
- prop
- wait

## 使用

<b>compose支持泛型</b>

```javascript
const firstName = compose<string>(
  prop(`name`),
  first,
)

firstName的类型为 (args: any[]) => string
```

慢慢再完善吧。