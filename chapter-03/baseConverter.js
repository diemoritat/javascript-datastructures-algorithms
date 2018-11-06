const Stack = require("./Stack") 

function baseConverter(dec, base) {
  const DIGITS = '0123456789ABCDEF'
  let modStack = new Stack()
  let mod = null
  let finalString = ''

  while (dec > 0) {
    mod = Math.floor(dec % base)
    modStack.push(mod)
    dec = Math.floor(dec / base)
  }

  while (!modStack.isEmpty()) {
    finalString += DIGITS[modStack.pop()]
  }

  return finalString
}

module.exports = baseConverter