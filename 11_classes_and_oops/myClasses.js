 class User{
    constructor(name,email){
        this.name= name;
        this.email= email;
    }   
    logIn(){
        console.log(` ${this.name} has logged in`);
    }
 }
    const ankit= new User("Ankit","ankit@example.com");
    console.log(ankit.name);
    console.log(ankit.email);
    ankit.logIn();