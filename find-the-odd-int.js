//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
    let sort = A.sort((a, b) => a - b)
    let res = [];
    for(let i = 0; i < sort.length; i++){
      if(sort.length == 1){
        res = sort
      }
      if(sort[i] === sort[i+1]){
        sort.splice(i,2)
        i = i - 2
        res = sort
      }
    }
  return parseInt([...res])
  }