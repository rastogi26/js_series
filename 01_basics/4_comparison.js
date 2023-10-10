console.log(null>0);
console.log(null==0);
console.log(null>=0);

//The equality check == and comparison > < >= <= work different,  
// hence comaprision convert null to number , treating it as 0
// that why null>=0 is true and null == 0 is false

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
// gives false


// === 
console.log("2"===2);
