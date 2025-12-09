
const user ={
    username:"ankit",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);

    }
}
// const chai =function (){
//     let username="ankit"
//     console.log(this.username);
// }
// chai()
// const chai = ()=> {
//     let username="ankit"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));

const addTwo = (num1, num2)=> (num1+num2)
    
console.log(addTwo(3,4));