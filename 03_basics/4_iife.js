//Immediately Invoked Function Expressions(IIFE)


//(function)(excetution)

//named iffe
(function chai() {
    console.log(`DB Connected. `);
})();

//unnamed iffe
( (name)=>{
    console.log(`DB2 connected ${name}`);
})("mongodb");
