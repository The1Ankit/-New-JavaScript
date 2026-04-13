
const user ={
    username: "john",
    email: "john@gmail.com",
    loginCount: 8,
    signIn: true,
        getUserDetails: function(){
          // console.log("userdetails")
          //console.log(`Username: ${username}`); gives error because username is not defined in this scope
          // , we need to use "this" keyword to access the username property of the user object,
          //  this help to access the current object/context properties and methods
          //console.log(`Username: ${this.username}`);
          //console.log(this);
        }
}
//console.log(user.username);
//console.log(user.getUserDetails());

function User (username, email, loginCount, signIn){
    this.username = username;
    this.email = email;
    this.loginCount = loginCount;
    this.signIn = signIn;
    this.greeting = function(){
       console.log(`Hello ${this.username}, welcome back!`);
    }   
    return this;
    // return this is not necessary because when we use "new" keyword to create a
    //  new instance of the User object, it will automatically return the new object created
    //  by the constructor function, so we can omit the return statement and it will still work
    //  as expected.
}
//const user1 =  User("johnp", "johnp@gmail.com", 10, true);
//const user2 =  User("johnp1", "johnp1@gmail.com", 5, false);
// without new keyword, the function will return undefined and the properties will be added
//  to the global object (window in browser), which is not what we want and overwrite the 
// previous user1 and user2 variables, so we need to use "new" keyword to create a new instance of the User object and return it.
//console.log(user1);
//console.log(user2);
const user1 =  new  User("johnp", "johnp@gmail.com", 10, true);
const user2 =  new  User("johnp1", "johnp1@gmail.com", 5, false);
console.log (user1);
console.log (user2);
user1.greeting();
user2.greeting();