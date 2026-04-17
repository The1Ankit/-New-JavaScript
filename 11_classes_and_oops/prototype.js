let myName="ankit"////
let myLastName= " kumar    "
//console.log(myName.length);//5
//console.log(myLastName.length);//10
//console.log(myLastName.truelength);

let myHero=["thor","spiderman"] //array

let heroPower={              //object
    thor: "hammer",
    spiderman: "sling" ,
 getSpiderPower:function(){
console.log(`spidy power is  ${this.spiderman}`);
 }
}
Object.prototype.ankit=function(){
    console.log(`ankit is present all object`);
}
Array.prototype.heyAnkit= function(){
    console.log(`Ankit say hello `);
} // 1. we can share the method to all the array by using prototype not all the object
//  but only array object will get this method but if we want to share the method to
//  all the object then we can use Object.prototype ( like the above line of code) 
//2. In this myhero is an array so it will get the method heyAnkit and heroPower is 
// an object so it will not get the method heyAnkit but both of them will get the
//  method ankit because we have used Object.prototype for that method

heroPower.ankit();
myHero.ankit();
myHero.heyAnkit();
//heroPower.heyAnkit(); // this will give error because heyAnkit is only for array not for object



/////////Inheritance ////////////////////
const user={
    name: "Ankit",
    email: "abc@example.com"
}

const Teacher={
   makeVideo: false
}
const TeachingSupport={
   isAvailable: true
}
const TASupport={
    makeAssigment: "js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__=user; // teacher is inheriting the property of user
console.log(Teacher.name); // ankit

//modern way to do inheritance

Object.setPrototypeOf(Teacher,user); // this is the modern way to do inheritance
 

let anotherUsername= "Ankit    "
String.prototype.truelength= function(){
    console.log(` ${this}`);
   console.log(`the true length of the string is ${this.trim().length}`);
}
anotherUsername.truelength();
"kumar".truelength();
