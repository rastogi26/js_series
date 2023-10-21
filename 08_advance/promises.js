//consume and create promises

//create
const promiseOne = new Promise(function(resolve,reject){
     // do async tasks , DB calls , cryptography , network 

     setTimeout(()=>{
        console.log('async task completed');

        //connect resolve with then
        resolve()
     },1000)

})


//consume , then have direct relation with resolve

promiseOne.then(()=>{
   console.log('promise comsumed');
})


//method2

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task 2 completed');  

        resolve()
    }, 1000);
}).then(()=>{
    console.log('async task 2 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username: 'dhruv', email: '123@gmail.com'})
    }, 1000);
})


promiseThree.then(function(user){
    console.log(user);
})


const promiseFour =  new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username: 'rastogi', password:'123'})  
        } else {
              reject("something went wrong")
        }
    },1000)
})


// promises =  chaining 
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("Promise ethier rejected or resolved"))


const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username: 'js', password:'123'})  
        } else {
              reject("js went wrong")
        }
    },1000)
})


//method 2 using async await

async function consumedPromiseFive(){
    try {
        const response =  await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    } 
}

consumedPromiseFive()


//method 1

// async function getALLUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//        console.log(error);
//    }
// }

//getALLUsers()


//method 2

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>console.log(err))