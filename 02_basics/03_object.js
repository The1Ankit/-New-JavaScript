//========= METHOD OF OBJECT CREATION=================
//singleton object:-it is made by the use of constructor . EX= object.create

// object literals
const mySymbol= Symbol("key1")
const jsUser ={
    name: "Ankit",
    [mySymbol]:"myKey1",
    age:22,
    location:"bhopal",
    email:"ancd123@gmail.com",
    "full name":"Ankit Kumar"
}
//console.log(jsUser.email); :---Alway try to access object with dot(.)  In some special condition try to use square braket.

//console.log(jsUser["email"]);
//console.log(jsUser.full name); :-

//console.log(typeof jsUser [mySymbol]);

// change object value 
jsUser.email="abcd1234@gmail.com",
//console.log(jsUser["email"])
//Object.freeze(jsUser)
jsUser.email ="microsoft123@gmail.com"
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello jsUser")
}
jsUser.greetingtwo =function(){
    console.log(`helo js User,${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());



