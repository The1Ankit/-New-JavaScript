// Imediately Invoked Function Expression



(function chai (){
    console.log(`DB Connected`);
})();
//:- IIFE ka use hum jo global scope sa pollution hoti hai kaie bar usskovariable /delcration  htna ka liye hum IIFE ka use krte hain.

( ()=>
{
    console.log(`DB Connected Again`);
})();
((name)=> {
    console.log(`db connected ${name}`);
})("ankit")
