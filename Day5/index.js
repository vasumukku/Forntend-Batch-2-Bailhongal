//syntax  : map((element, index, array) => { ... })
// syntax : filter((element, index, array) => { ... })
//syntax: reduce((accumulator, currentValue, index, array) => { ... }, initialValue). 

const arr = [1,2,3]
let dummy =0
for (let i=0;i<arr.length;i++){
 dummy=dummy+arr[i] 
} 
console.log(dummy) 
console.log(arr);

// i=0 
// //square = 1* 1=1
// arr[0]=1

//i=1
//square=arr[1]*arr[i]=4
//arr[1]=4

// function name(params) {
//   retun "vasu"
// }

// const abc = name()

// const arr=[1,2,3]

// const dummy = arr.filter((x,index,array)=>{
//   return x>2
// }) 
// console.log(dummy);