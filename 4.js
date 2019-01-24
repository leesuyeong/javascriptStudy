// && 와 ||

const a = 'Hi';
const b = 'Hello';
const c = '';

/**
 *  자바스크립트에는 && 나 || 같은 비교연산자의 경우
 *  true, false 값을 반환하는게 아니라, 
 * 
 *  && 의 경우에는 결과를 계산하고 남은 마지막값(?) 을 리턴합니다.
 *  && 를 사용할 경우 첫번째 값이 True 일때 그 다음 값을 리턴합니다.
 * 
 *  [&& 의 경우에는 false 가 나올때까지 혹은 마지막값이 나올때까지 계산을 하다가,
 *   false 나 마지막값을 만나면 해당 값 을 리턴합니다.]
 */

const and1 = a && b;
console.log('and1:', and1);
const and2 = a && c;
console.log('and2:', and2);
const and3 = c && b;
console.log('and3:', and3);
const and4 = b && a;
console.log('and4:', and4);

/**
 *  || 의 경우에는 True가 나올때까지 혹은 마지막 값이 나올때까지 계산을 하다가,
 *  True 나 마지막값을 만나면 해당 값 을 리턴합니다.
 */

const or1 = a || b;
console.log('or1:', or1);
const or2 = a || c;
console.log('or2:', or2);
const or3 = c || b;
console.log('or3:', or3);
const or4 = b || a;
console.log('or4:', or4);
const or5 = a || b || c;
console.log('or5:', or5);