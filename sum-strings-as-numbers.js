//https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a,b) {
    let bArr = b.split("").reverse()
    let aArr = a.split("").reverse()
    let extra = ['0'];
    let newArr = [];
    if(bArr.length != aArr.length && aArr.length > bArr.length){
        for(let i = 0; i = (aArr.length - bArr.length); i++){
        bArr.push('0')
      }
    }
    if(aArr.length != bArr.length && bArr.length > aArr.length){
        for(let k = 0; k = (bArr.length - aArr.length); k++){
        aArr.push('0')
      }  
    }
      
    for(let j = 0; j < bArr.length; j++){
    let calc = Number(bArr[j]) + Number(aArr[j]) + Number(extra)
    let someArr = calc.toString().split("")
    if(someArr.length > 1){
    extra = [someArr[0]]
    newArr.unshift(someArr[1])
      if(j == bArr.length-1){
        newArr.unshift(someArr[0])
        extra = 0
      }
    } else{
      newArr.unshift(someArr[0])
      extra = 0
      }
    }
    
    if(newArr[0] == 0){
      console.log(newArr)
      for(let t = 0; t < newArr.length; t++){
        if(newArr[t] == 0 && newArr[t+1] == 0){
          console.log(newArr[t])
          newArr.splice(t, 1)
          t--
        } else if(newArr[t] == 0 && newArr[t+1] != 0){
         newArr.splice(t, 1)
         return newArr.join("") 
        }
      }
    } else {
    return newArr.join("")  
    }
    
    
    }
    
    sumStrings('0000000103', '000000008567')
    sumStrings('712569312664357328695151392', '8100824045303269669937')