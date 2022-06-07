function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1])
  let max = Math.max(arr[0], arr[1])
  let possible = 1
  let arr2 = []
  for (let i = min; i <= max; i++) {
    arr2.push(i)
    possible *= i
  }

  let largest = Number(arr2.slice(arr2.length - 1, arr2.length))
  for (let i = largest; i <= possible; i += largest) {
    if (arr2.every(elem => i % elem == 0))
      return i
  }
}