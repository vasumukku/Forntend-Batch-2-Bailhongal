// let marraige = ()=>{
//   console.log("hello") 
// }
// marraige()



// let params =(a,b)=>{
//   console.log(a+b);
// }

// let params=(a,b)=>console.log(a+b) 
// params(2,3)



//calbaclks 

function main(a,b,c) {
  c()
  console.log(a+b) 
}

function mesg() {
  console.log("hello al here callback is going")
}

main(2,3, mesg)   