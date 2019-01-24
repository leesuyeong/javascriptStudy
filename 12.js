// 그 외 유용한 메서드

// String 관련 메서드 
const str = "Hello, World";

//indexOf : 문자열을 찾아서 해당 인덱스 값 반환 (String 값 만 사용가능)
console.log('indexOf : ',str.indexOf('l'));

//lastIndexOf : 뒤에서부터 문자열을 찾아서 해당 인덱스 값 반환
console.log('lastIndexOf : ',str.lastIndexOf('l'));

//search : 정규표현식 으로 찾을때 사용 (하는일은 indexOf와 같음)

console.log('search : ',str.search(/World/))

// includes : 문자열에 특정값이 포함되어 있는가 를 확인(찾을 문자, 인덱스).
console.log(str.includes(',', 5));

// replace : 문자열 치환해주는 역활 (gi는 정규표현식 중 g : global 과 i : 대소문자 구별 m : 줄바꿈 구별)
console.group('replace');
console.log(str.replace('Hello','Hi'));
console.log(str.replace(/l/gi,'A'));
console.groupEnd('replace');

// substr : 문자열 자르기 (시작지점, 개수) 시작지점 음수 사용가능 (개수생략되면 끝까지짜름)
console.group('substr');
console.log(str.substr(7,5)); // world
console.log(str.substr(-5)); // world
console.groupEnd('substr');

// substring : 문자열 자르기 (시작지점, 끝지점) 음수 사용시 0으로 고정 (사용불가라고 생각하는게 편함) (끝지점생략되면 끝까지짜름)
console.group('substring');
console.log(str.substring(0,5)); // Hello
console.log(str.substring(7)); // world
console.groupEnd('substring');

// toLowerCase (소문자로 변환)
console.group('toLowerCase');
console.log(str.toLowerCase())
console.groupEnd('toLowerCase');

// toUpperCase (대문자로 변환)
console.group('toUpperCase');
console.log(str.toUpperCase())
console.groupEnd('toUpperCase');

// trim (앞 뒤 띄어쓰기만 없애줌)
const str2 = '          Hello,        World'
console.group('trim');
console.log(str2.trim());
console.groupEnd('trim');

// match: 주어진 정규표현식과 일치하는 문자열들을 배열로 리턴
const str3 = "coding everybody, everywhere, everytime, every";
console.group('match');
console.log(str3.match(/every.+?(?=,)/gi));
console.groupEnd('match');

// JSON 관련 메서드

const obj = { test : 123};
// stringify : object를 문자열화
console.group('stringify')
console.log(JSON.stringify(obj));
console.groupEnd('stringify')

// parse : json String data 를 파싱해서 object로 만들어줌

const objString = '{"text" : 123}';
const parsedObject = JSON.parse(objString)
console.group('parse');
console.log(objString.text) // undefined
console.log(parsedObject.text) // 123
console.groupEnd('parse');