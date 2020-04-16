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
```
