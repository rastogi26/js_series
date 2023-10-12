// console.log("welcome")

const user ={
    username: "dhruv",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        // console.log(this);
    }
}


// user.welcomeMessage()
user.username="sam"
// user.welcomeMessage()

// console.log(this);  // current context = {}empty

// function chai()
// {   
//     let username ="dhruv"
//     console.log(this.username);
// }


// const chai = function(){
//     let user ="dhruv"
//     console.log(this.user);
// }

// chai()


const chai = ()=>{
    let username ="dhruv"
    console.log(username);
}

// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

//implicit return
// const addTwo =  (num1,num2) =>(num1+num2)
const addTwo = (num1,num2) => num1+num2
console.log(addTwo(2,4));
const objectReturn = () =>({username:"dhruv"})
console.log(objectReturn());


