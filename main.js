//Math-1 ==> 1
/*
per passenger 200tk,
if the passenger number is less than 20, 10% tip
if the passenger number is more than or equal 20, 15% tip
*/
function tipCalculator(passenger){
  if(passenger <20){
  return (passenger*200) + (passenger*10);
  } else if(passenger >= 20){
    return  (passenger*200) + (passenger*30) ;
  } 
}
console.log("Calculate Total rent:",tipCalculator(20));




//Math-2 ==>
//T = Table, C = Chair, S = Shelf
function woodCalculator(T,C,S){
    return (T*8) + (C*3) +(S*5);
}
console.log("Total unit of wood:",woodCalculator(2,1,1));




//Math-3 ==>
// b = brick number
function brickCalculator(b){
    if(b <= 10){
        return b*12000;
    }
    else if(b<= 15){
        return (b*10000) + (10*2000);
    }
    else if(b >= 16){
        return (b*9000) + (10*3000) + (5*1000);
    }
}
console.log("Number of Brick: ",brickCalculator(20));





