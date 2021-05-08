//栈
class Stack {
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    this.items.pop()
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return !this.items.length
  }

  clear() {
    this.items = []
  }

  print() {
    return this.items.toString()
  }
}
