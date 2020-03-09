module.exports = function reverse (number) {
let numSrt = String(number)
let numLen = numSrt.length
let answer = [];
if (numLen == 4 || numLen == 3 ) { 
  if (numSrt[0] == '-' ) {
answer.push(numSrt[3])
answer.push(numSrt[2])
answer.push(numSrt[1])
let nu = answer.join('')
return Number(nu);
  }
  if (numSrt[0] !== '-' ) {
    answer.push(numSrt[2])
    answer.push(numSrt[1])
    answer.push(numSrt[0])
let nu = answer.join('')
return Number(nu);
      }
}
}
