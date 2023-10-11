const number = [1,2,3,5,6]


// number.shift()
// number.unshift(9)

// console.log(number.includes(9));

// console.log(number);

// join binds and convert it into strings
const myarr = number.join()

// console.log(myarr);
// console.log(typeof myarr);


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


const marvel_heros = ["thor","ironman","siderman"]
const dc_heros = ["superman","flash","sipderman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allhero = marvel_heros.concat(dc_heros)
// // console.log(marvel_heros);
//  console.log(allhero);

//spread out
const allheros =[...marvel_heros,...dc_heros]
// console.log(allheros);

const real = [1,2,3,[4,5,6,[7,8,9]],10]

const real2 = real.flat(Infinity)
// console.log(real2);

//convert into array = from

// console.log(Array.from("dhruv"));

console.log(Array.from({name: "dhruv"})); // give empty interesting

let score1 =100
let score2= 200
let score3 =300

console.log(Array.of(score1,score2,score3));



