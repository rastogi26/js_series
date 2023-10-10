const number = [1,2,3,5,6]


number.shift()
number.unshift(9)

console.log(number.includes(9));

console.log(number);

// join binds and convert it into strings
const myarr = number.join()

console.log(myarr);
console.log(typeof myarr);


//important :-
// A [0,1,2,3,4,5]
// slice(1,3)
// answer=> [1,2]

// B [0,1,2,3,4,5]
// splice(1,3)

// answer => B [0,4,5]
//           [1,2,3]



// number.forEach(val => {
//     console.log(val);
// });