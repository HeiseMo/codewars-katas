//https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (seconds) {
    let newStr = "";
    let s = seconds;
    let arr = []
    let ryears = 0
    let rdays = 0
    let rhours = 0
    let rmins = 0
    let rseconds = 0
    if(s == 0){
      return "now"
    }
    
    if(s >= 31536000){
    let years = (s / 31536000);
    ryears = Math.floor(years)
        if(ryears > 1){
          arr.push(`${ryears} years`)
        } else if(ryears == 1) {
          arr.push(`${ryears} year`)
        }
    }
    if(s >= 86400){
    let leftDaysInSeconds = s - (ryears*31536000)
    rdays = Math.floor(leftDaysInSeconds/86400);
        if(rdays > 1){
          arr.push(`${rdays} days`)
        } else if(rdays == 1){
          arr.push(`${rdays} day`)
        }
    }
    if(s >= 3600){
    let leftHoursInSeconds = s - (ryears*31536000) - (rdays*86400)
    rhours = Math.floor(leftHoursInSeconds/3600)
        if(rhours > 1){
          arr.push(`${rhours} hours`)
        } else if(rhours == 1){
          arr.push(`${rhours} hour`)
        }
    }
    if(s >= 60){
    let leftMinsInSeconds = s - (ryears*31536000) - (rdays*86400) - (rhours*3600)  
    rmins = Math.floor(leftMinsInSeconds/60)
        if(rmins > 1){
          arr.push(`${rmins} minutes`)
        } else if(rmins == 1) {
          arr.push(`${rmins} minute`)
        }
    }
    if(s > 0 || s < 60){
    let leftSeconds = s - (ryears*31536000) - (rdays*86400) - (rhours*3600) - (rmins*60)
    rseconds = leftSeconds
        if(rseconds > 1){
          arr.push(`${rseconds} seconds`)
        } else if(rseconds == 1) {
          arr.push(`${rseconds} second`)
        }
    }
    
    for(let i = 0; i < arr.length; i++){
      if(i != arr.length-1 && i != arr.length-2){
        newStr += `${arr[i]}, `
      }
      if(i == arr.length-2){
        newStr += `${arr[i]} and `
      }
        if(i == arr.length-1){
        newStr += `${arr[i]}`
      }
      
    }
        return newStr
    }
    formatDuration(15731080)
    
    
                   
    