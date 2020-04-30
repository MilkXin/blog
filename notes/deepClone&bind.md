<!--
 * @Author: your name
 * @Date: 2019-11-18 22:03:58
 * @LastEditTime: 2019-11-18 22:08:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \FrontEnd\blog\notes\deepClone&bind.md
 -->
### deepClone
```
const deepClone = (arg) => {
    if (typeof arg !== 'object' || arg === null) {
        return arg
    }

    let result
    if (arg instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (const key in arg) {
        if (arg.hasOwnProperty(key)) {
            result[key] = deepClone(arg[key])
        }
    }

    return result
}
```


### bind
```
Function.prototype.myBind = function () {
    const args = [...arguments]
    const t = args.shift()
    const self = this

    return function () {
        self.apply(t, args)
    }
}

function test () {
    console.log(this.name)
}

const fun = test.myBind({name: 'chen'})
fun()
```

### 防抖
```
const button = document.getElementById('btn')
let timer = null
button.addEventListener('click', function (e) {
    if (timer) {
        clearTimeout(timer)
    }

    timer = setTimeout(() => {
        console.log('click')
        timer = null
    }, 500);
})

//封装
function debounce (fn, delay=500) {
    let timer = null
        
    return function() {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
```

### 节流
```
const button = document.getElementById('btn')
let timer = null
button.addEventListener('click', function (e) {
    if (timer) {
        return
    }

    timer = setTimeout(() => {
        console.log('click')
        timer = null
    }, 500);
})

//封装
function throttle(fn, delay=500) {
    let timer = null

    return function () {
        if (timer) {
            return
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
```

### 寻找字符串中出现次数最多的字符
```
//寻找字符串中出现次数最多的字符
function fn(str) {
    const array = str.split('')
    const obj = {}

    for (let i = 0; i < array.length; i++) {
        const key = array[i]
        if (obj[key]) {
            obj[key] += 1
        } else {
            obj[key] = 1
        }
    }

    let char = '', num = 0
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] > num) {
                char = key
                num = obj[key]
            }            
        }
    }

    return {char, num}
}

const str = 'abcabbc'
console.log(fn(str))
```

### 数组扁平化
```
// 纯数字
Array.prototype.flat = function () {
    return this.toString().split(',').map(item => +item)
}
const arr = [1, [2, 3], [4, [5, [6]]]]
const arr1 = arr.flat()
console.log(arr1); //[1, 2, 3, 4, 5, 6]


// 混合类型
function flat(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
const arr = [1, ['a', 'b'], [4, [5, [6]]]]
const arr2 = flat(arr)
console.log(arr2); //[1, 'a', 'b', 4, 5, 6]
```

### 实现instanceof
```
function instance_of(L, R) {
  //L 表示左表达式，R 表示右表达式
  var O = R.prototype; // 取 R 的显示原型
  L = L.__proto__; // 取 L 的隐式原型
  while (true) {
    if (L === null) {
      return false
    }
    if (O === L) {
      return true
    }
    L = L.__proto__;
  }
}

```
