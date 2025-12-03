//const tinderUser = new Object() :- it is singleton object 
//const tinderUser={} :- it is a non single ton object
const tinderUser={}
tinderUser.id=123
tinderUser.name="don"
tinderUser.isLoggedIn=false
//console.log(tinderUser);
const regUser={
    email:"ram123@gmail.com",
    fullname:
    {
        userfullname:{
            firstname:"ram",
            lastname:"kumar"
        }

    }
}

//console.log(regUser.fullname.userfullname.firstname);
const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

         // combined two boject
//------------------------------------------------------------
//const obj3={obj1,obj2}
   //const obj3 =Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
  {
    id:233,
    email:"hot@Mail.com",
  },
  {
    id:233,
    email:"hot@Mail.com",
  },
  {
    id:233,
    email:"hot@Mail.com",
  },

]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course ={
  courseName:"js hindi",
  price:123,
  teacher:"abc",
}
const{courseName:a}=course //use code word and destructuring
console.log(a);


