function rot13(str) {
  let str2 = ""
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
        str2 += String.fromCharCode(str.charCodeAt(i) + 13)
      } else {
        str2 += String.fromCharCode(str.charCodeAt(i) - 13)
      }
    } else {
      str2 += str[i]
    }
  }
  return str2
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));