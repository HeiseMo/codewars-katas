//https://www.codewars.com/kata/52597aa56021e91c93000cb0

var moveZeros = function (arr) {
    let newArr = []
    let countZeros = 0;
      for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
          newArr.push(arr[i])
          //arr.splice(i,1)
        } else if(arr[i] == 0){
          countZeros++
        }
      }
      for(let j = 0; j < countZeros; j++){
        newArr.push(0)
      }
      return newArr
    }
    //
    moveZeros([1,null,2,false,1,0,0])