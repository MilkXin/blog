## js 字符串方法

- **charAt**返回字符串指定位置的字符,如果不在 0~str.length-1 之间，则返回一个空字符串

  ```
  var str = 'abcde'
  str.charAt(3) // d
  str.charAt(20) // ''
  ```

- **charCodeAt**返回字符串指定位置的字符编码

  ```
  var str = 'abcde'
  str.charCodeAt(3) // 100
  str.charCodeAt(20) // NaN
  ```

- **includes**字符串是否包含某个字符

  ```
  var str = 'abcde'
  str.includes('a') // true
  ```

- **trim**去除字符串前后空格
  ```
  var str = ' abc de '
  str.trim() // 'abc de'
  ```
- **trimStart**去除字符串头部空格
- **trimEnd**去除字符串尾部空格

- **padStart**字符串头部补齐
- **padEnd**字符串尾部补齐

- **repeat**字符串复制指定次数

  ```
  var str = 'abc'
  str.repeat(2) // 'abcabc'
  ```

- **toUpperCase**用于把字符串转换为大写
  **toLowerCase**用于把字符串转换为小写

  ```
  var str = 'aBcD'
  str.toUpperCase() // 'ABCD'
  str.toLowerCase() // 'abcd'
  ```

- **startsWith**
  **endsWith**

  ```
  var str = 'abcde'
  str.startsWith('a') // true
  str.endsWith('D') // true
  ```

- **indexOf**返回一个字符在字符串中首次出现的位置
- **lastIndexOf**返回一个字符在字符串中最后一次出现的位置

  ```
  var str1 = 'abcdcefcg';
  console.log(str1.indexOf('c')) // '2'
  console.log(str1.lastIndexOf('c')) // '7'
  ```

- **substr**按指定长度截取字符串,第二参数不传则一直截取到字符串末尾
- **substring**按起始，终止（不包含）下标截取字符串

  ```
  var str = 'ABCDE';
  str.substr(2) // 'CDE'
  str.substring(2) // 'CDE'
  str.substr(1, 3) // 'BCD'
  str.substring(1, 3)   // 'BC'
  ```

- **slice**提取字符串的片断，并把提取的字符串作为新的字符串返回出来

  ```
  var str = 'abcdefg';
  str.slice() // 'abcdefg', 不传递参数默认复制整个字符串
  str.slice(1) // 'bcdefg',传递一个，则为提取的起点，然后到字符串结尾
  str.slice(2, str.length-1) // 'cdef',传递两个，为提取的起始点和结束点
  ```

- **split**使用指定的分隔符将一个字符串拆分为多个子字符串，并将其以数组形式返回

  ```
  var str = 'abcde';
  str.split() // ['abcde']
  str.split('') // ['a', 'b', 'c', 'd', 'e']
  str.split('b') // ['a', 'cde']
  ```

- **concat**返回一个两个或者两个以上的字符串拼接的字符串，不改变原字符串

  ```
  var str1 = 'abcdefg', str2 = '1234567';
  var str3 = str1.concat(str2);
  console.log(str3) // 'abcdefg1234567'
  ```

- **match**在字符串内检索指定的值，或找到一个或多个正则表达式的匹配，并返回一个包含该搜索结果的数组

  ```
  var str = '2018年结束了，2019年开始了，2020年就也不远了';
    var rex = /\d+/g  // 这里是定义匹配规则，匹配字符串里的1到多个数字
    str,match(rex)  //输出符合匹配规则的内容，以数组形式返回 ['2018', '2019', '2020']
    str.match('20')// 不使用正则 ["20", index: 0, input: "2018年结束了，2019年开始了"]
  ```

- **replace**把一个目标字符串当中的文本，替换成自己需要的字符。replace 接收两个参数，参数一是需要替换掉的字符或者一个正则的匹配规则，参数二，需要替换进去的字符，参数二，可以换成一个回调函数

  ```
  var str = '2018年结束了，2019年开始了，2020年就也不远了',str1='',str2='';
  var rex = /\d+/g  // 这里是定义匹配规则，匹配字符串里的1到多个数字
  str1 = str.replace(rex, '****') //输出："****年结束了，****年开始了,****年也不远了";
  str2 = str.replace(rex, function(item){
    console.log(arguments)
  	var arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  	var newStr = '';
  	item.split('').map(function(i){
  		newStr += arr[i]
  	})
  	return newStr
  })
  console.log(str2)// 输出：贰零壹捌年结束了，贰零壹玖年开始了,贰零贰零年也不远了
  ```

- 字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和 split()
