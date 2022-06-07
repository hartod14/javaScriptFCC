function uniteUnique(...arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (result.indexOf(arr[i][j]) === -1) {
        result.push(arr[i][j])
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);