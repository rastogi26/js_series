const myNums =[1,2,3,4,5,6,7,8,9,10]

// const nums = myNums.map((num)=>{
//      return num+10
// } )

// chaining
const newNums =  myNums
                 .map((num)=> num*10) //arr1 created
                 .map((num)=>num+1) // arr2 created with help of arr1 
                 .filter((num)=>num>=40) // arr3 created with help of arr2

console.log(newNums);