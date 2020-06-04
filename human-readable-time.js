//https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
    let arr = [];
    let rhours = 0;
    let rmins = 0;
    let rseconds = 0;
      
    if(seconds >= 3600){
      let hours = seconds/3600
      rhours = Math.floor(hours)
            if(rhours < 10){
            arr.push(`0${rhours}`)
          } else {
            arr.push(rhours)
          }
    } else{
     rhours = "00"
     arr.push(rhours)
    }
      
      
    if(seconds >= 60){
     let leftMinsInSeconds = seconds - (rhours*3600)
     rmins = Math.floor(leftMinsInSeconds/60)
          if(rmins < 10){
            arr.push(`0${rmins}`)
          } else {
            arr.push(rmins)
          }
    } else {
      rmins = "00"
      arr.push(rmins)
    }
      
      
    if(seconds > 0 || seconds < 60){
      let leftSecond = seconds - (rhours*3600) - (rmins*60)
      rseconds = leftSecond
        if(rseconds < 10){
        arr.push(`0${rseconds}`)
      } else {
        arr.push(rseconds)
      }
    
    } else {
      rseconds = "00"
      arr.push(rseconds)
    }
    
    return arr.join(":")
    }
    
    humanReadable(3600)