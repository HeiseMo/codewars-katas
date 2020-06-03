//https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
    let arr = str.split(" ")
    let newStr = "";
      for(let i = 0; i<arr.length; i++){
        let singleWordArr = arr[i].split("");
        if(singleWordArr[0].toUpperCase() !== singleWordArr[0].toLowerCase()){
        singleWordArr.push(singleWordArr[0] + "ay");
        } else {
          singleWordArr.push(singleWordArr[0])
        }
        singleWordArr.splice(0,1);
        newStr += ` ${singleWordArr.join("")}`
      }
      return newStr.trim()
      }