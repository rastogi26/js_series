function SetUsername(username)
{
    // complex db calls from above
    this.username = username
    console.log("called");
}


function createUser (name,email,password)
{
    SetUsername.call(this,name)
    this.email = email
    this.password = password
}

const details = new createUser("dhruv","123@gmail.com",123)
console.log(details);