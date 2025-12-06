function calculateCartPrice(...num1){ // (...)it is also called rest  operator and spread operator .
    return num1
}
//console.log(calculateCartPrice(200, 400,600));

const user={
    username:"ankit",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username:"sam",
    price:399
})