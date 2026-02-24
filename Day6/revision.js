// console.log("hello world");
// alert("something is going on ")

// let firstNumber = prompt("enter you number as interger")

// for (let i=0 ;i<10;i=i+2){     
//   console.log(i) ; 
//   if(i==1){
//     return 
//   }
// } 


// let arr=["Deekshaa","abc" ,["aple","abc"]]   
// for (let vlaue of arr){ 
//   console.log(vlaue); 
// } 



let obj= {
  name:"vasu",
  age:"235",
  obj1:{
    student:{
      name:[1,2,3,4,5]
    } 
  }
} 

obj["obj1"]["student"]["name"].unshift("vasu")

console.log(obj["obj1"]["student"]["name"]) 


// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         setTimeout(() => {
//           console.log("hello") ; 
//           setTimeout(() => {
//             console.log("hey")
//             setInterval(() => {
//               setInterval(() => {
//                 setInterval(() => {
//                   setTimeout(() => {
                    
//                   }, timeout);
//                 }, interval);
//               }, interval);
//             }, interval);
//           }, 0);
//         }, 2000);
//       }, 0); 
//     }, 1000);
//   }, 2000); 
// }, 1000);

// let a  = ["HTML", "CSS", "JS", "React"];
// let s = a.toString();
// console.log(s);


// let a = ["HTML", "CSS", "JS", "React"];
// console.log(a.join('|'));


// let emp = { 
//     firstName: "Riya", 
//     lastName: "Kaur", 
//     salary: 40000
// } 

// console.log(delete emp.salary); 
// console.log(emp);


// let a1 = [11, 12, 13];
// let a2 = [14, 15, 16];
// let a3 = [17, 18, 19];

// let newArr = a1.concat(a2, a3);
// console.log(newArr);


// let a = [20, 30, 40, 50];
// a.splice(1, 3);
// a.splice(1, 0, 3, 4, 5);
// console.log(a);


// const a = [1, 2, 3, 4, 5];
// const res = a.slice(1, 4);
// console.log(res); 
// console.log(a)



// let a = [1, 2, 3, 4, 5];
// a.reverse();
// console.log(a);