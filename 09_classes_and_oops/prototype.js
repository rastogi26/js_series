// question to make our own method trueLength

// let myName = "dhruv     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammar",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

// we create our own method dhruv and inject it into object prototype and all its child get its method (inheritance)

Object.prototype.dhruv = function(){
    console.log("dhruv is present in all the objects");
}

// so now functions , array , strings etc all have this dhruv method

//heroPower.dhruv() // object has method 

//myHeros.dhruv() // array has also method/function


//if we give propertiy to array, objeect will not have that power and also siblinngs dont have the properties like function and strings

Array.prototype.heyDhruv = function(){
    console.log('Dhruv says hello');
}

// myHeros.heyDhruv()
// heroPower.heyDhruv()  //object does not have heyDhruv property




//inheritance

const user ={
    name: "dhruv",
    email:"123@gmail.com"
}
const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvailable: false,
}

const taSupport={
    makeAssignment: 'js',
    fullTime: true,
    __proto__: teachingSupport,  // can now have properties of teaching support, old approach

}


teacher.__proto__= user // can now have properties of user also , old approach

// modern syntax
Object.setPrototypeOf(teachingSupport,teacher) // now teachingSupport have all the properties of teacher also


// now solve the question/goal

let anotherUserName = "dhruvRastogi       "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`Length is : ${this.trim().length}`);
}

// this is kisne bu laya
anotherUserName.trueLength()
"yuppp ".trueLength()
"namaste India".trueLength()
