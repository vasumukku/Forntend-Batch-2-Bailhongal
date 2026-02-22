// for (initialization , condition , incre/decre){
//   //Boc
// } 

//find leng syntx is var.length 
 

 // 1. program
let names = ["rahat","chethan","manoj","chethanaa","lakshimi","prajval","bhoom"]
for(let i =0 ; i<names.length ; i++){  
 console.log(names[i]);
}


// for (let varname of array/string){

// }

//2.program

for (let item of "vasu"){
  console.log(item);
}


// let obj ={
//   key:value,
//   key:value 
// }

//3.program
let obj ={
  name:"Rahat",
  location:"Belgum",
  marks :[90,80,50,60] ,
  collegedetails :{
    puc:"belgum clg",
    primary:"Delhi public school" ,
    marks:{
      maths:90,
      phy:100
    }
  } 
} 

console.log(obj["marks"][0]) ;
console.log(obj["collegedetails"]["marks"]["maths"])



//4. program
for (let key in obj){
  console.log(obj[key]);
}




