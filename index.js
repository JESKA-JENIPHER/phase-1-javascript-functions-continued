// code your solution here
function saturdayFun(text ="roller-skate") {
  return `This Saturday, I want to ${text}!`
}
saturdayFun();

function mondayWork(text1 = "go to the office"){ 
  return `This Monday, I will ${text1}.`
}
mondayWork("This Monday, I will work from home.");

function wrapAdjective (adjective='*'){
   const innerFunction = function(value){
       return `You are ${adjective}${value}${adjective}!`
   }
return innerFunction
}