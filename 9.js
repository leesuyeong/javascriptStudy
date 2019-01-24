// 배열 메서드

const arr = [1,2,3,4,5,6,7,8,9,10];
const arr3 = [6,4,2,7,2,1,4,5,7,8,3,7,12];
const objArr = [
    {value : 'your' },
    {value : 'I' },
    {value : 'father' },
    {value : 'am' },
]

/* 배열 조작 메서드 */

// 배열의 끝에 값을 추가
arr.push(11);
console.log(arr);

// 배열의 앞에 값을 추가
arr.unshift(0);
console.log(arr);

// 끝값 제거
arr.pop();
console.log(arr);

// 앞값 제거
arr.shift();
console.log(arr);

// 배열을 문자로 합침 (거의 쓸일없음 - 상황에 따라 다름 - [밑밥])
const arrString = arr.join(',');
console.log(arrString);

// 배열 합치기
const arr2 = [101,102,103];
const newArr = arr.concat(arr2);
console.log(newArr);

// 배열 자르기 .slice(시작인덱스, 끝인덱스) 대신 끝 인덱스는 생략됨.
const slicedArr = arr.slice(2,5);
console.log(slicedArr);

// 배열 자르기, splice(시작인덱스, 개수).
// slice 와 다르게 배열 자체를 변경함.
const spliceArr = arr.splice(2, 3);
console.log(arr);

/* 배열 반복 메서드 */

// forEach - for 랑 똑같음

arr.forEach((v, i)=>{
    //console.log(v, i);
})

// map - 배열을 돌면서 return 된 값으로 새로운 배열을 만들어 주는것
const mapArr = arr.map((v)=>{
    return(v*2);
});
//console.log(mapArr);

// 조건 값이 있을경우 true만 모아서 배열을 만들어줌
const filteredArr = arr.filter((v)=>{
    return(v%2 === 0);
})
console.log(filteredArr);

// 배열에서 조건에 만족하는 값을 하나 찾아서 리턴해줌
// *동일한 값이 여러개일 경우 가장 처음값만 리턴해줌

const findValue = arr.find((v)=>{
    return(v === 2);
});
console.log(findValue);

// sort: 배열을 정렬함
// 인자로 아무것도 받지않으면 유니코드 코드 순으로 정렬.
// 인자로 함수를 받으면 원하는 로직으로 정렬 가능
// 함수는 인자로 a, b 두가지 값을 받으며
// -1 이하를 리턴하면 a 가 만저옴
// 1 이상을 리턴하면 b 가 먼저옴
// 0 을 리턴하면 그자리 유지
// 순으로 정렬

const sortedArr = arr3.sort((a, b)=>{
    return a-b;
    //return b-a; 역순
});
console.log(arr3);

// 조건이 너무 많이 들어가서 문자정렬 취소.

const sortedObjArr = objArr.sort((a, b)=>{
    if(a.value === 'I' && b.value === 'am'){
        return -1;
    } 
});
console.log(sortedObjArr);

// every : false 가 반환될때까지 반복, false가 없으면 true 반환
// *some의 반대

const everyArr = [123, 456, 111, 23, 353, null];
const resultEvery= everyArr.every((v)=>{
    return v !== null;
});
console.log(resultEvery);

// some : true 가 반환될때까지 반복, true 없으면 false 반환
// *every의 반대

const someArr = [123, 456, 111, 23, 353];
const resultSome = someArr.some((v)=>{
    return v === null;
});
console.log(resultSome);

// reduce : 배열의 각 요소를 하나의 단일 값으로 줄여줌

const reduceArr = arr.reduce((a, b)=>{
    return a + b;
})
console.warn(`${arr} 의 총 합은 : ${reduceArr}`);