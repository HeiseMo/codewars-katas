//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
    let newArr = arr
      for(let i = 0; i < newArr.length; i++){
      if(newArr[i] == "NORTH" && newArr[i+1] == "SOUTH"){
        newArr.splice(i,2)
        i = i - 2
      }
      if (newArr[i] == "SOUTH" && newArr[i+1] == "NORTH"){
        newArr.splice(i,2)
        i = i - 2
      }
      if(newArr[i] == "EAST" && newArr[i+1] == "WEST"){
       newArr.splice(i,2)
        i = i - 2
         } 
     if(newArr[i] == "WEST" && newArr[i+1] == "EAST"){
        newArr.splice(i,2)
       i = i - 2
      }
    }
      return newArr
    }
    
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])