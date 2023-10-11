//bjects literal


//symbol 
const mySym =Symbol("key1")

const jsUser= {
    name: "dhruv",
    "full name": "Dhruv Rastogi",
    [mySym]: "mykey1",
    age: 22,
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastSeen: ["Monday","Wenesday"]


}

// console.log(jsUser.email);
// console.log(jsUser["email"]);//behing strings
// console.log(jsUser["full name"]);//special case
// console.log(jsUser["age"]); // behind strings
// console.log(jsUser[mySym]); // dataype symol


jsUser.email = "123@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "345@gmail.com"
// console.log(jsUser);


jsUser.greeting = function() {
    console.log(`Namaste ${this["full name"]}`);
}

console.log(jsUser.greeting())