// let a=10;
// const b=20;
// var c=30;
// console.log(a);
// console.log(b);
// console.log(c);
/* Difference between Block Scopes And Global Scopes :-
1. Global scopes values is also aviables in block scopes but block scopes 
values can`t access out the the block(except var).
*/

// if(true){
//     let a=20;
//     const b=20;
//     var c= 40;
//     console.log(a);
    
// }
// console.log(a);

function one(){
    const username= "ankit";
    function two(){
        const website ="youtube"
        console.log(username);
    }
    
    //console.log(website)
    two()
}
one()