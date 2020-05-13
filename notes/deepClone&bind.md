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
### call
```
/* Function.prototype.myCall = function() {
    const args = [...arguments]
    var context = args.shift() || window
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
} */

Function.prototype.myCall = function() {
    let [thisArg, ...args] = [...arguments]
    if (!thisArg) {
        //context为null或是undefined
        thisArg = typeof window === 'undefined' ? global : window
    }
    //this的指向是当前函数 func (func.call)
    thisArg.func = this
    //执行函数
    let result = thisArg.func(...args)
    //thisArg上并没有func属性，因此需要删除
    delete thisArg.func
    return result
}
```
### apply
```
/* Function.prototype.myApply = function () {
    const args = [...arguments]
    var context = args.shift() || window
    context.fn = this
    const result = context.fn(...([].concat(...args)))
    delete context.fn
    return result
} */

Function.prototype.myApply = function(thisArg, rest) {
    let result
    if (!thisArg) {
        thisArg = typeof window === 'undefined' ? global : window
    }
    thisArg.func = this
    if (!rest) {
        //第二个参数为null或undefined
        result = thisArg.func()
    } else {
        result = thisArg.func(...rest)
    }
    delete thisArg.func
    return result
}
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

### 数组去重
```
function uniq(arr) {
    return [...new Set(arr)]
}

function uniq(arr) {
    const result = []
    for (let i=0; i<arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}
```

### 实现instanceof
```
function instance_of(left, right) {
    const prototype = right.prototype
    proto = left.__proto__
    while(true) {
        if( proto === null) {
            return false
        }
        
        if(prototype === proto) {
            return true
        }
        proto = proto.__proto__
    }
}

```

### 跨浏览器事件处理程序封装
```
//跨浏览器事件处理程序
const eventUtil = {
    //添加句柄
    addHandler: function(element, type, handle) {
        if (element.addEventListener) {
            //dom2级事件处理程序
            element.addEventListener(type, handle, false)
        } else if (element.attachEvent) {
            //IE事件处理程序
            element.attachEvent('on' + type, handle)
        } else {
            //dom0级事件处理程序
            element['on' + type] = handle
        }
    },
    //删除句柄
    removeHandler: function (element, type, handle) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handle, false)
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handle)
        } else {
            element['on' + type] = null
        }
    }
}
```

### 洗牌算法
```
// 著名的Fisher–Yates shuffle 洗牌算法
function shuffle(arr) {
    let m = arr.length;
    while (m > 1) {
        let index = parseInt(Math.random() * m--);
        [arr[index], arr[m]] = [arr[m], arr[index]];
    }
    return arr;
}
```
