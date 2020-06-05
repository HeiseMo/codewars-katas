//https://www.codewars.com/kata/51e056fe544cf36c410000fb/
function topThreeWords(text) {
    let fixText = text.trim().split("")
    let fixArr = [];
    let sortable = [];
    let newArr = [];
    let res = [];
    let countDubs = {};
    
    //Fixing the text to ignore symbols before and after them
    
    for(let i = 0; i < fixText.length; i++){
      if(fixText[i] >= 'a' && fixText[i] <= 'z' || fixText[i] >= 'A' && fixText[i] <= 'Z' || fixText[i] == " " || fixText[i-1] >= 'a' && fixText[i-1] <= 'z' || fixText[i+1] >= 'A' && fixText[i+1] <= 'Z'){
        fixArr.push(fixText[i].toLowerCase())
      }
    }
    
    //Pushing the fixed text into newArr
    
    let arr = fixArr.join("").trim().split(" ");
    for(let i = 0; i < arr.length; i++){
      if(arr[i] != ""){
        newArr.push(arr[i].toLowerCase())
      }
    }
  //Checking duplicates and creating an object with keys to list out top 3
  newArr.forEach(function(i) {countDubs[i] = (countDubs[i]||0) + 1});
  for (let i in countDubs) {
            sortable.push([i, countDubs[i]]); 
  }
  
  //Sort the array into descending order
    
  sortable.sort(function(a, b) {
      return b[1] - a[1];
  });
    
  //Push into res array the top 3 words 
    
    for(let i = 0; i < sortable.length; i++){
        if(i < 3){
      res.push(sortable[i][0])
        }
    }
      return res
  }