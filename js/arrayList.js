function ArrayList() {
  var array = []

  var swap = function (index1, index2) {
    var aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }

  var mergeSortRec = function (array) {
    var length = array.length
    if (length === 1) {
      return array
    }

    var mid = Math.floor(length / 2)
    var left = array.slice(0, mid)
    var right = array.slice(mid, length)

    return merge(mergeSortRec(left), mergeSortRec(right))
  }

  var merge = function (left, right) {
    var result = []
    var il = 0
    var ir = 0

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }

    while (il < left.length) {
      result.push(left[il++])
    }

    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
  }

  var quick = function (array, left, right) {
    var index
    if (array.length > 1) {
      index = partition(array, left, right)
      if (left < index - 1) {
        quick(array, left, index - 1)
      }

      if (index < right) {
        quick(array, index, right)
      }
    }
  }

  var partition = function (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)]
    var i = left
    var j = right

    while (i <= j) {
      while (array[i] < pivot) {
        i++
      }

      while (array[j] > pivot) {
        j--
      }

      if (i <= j) {
        swapQuickSort(array, i, j)
        i++
        j--
      }
    }

    return i
  }

  var swapQuickSort = function (array, index1, index2) {
    var aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }

  this.insert = function (item) {
    array.push(item)
  }

  this.toString = function () {
    return array.join()
  }

  //冒泡排序
  this.bubbleSort = function () {
    var length = array.length
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1)
        }
      }
    }
  }

  //选择排序
  this.selectSort = function () {
    var length = array.length
    var indexMin
    for (var i = 0; i < length; i++) {
      indexMin = i
      for (var j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j
        }
      }

      if (i !== indexMin) {
        swap(i, indexMin)
      }
    }
  }

  //插入排序
  this.insertSort = function () {
    var length = array.length
    var j
    var temp

    for (var i = 1; i < length; i++) {
      j = i
      temp = array[i]
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1]
        j--
      }
      array[j] = temp
    }
  }

  //归并排序
  this.mergeSort = function () {
    array = mergeSortRec(array)
  }

  //快速排序
  this.quickSort = function () {
    quick(array, 0, array.length - 1)
  }
}

function createNonSortArray(size) {
  var array = new ArrayList()
  for (var i = size; i > 0; i--) {
    array.insert(i)
  }
  return array
}

var array = createNonSortArray(10000000)
console.log('begin')
// array.bubbleSort()
// array.selectSort()
// array.insertSort()
// array.mergeSort()
array.quickSort()
console.log('end')
