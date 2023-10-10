const name = "dhruv"
const repoCount = 23

//old method
console.log(name+repoCount)

console.log(name[0]);

//new method
//string interpolaion
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


//2nd WAY TO INTIALISE THE string using objects
const gameName= new String("dhruv");
gameName


console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("r"));

//substring
const newString = gameName.substring(0,4)
console.log(newString);

// slice can use negative value also
const anotherString = gameName.slice(-4,3)
console.log(anotherString);


//trim to rmove spaces

//replace 
//include = true or false


//split gives array based onn condition
const content = "hello-my-name-is-dhruv"
console.log(content.split('-'))