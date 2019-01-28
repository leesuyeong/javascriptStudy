/**
 *  클로저
 * 
 *  클로저 기본
 */
function getClosure(){
    const text = 'lalala1';

    return function() {
        return text;
    };
}

console.log(getClosure()());

/* 은닉화 */
// 은닉화없이 일반적인 방법으로 객체를 생성하는 경우

function Hello(name){
    this._name = name;
}
Hello.prototype.say = function(){
    console.log("Hello, "+this._name);
}

const hello = new Hello("바보");
const hello2 = new Hello("바보1");
const hello3 = new Hello("바보2");

hello.say();
hello2.say();
hello3.say();

hello._name = "멍청이";
hello.say();

function Hello2(name){
    // _name을 은닉화
    const _name = name;
    return function () {
        console.log("Hello, "+_name);
    };
}
const hello21 = Hello2('바보');
const hello22 = Hello2('바보1');
const hello23 = Hello2('바보2');

hello21();
hello22();
hello23();


/* 반복문과 클로저 */

for(var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i);
    }, 100);
};

for(var k = 0; k < 10; k++){
   (function(index){
       setTimeout(function(){
           console.log(index);
       }, 100)
   })(k);
}


// ES6 문법
for(let i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i);
    }, 100);
};

// 화살표 함수 클로져
 const test1 = function() {
     return function(){
         console.log('test1');
     }
 }

 

 const test2 = () => {
    return() => {
        console.log('test2');
    }
 }

 /* 무조건 외우기 */ 
 const test3 = () => () => {
     console.log('test3');
 }


 test1()();
 test2()();
 test3()();

 const test4=()=>()=>()=>()=>{
    console.log('test4')
 };

 test4()()()();
