let arr=[1,2,3,4,5,6]   
console.log(arr);

arr.push("rahat");
console.log(arr) 

let deleteelement = arr.pop()
console.log(deleteelement)
console.log(arr); 

arr.shift()
console.log(arr); 

arr.unshift("rahat");
console.log(arr); 



arr[0] ="rahat is a good girl" 

console.log(arr); 

console.log(arr[0])
console.log(arr[1])
console.log(arr[5])



// var_name[index] 
//ending -- push,pop.
    //1.push -- add element end of the array 
        //syntax - var_name.push(value) 
    // 2. pop -- delete the element end of the array 
        //syntax -- var_name.pop() 

//starting --shift ,unshift 
    //1.shift ---remove first element in the array 
      //syntax : var_name.shift() 
    //2.unshift--add the value starting of the array
        //syntax ; var_name.unshift(value) 
// updation 
 //syntax ; var_name[pos]=value 