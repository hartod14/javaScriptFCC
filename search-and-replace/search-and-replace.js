function myReplace(str, before, after) {
  let upper = /^[A-Z]/
  if (upper.test(before[0])) {
    after = after.replace(after[0], after[0].toUpperCase())
  } else {
    after = after.replace(after[0], after[0].toLowerCase())
  }

  return str
    .replace(before, after)
}

console.log(myReplace("His name is Tom", "Tom", "john"));