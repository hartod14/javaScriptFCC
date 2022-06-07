function translatePigLatin(str) {
  //...setup if first character of the string is consonant word
  let testRegex = /^[^aeiuo]/

  //...setup if all characters of the string is consonant word and directly return the str
  let testAllCons = /^[^aeiou]+$/
  if (testAllCons.test(str)) {
    return str += "ay"
  }
  //....split to make an array and also unlock .shift() function
  str = str.split("");
  if (testRegex.test(str)) { //...if true
    //...iterate until the first character of the string is not consonant word
    while (testRegex.test(str)) {
      let cons = str.shift();
      str.push(cons);
    }
    return str.join("") + "ay"
  }
  //...return if the first character of the string is vowel word
  return str.join("") + "way"
}