// export 와 export default

// 값을 객체로 넘김
const value1 = 1234;
export { value1 };

import { value1 } from '';

import * as value1 from '';
console.log(value1) // {value1 : 1234}

export class Test extends Component {};
import { Test } from '';

// 값 자체를 넘김
const value2 = 3456;
export default value2;
class Test extends Component {};
import Test from '';

import value2 from '';
console.log(value2); // 3456

// import 이름 바꾸기 
//    ^
// import Test as good from '';

// import 이름 바꾸기 (export로 넘겨받은경우)

import {value1 as aa } from '';

//import 이름 바꾸기 (export default 로 넘겨받은경우)

import {default as kaskads} from '';

//module = v2;
//module.exports = Test



