function fearNotLetter(str) {
  let num = str.charCodeAt(parseInt())
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(parseInt(i)) === num) {
      num++
    } else {
      return String.fromCharCode(num)
    }
  }
}