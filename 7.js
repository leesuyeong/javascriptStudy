// 인자 초기값 설정

function func1(a = 100 ,b = 0){
    return a + b;
}

const sum = func1(undefined, 13);
console.log(sum)