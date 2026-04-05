const promiseOne = new Promise( function(resolve, reject){ //(promise constructor takes
//  a function as an argument, that function takes two parameters, resolve and reject)
    //do an asynchronous task, DB call, network call, cryptography, file system etc
    //if success
    //resolve('success');
    //if failure
    //reject('failure');
//////////////////////////////////////////////////////////////////////////////////////////////////
    setTimeout( function(){
        console.log('asynchronous task is complete');
        resolve('success');
    }, 1000); 
});
promiseOne.then( function(){ //then is used to handle the resolved value of the promise
    console.log('Promise resolved');
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

new Promise( function(resolve, reject){
    setTimeout( function(){
        console.log('asynchronous task2 is complete');
        resolve()
    }, 1000)
}).then( function(){
    console.log('Promise 2 resolved');
})
const promiseThree = new Promise( function(resolve, reject){
    setTimeout( function(){
        console.log('asynchronous task3 is complete');
        resolve( { username: 'john_doe',email: 'john@example.com' } );
         //data that we want to pass to the then block, 
        // we can pass any data type, string, number, object, array etc
    }, 1000)
})
promiseThree.then( function(data){
    console.log('Promise 3 resolved', data);

})
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const promiseFour = new Promise( function(resolve, reject){
    setTimeout( function(){
    
         //simulating an error condition (if error is true, we will reject the promise, if error is false, we will resolve the promise
      let error=false;
      if(!error){
        resolve({username:"jannie_doe", password:"123456"});
      } else {
        reject('error occurred');
      }
    }, 1000)
})
promiseFour
.then( function(userData){
    console.log('Promise 4 resolved', userData);
    return userData.username; //we can return any data from the then block, it will be passed to the next then block
})
.then( function(username){
        console.log('another then block', username);
    })
.catch( function(error){ //catch is used to handle the rejected value of the promise
    console.log('Promise 4 rejected', error);
})
.finally( function(){ //finally is used to execute code regardless of the promise being resolved or rejected
    console.log('Promise 4 is settled');
})
/////////////////////////////////////////////////////////////////////////////////


const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if (!error){
            resolve({username:"Ankit", password:"1234"})
        }else{
            reject("Error:something wrong")
        }

    } ,1000)

})
async function consumePromiseFive(){
  try {
    const response=  await promiseFive
  console.log(response);

  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//async function getAllUsers(){
   // try {
   //    const response = await fetch('https://jsonplaceholder.typicode.com/users')
       // const data = await response.json()
   //    console.log(data)
   // } catch (error) {
 //       console.log("E:", error);
  //  }

//}
//getAllUsers();


////////////////////////////////////////////////////////////////////////////
