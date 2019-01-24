// 오브젝트 선언 및 관련 메서드

// 기본 오브젝트 (객체) 선언 방법
const obj = {
    title : '제목',
    content : '내용',
    writer_id : 13,
}

// 오브젝트 데이터 접근방법
console.log(obj.title, obj.content, obj.writer_id);

// 키 이름변경
const {title:main ,content:text ,writer_id:value} = obj;
console.log(main);

//여러가지 관련 메서드들 

// 키 값을 배열로 반환
console.log(Object.keys(obj));

// 밸류 값을 배열로 반환
console.log(Object.values(obj));

// 두개의 객체를 합쳐줌, 첫번째 인자의 객체에다가 모두 더함

const obj2 = { writer_name : '홍길동' }
console.log(Object.assign({},obj,obj2));

