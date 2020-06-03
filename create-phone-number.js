//https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){
    let firstPart = numbers.splice(0,3)
    let secondPart = numbers.splice(0,3)
    let thirdPart = numbers.splice(0,4)
    let phoneNumber = `(${firstPart.join("")}) ${secondPart.join("")}-${thirdPart.join("")}`
    return phoneNumber 
   }