//https://www.codewars.com/kata/5934c24ed953868340000014
function buyFruits(priceLabels,fruitsList){
    let resA = 0;
    let resB = 0;
    let countDubs = {};
      
    fruitsList.forEach(function(i) {countDubs[i] = (countDubs[i]||0) + 1});
      
    let CountDubsArr = Object.keys(countDubs).map(function(key) {
      return countDubs[key];
    })
    CountDubsArr.sort(function(a, b){return b - a})
    console.log(CountDubsArr)
    let sortedPA = priceLabels.sort(function(a, b){return a - b})
    console.log(sortedPA)
    for(let i = 0; i < CountDubsArr.length; i++){
      resA += (CountDubsArr[i]*sortedPA[i])
      
    }
    
    let sortedPB = priceLabels.sort(function(a, b){return b - a})
    console.log(sortedPB)  
    for(let j = 0; j < CountDubsArr.length; j++){
      resB += (CountDubsArr[j]*sortedPB[j])
    }  
    
    return [resA, resB]
    
    }
    
    buyFruits([21,45,34,2,14,12,17,20,48,1,14,43,49,43,49,24,2,14,36,1,40],["litchi","litchi","pineapple","orange","orange"]) // [6,244]
    