const myNums =[1,2,3]

// const myTotal =myNums.reduce(function (accumulator,currVal) {
//     return  accumulator+currVal;
// },intialize_Value)

// const myTotal =myNums.reduce(function (acc,currVal) {
//     console.log(`acc:${acc} and currVal: ${currVal}`);
//     return acc+currVal;
// },0)

const myTotal = myNums.reduce( (acc,currVal)=>(acc+currVal),0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js",
        price: 2999,
    },
    {
        itemName: "py",
        price: 999,
    },
    {
        itemName: "mobile dev",
        price: 4999,
    },
    {
        itemName: "data science",
        price: 5999,
    },
    

]

const total = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(total);
