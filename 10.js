// Spread Object, Spread Array

const obj = {
    key: 'title',
    value: 'hello',
    index: 0,
    start: 3,
};

const obj2 = {
    name: '망할',
    age: 88,
};

// 합치기 

const newObj = { ...obj, ...obj2 };
console.log(newObj);

// 복사하기 전

//const test1 = obj;
//test1.key = 'content';
//console.log(obj);

// 복사 shallow copy (얕은 복사)

const test2 = { ...obj };
test2.key = 'good';
console.log(obj);
console.log(test2)

// 복사 shallow copy 의 문제

// 최상위 값들만 복사, 내부 객체는 상세하게 복사 못함
// 고로 내부 객체는 값이 변경됨.

const deepobj = {
    obj: {
        key : 'aassss',
    },
    value : 'aaaaaa',
}

const test3 = {...deepobj};
test3.obj.key = 'adadadadadad';
test3.value = 'pppp';
console.log('deepobj : ',deepobj);

// deep copy 의 방법 (하나의 객체)

JSON.parse(JSON.stringify(deepobj));

// 배열 shallow copy

const superArr = [1,23,2,4,5,6,7,3,8]

const result = [...superArr];
console.log(result);

// 

const powerArr = [1,5,6,7];
const [a,b,c] = powerArr;
console.log(a,b,c);