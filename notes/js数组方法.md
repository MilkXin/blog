## js数组方法

  ***会改变原数组的方法：splice, push, pop, shift, unshift, sort, reverse***
  
  ***高阶函数方法：map, filter, find, findIndex, some, every, forEach, sort***

* **map**：返回一个数组，其中每个元素都使用指定函数进行过转换
  ```
  const arr = [1, 2, 3, 4, 5, 6]
  const mapped = arr.map(el => el + 20)
  console.log(mapped) // [21, 22, 23, 24, 25, 26]
  ```
* **filter**：返回一个数组，只有当指定函数返回 true 时，相应的元素才会被包含在这个数组中
  ```
  const arr = [1, 2, 3, 4, 5, 6]
  const filtered = arr.filter(el => el === 2 || el === 4)
  console.log(filtered) // [2, 4]
  ```
* **find**：返回与指定条件匹配的第一个实例，如果查到不会继续查找其他匹配的实例
  ```
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const found = arr.find(el => el > 5)
  console.log(found) // 6
  ```
* **findIndex**：这与find几乎完全相同，但不是返回第一个匹配元素，而是返回第一个匹配元素的索引
  ```
  const arr = ['Nick', 'Frank', 'Joe', 'Frank']
  const foundIndex = arr.findIndex(el => el === 'Frank')
  console.log(foundIndex) // 1
  ```
* **includes**：返回一个布尔值。 参数是一个value,一般用于简单数组。对于复杂数组，则可以使用some()方法替代includes()方法
  ```
  var a = [1,2,3]
  console.log(a.includes(1)) // true
  ```
* **some**：此方法是将所有元素进行判断返回一个布尔值，如果存在元素满足判断条件，则返回true，若所有元素都不满足判断条件，则返回false
  ```
  let arr= [1, 2, 3, 4, 5]
  const a = arr.some((value, index, array) => {
      return value > 3
  })
  const b = arr.some((value, index, array) => {
      return value > 6
  })
  console.log(a) // true
  console.log(b) // false
  ```
* **splice**：通过删除或替换现有元素和/或添加新元素来更改数组的内容，此方法会修改了数组本身。下面的代码示例的意思是：在数组的位置 1 上删除 0 个元素，并插入 b
  ```
  let arr = ['a', 'c', 'd', 'e']
  arr.splice(1, 0, 'b')
  ```
* **slice**：从指定的起始位置和指定的结束位置之前返回数组的浅拷贝。 如果未指定结束位置，则返回数组的其余部分。 重要的是，此方法不会修改数组，而是返回所需的子集
  ```
  let arr = ['a', 'b', 'c', 'd', 'e']
  const sliced = arr.slice(2, 4)
  console.log(sliced) // ['c', 'd']
  console.log(arr) // ['a', 'b', 'c', 'd', 'e']
  ```
* **forEach**：此方法是将数组中的每个元素执行传进提供的函数，中途不能中断，没有返回值，注意和map方法区分
  ```
  let arr = [11, 22, 33, 44, 55]
  arr.forEach((value, index, array) => {
      console.log(index, value)
  })
  // 0 11
  // 1 22
  // 2 33
  // 3 44
  // 4 55
  ```
* **every**：此方法是将所有元素进行判断返回一个布尔值，如果所有元素都满足判断条件，则返回true，否则为false
  ```
  let arr = [1, 2, 3, 4, 5]
  const a = arr.every((value, index, array) => {
      return value < 3
  })
  const b = arr.every((value, index, array) => {
      return value < 6
  })
  console.log(a) // false
  console.log(b) // true
  ```
* **indexOf**：与findIndex几乎完全相同，但它不是将函数作为参数，而是采用一个简单的值。 当w你需要更简单的逻辑并且不需要使用函数来检查是否存在匹配时，可以使用此方法
  ```
  const arr = ['Nick', 'Frank', 'Joe', 'Frank']
  const foundIndex = arr.indexOf('Frank')
  console.log(foundIndex) // 1
  ```
* **push**：这是一个相对简单的方法，它将一个项添加到数组的末尾。它就地修改数组，函数本身会返回添加后数组的长度
  ```
  let arr = [1, 2, 3, 4]
  const pushed = arr.push(5)
  console.log(arr) // [1, 2, 3, 4, 5]
  console.log(pushed) // 5
  ```
* **pop**：这将从数组中删除最后一项。同样，它在适当的位置修改数组，函数本身返回从数组中删除的项
  ```
  let arr = [1, 2, 3, 4]
  const popped = arr.pop()
  console.log(arr) // [1, 2, 3]
  console.log(popped) // 4
  ```
* **shift**：从数组中删除第一项。同样，它在适当的位置修改数组。函数本身返回从数组中删除的项
  ```
  let arr = [1, 2, 3, 4]
  const shifted = arr.shift()
  console.log(arr) // [2, 3, 4]
  console.log(shifted) // 1
  ```
* **unshift**：将一个或多个元素添加到数组的开头。同样，它在适当的位置修改数组。与许多其他方法不同，函数本身返回数组的新长度
  ```
  let arr = [1, 2, 3, 4]
  const unshifted = arr.unshift(5, 6, 7)
  console.log(arr) // [5, 6, 7, 1, 2, 3, 4]
  console.log(unshifted) // 7
  ```
* **sort**：根据提供的函数对数组进行排序。这个方法就地修改数组。如果函数返回负数正序排列，返回0则顺序保持不变。如果返回正数，则倒序排列
  ```
  let arr = [1, 7, 3, -1, 5, 7, 2]
  const sorter = (firstEl, secondEl) => firstEl - secondEl
  arr.sort(sorter)
  console.log(arr) // [-1, 1, 2, 3, 5, 7, 7]
  ```
* **Array.isArray**：判断一个对象是不是数组，返回的是布尔值
  ```
  Array.isArray([]) // true
  Array.isArray({}) // false
  ```
* **concat**：此方法是一个可以将多个数组拼接成一个数组
  ```
  let arr1 = [1, 2, 3]
  arr2 = [4, 5]
  let arr = arr1.concat(arr2)
  console.log(arr) // [1, 2, 3, 4, 5]
  ```
* **toString**：此方法将数组转化为字符串
  ```
  let arr = [1, 2, 3, 4, 5]
  let str = arr.toString()
  console.log(str) // 1,2,3,4,5
  ```
* **join**：此方法也是将数组转化为字符串
  ```
  let arr = [1, 2, 3, 4, 5]
  let str1 = arr.join()
  let str2 = arr.join(',')
  let str3 = arr.join('##')
  console.log(str1) // 12345
  console.log(str2) // 1,2,3,4,5
  console.log(str3) // 1##2##3##4##5
  ```
* **reverse**：翻转数组
  ```
  let fruits = ["Banana", "Orange", "Apple", "Mango"]
  fruits.reverse()
  console.log(fruits) // ["Mango", "Apple", "Orange", "Banana"]
  ```
