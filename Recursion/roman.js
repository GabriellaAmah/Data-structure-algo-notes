function convertToRoman(num) {
  const roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "CD", "C", "D", "CM", "M", "MM", "MMM", "MMMM"]
  const romanNumber = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 2000, 3000, 4000]

  let currentPointer = 0

  let currentNum = num

  let result = ""

  while (currentNum > 0) {
    const value = romanNumber[currentPointer] - currentNum


    if (value < 0) {
      currentPointer += 1
    } else if (value > 0) {
      
      currentNum -= romanNumber[currentPointer - 1]
      result += roman[currentPointer - 1]

      currentPointer = 0
    } else if (value == 0) {

      currentNum -= romanNumber[currentPointer]
      result += roman[currentPointer]


      currentPointer = 0
    }


  }
  return result
}

console.log(convertToRoman(1994))