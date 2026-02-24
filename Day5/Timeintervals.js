//settimeout -- clearTimeout
//setintervval ---clearInterval


//setTimeout(callback , timeoutsec); //
//

console.log("hi") ;

let count =1
let timer = setTimeout(() => {
    if (count==1){
  clearInterval(timer); 
}else{
   count=count+1
  console.log("interval executed")
}
 

}, 2000);



console.log("end");

