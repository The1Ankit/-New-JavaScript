 class user {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is ${this.username} `);
    }   
}
class Teacher extends user {
    constructor(username, email, password, ) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`${this.username} is adding a course`);
    }
}
const teacher1 = new Teacher("Ankit", "ankit@example.com", "password123");
teacher1.addCourse();
teacher1.logMe();
const teacher2 = new user("Priya")
//teacher2.addCourse(); // This will throw an error because addCourse is not
//  defined in the user class
teacher2.logMe();
// teacher2 is an instance of the user class, so it can only access methods defined in the user class,
//  not the Teacher class. Teacher class inherits from user, but user does not inherit from Teacher.

 // it is important to understand that inheritance works in one direction, where the child class 
 // (Teacher) can access properties and methods of the parent class (user),
 //  but not the child class access properties and methods of the parent class(user).
 
 // so teacher1 can access logMe() method from user class, but teacher2 cannot access addCourse()
 //  method from Teacher class.
