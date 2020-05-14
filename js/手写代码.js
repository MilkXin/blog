//深拷贝
function deepClone(arg) {
    if (arg instanceof RegExp) return new RegExp(arg)
    if (arg instanceof Date) return new Date(arg)
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



//bind
Function.prototype.bind2 = function() {
    const args = [...arguments]
    const t = args.shift()
    const self = this
    return function() {
        self.apply(t, args)
    }
}

/* function test() {
    console.log(this.name)
}
test.bind2({name: 'chen'})() */


//防抖
function debounce(fn, delay=500) {
    let timer = null
    
    return function() {
        if (timer) {
            clearTimeout(timer)
            return
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay);
    }
}

//节流
function throttle(fn, delay) {
    let timer = null

    return function() {
        if (timer) {
            return
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay);
    }
}


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

    return { char, num }
}

/* const str = 'abcabbc'
console.log(fn(str)) */


//数组扁平化
function flat(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

//数组去重
function uniq(arr) {
    const result = []
    for (let i=0; i<arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

/* const arr = [1, ['a', 'b'], [4, [5, [6]]]]
const arr2 = flat(arr)
console.log(arr2); //[1, 'a', 'b', 4, 5, 6] */


//实现instanceof
function instance_of(left, right) {
    const prototype = right.prototype
    let proto = left.__proto__
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


//call
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

//apply
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

//手动实现new过程
/*
1. 创建一个空对象，构造函数中的this指向这个空对象
2. 这个新对象被执行[[原型]] 连接
3. 执行构造函数方法，属性和方法被添加到this引用的对象中
4. 如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。 */
function _new() {
    let target = {}
    let [ constructor, ...args ] = [...arguments]
    target.__proto__ = constructor.prototype
    let result = constructor.apply(target, args)
    if (result && (typeof result === 'object' || typeof result === 'function')) {
        return result
    }

    return target
}


//函数柯里化
//函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
//作用：1. 参数复用
//     2. 提前返回 – 返回接受余下的参数且返回结果的新函数
//     3. 延迟执行 – 返回新函数，等待执行
const curry = (fn, ...args) => {
    return args.length < fn.length
    ? (...arguments) => curry(fn, ...args, ...arguments)
    : fn(...args)
}

/* function sumFn(a, b, c) {
    return a + b + c
}
const sum = curry(sumFn)
console.log('>> ', sum(2)(3)(5)); */

// 著名的Fisher–Yates shuffle 洗牌算法
function shuffle(arr) {
    let m = arr.length;
    while (m > 1) {
        let index = parseInt(Math.random() * m--);
        [arr[index], arr[m]] = [arr[m], arr[index]];
    }
    return arr;
}


//汉诺塔
function hanio(n, x, y, z) {
    if(n === 0) {
        return
    }
    hanio(n-1, x, z, y)
    move(n, x, z)
    hanio(n-1, y, x, z)
}
function move(id, from, to) {
    console.log(`把${id}从${from} --> ${to}`)
}
// hanio(3, 'A', 'B', 'C')

//斐波拉契数列
function fibonacci(n) {
    if(n<=1) {
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
