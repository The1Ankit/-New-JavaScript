
function myName(){
    // console.log("ankit")
    // console.log("ankit")
    // console.log("ankit")
    // console.log("ankit")
    // console.log("ankit")
    // console.log("ankit")


}
myName();
function addTwoNumber(number1,number2){ 
    //:- when we pass something in function body at the 
// time of define function in paranthies that is called parameters but when we pass something in  
// calling time of function in function body it is called argument.
    console.log(number1+number2);
}
// addTwoNumber(3 ,"5")//35
// addTwoNumber("3" ,5)//35
// addTwoNumber(3 ,)//NaN
//addTwoNumber(3 ,"a")//3a
// addTwoNumber(3 ,null)//3
//addTwoNumber(3 ,NaN)//NaN
function addNumber(num1 ,num2){
   // let result = num1+num2
   // return result
    //console.log("abc");:- nonsense because after return in function you write anything which not execute.
    
    return num1+num2;

}
// const result=addNumber(5,4)
// console.log(result);
//======================================= PART 1==========================================
// function loginUser(username){
//     if (username===undefined){
//         console.log("please enter username ")
//         return
//     }
//     return `${username} just loggin in`

// }
// //console.log(loginUser("ankit"))
// console.log(loginUser())//undefined
//======================================PART2=======================================
/*function loginUser(username){
    if (!username){
        console.log("please enter username ")
        return
    }
    return `${username} just loggin in`

}
console.log(loginUser())//undefined*/
//==============================PART3=======================================
function loginUser(username="abc"){
    if (!username){
        console.log("please enter username ")
        return
    }
    return `${username} just loggin in`;
}
console.log(loginUser("ankit"));