// console.log("welcome")

const user ={
    username: "dhruv",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
    }
}


user.welcomeMessage()