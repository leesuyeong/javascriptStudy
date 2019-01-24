// callback 콜백

function func1(){
    let data = undefined;
    // 1초 후에 실행
    setTimeout(()=>{
        data = 'data';
    } ,1000);

    return data;
}

console.log(func1()); // undefined

function func2(callback){
    let data = undefined;
    // 1초 후에 실행
    setTimeout(()=>{
        data = 'data';
        callback(data);
    } ,1000);
}
func2((data)=>{
    console.log(data)
});
// 위의 코드를 다음과 같이 나눠서 작성 가능

function onSuccess(data) {
    console.log(data)
}
func2(onSuccess);

