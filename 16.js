// try / catch / finally

try {
// try는 에러가 발생할수도 있는 코드를 실행합니다.

}catch(err){
// try에서 에러가 발생하면 catch 구문으로 에러를 넘겨받습니다.

}finally{
// try와 catch 전부 끝난후 마지막으로 실행됩니다.

}

try {
    console.log('testing...');
    throw "에러발생";
    console.log('completed!!');
}catch(err){
    console.log(err);
}finally {
    console.log('done');
}
