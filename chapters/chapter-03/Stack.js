let Stack = (function() {
  const items = new WeakMap()
  class Stack {
    constructor () {
      items.set(this, [])
    }
  
    push(element) {
      let s = items.get(this)
      s.push(element)
    }
    pop() {
      let s = items.get(this)
      return s.pop()
    }
    peek() {
      let s = items.get(this)
      return s[s.length-1]
    }
    isEmpty() {
      return items.get(this).length == 0
    }
    clear() {
      items.get(this, [])
    }
    size() {
      let s = items.get(this)
      return s.length
    }
    print() {
      let s = items.get(this)
      console.log(s.toString())
    }
  }
  return Stack
})()

module.exports = Stack