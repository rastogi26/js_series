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

// console.log(jsUser.greeting())


//constructor

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id ="123"
tinderUser.name ="sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "123@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Dhruv",
            lastName: "Rastogi"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}


// const object3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(object3);


//database
const users =[
    {
        id:"123",
        name:"dhruv",
    },
    {
        id:"123",
        name:"dhruv",
    }, 
    {
        id:"123",
        name:"dhruv",
    },
]


// console.log(users[1].name);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


//destructing

const course ={
    name: "hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// course.courseInstructor

//easier method to access
const {courseInstructor: instruct} = course

// console.log(courseInstructor);
console.log(instruct);