function palindrome(str) {
  let str2 = str
    .replace(/\s|_|\W/g, "")
    .split("")
    .reverse()
    .join("")
    .toLowerCase()
  return str2 == str
    .replace(/\s|_|\W/g, "")
    .toLowerCase()
}

palindrome("A man, a plan, a canal. Panamaeye");