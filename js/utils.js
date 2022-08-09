// 计算阶乘
const factorial = (number) =>
  number < 0
    ? (() => {
      throw new TypeError('类型错误');
    })()
    : number <= 1
    ? 1
    : number * factorial(number - 1);

factorial(4); // 24
factorial(10); // 3628800



// 判断当前环境是否为浏览器
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // false (Node)
isBrowser(); // true (browser)



// 判断当前环境是否为Node.js
const isNode = () =>
  typeof process !== 'undefined' &&
  !!process.versions &&
  !!process.versions.node;

isNode(); // true (Node)
isNode(); // false (browser)



//获取url参数
const getURLParams = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  );

getURLParams('qq.com'); // {}
getURLParams('https://xx.com?name=tntweb&age=20');
// {name: 'tntweb', age: '20'}



// 字符串串的字节数
const byteSize = str => new Blob([str]).size;

byteSize('🚗'); // 4
byteSize('Hello World'); // 11
