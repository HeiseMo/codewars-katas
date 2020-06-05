//https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
    let newArr = []
    let arr = str.trim().toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1));
    if(arr.join("").length > 1){
    arr.unshift("#")
    arr.join('') 
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i] != " "){
        newArr.push(arr[i])
      }
    }
    let length = newArr.join("").length
    if(length > 140 || str == "" || str == " " || length == 0){
        return false
    }  
    return newArr.join("")
    }