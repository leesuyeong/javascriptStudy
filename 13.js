/**
 *  Class
 *  옛날방식의 클래스 (?) 생성방법.
 */

 function Person (firstName) {
     this.firstName = firstName;
     console.warn('person created');
 };

 Person.prototype.walk = function(){
     console.log('I am walking!');
 };

 Person.prototype.sayHello = function(){
     console.log("Hello, I'm "+this.firstName);
 };

 const person = new Person("김한수");
 person.walk();
 person.sayHello();


/**
 * 
 *  ES6 문법으로 만든 Class
 * 
 */

class Person2 {
    constructor(firstName){
        this.firstName = firstName;
        console.log('person2 created');
    }
    walk(){
        console.log('I am walking!')
    }
    sayHello(){
        console.log('Hello'+this.firstName);
    }
}
const person2 = new Person2('언디파인드');
person2.walk();
person2.sayHello();



/**
 *  상속
 */
class Student extends Person2 {
    constructor(firstName, subject){
        super(firstName);
        this.subject = subject;

        console.log('student created');
    }
    // sayHello 오버라이딩 (기존 부모에 있던 내용을 재정의)
    sayHello() {
        console.log("Hi, I'm"+this.firstName);
    }

    sayGoodbye(){
        console.log("goodbye "+this.firstName);
    }

    study(subject){
        console.log("studying "+subject+'...');
    }
// 자바스크립트 클래스에서는 오버로딩이 허용되지 않는다.  
    study(subject1,subject2){
        console.log("studying "+subject1+subject2+'...');
    }
}

const student = new Student("홍길동","영어");

student.walk();
student.sayHello();
student.sayGoodbye();

student.study("math");
student.study("math","math");

