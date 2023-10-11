function addNumber(num1,num2){
    return num1+num2
}

const result = addNumber(1,4)
// console.log(result);


function loginMessage(username = "sam"){
    if (!username) {
        console.log("Please enter the name");
        return
    }

    // return username + "just logged in."
    return `${username} just logged in.`
}

// console.log(loginMessage());

function calculatePriceCart(...num1)
    {
            return num1
    }
    
    // console.log(calculatePriceCart(200,300,400,500))

    
function calculatePriceCart2(val1,val2,...num1)
{
        return num1
}
// console.log(calculatePriceCart2(200,300,400,500))


const user = {
    name:"dhruv",
    age: 22
}

function handleObject(anyObject){
    console.log(`Name is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user)
handleObject({
    name:"sam",
    age: 24
})

const arr =[2,34,5,3,4]

function returnFirstValue(myarr){
    return myarr[1]
}

console.log(returnFirstValue(arr));