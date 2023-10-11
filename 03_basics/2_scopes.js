

if(true)
{
    const a=10
    let b=20
    var c=30
}

// console.log(a);err
// console.log(b);err
// console.log(c);  //run but problem 

//nested scopes

function one() {
    const name ="dhruv"

    function two() {
        const website = "youtube"
        console.log(name);
    }

    // console.log(website); err
    two()
}

one()

//**************intersesting ******************/

//method1
console.log(addOne(5))
function addOne(num) {
    return num+1
}

//method 2

//hosting
// console.log(addTwo(9));  //gives err

const addTwo = function(num) {
    return num+2
}


console.log(addTwo(9));

// 