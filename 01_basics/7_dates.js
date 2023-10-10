let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toDateString());

let myCreatedDate = new Date(2023,5,26)
// let myCreatedDate = new Date()

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// mili into sec
// console.log(Math.floor(Date.now()/1000));

let changeDate = myCreatedDate.toLocaleString('default',{
  
    timeStyle: "full"
})

console.log(changeDate);