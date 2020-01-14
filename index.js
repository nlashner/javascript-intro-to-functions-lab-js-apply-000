
function shout(string){
  let newStr = ''
  for (let i = 0; i < string.length; i++){
    letter = i.toUpperCase()
    newStr += letter
  }
  return newStr
}
