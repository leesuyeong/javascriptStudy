/**
 * 자바스크립트에는 변수를 선언하는 방법이 총 3가지 있습니다.
 * 
 * var, const, let
 * 
 */

 // var 의 경우에는 자바스크립트 초기부터 변수를 선언하는 방법으로
 // 현재는 (최신버전부터는) 잘 사용하지 않는 방법입니다. (여러가지 개발적인 이슈들때문에)
 // 따라서 var 보다는 let 과 const 를 사용하는게 좋습니다.
 var a = 1;
 a = 3;
 console.log(a);
 
 // let 은 var 와 동일한 역활을 하며, var 의 상위호환 느낌이라 생각하면 좋습니다.
 let b = 2;
 b = 4;
 console.log(b);
 
 // const의 경우 let과 동일하게 자바스크립트 es6 버전부터 추가된 변수선언 방법으로
 // let과 사용방법은 동일하나, 값이 한번 설정되면 변경할 수 없다는 차이점을 가지고 있습니다.
 const c = 3;
 c = 5; // 에러발생 : Assignment to constant variable.
 console.log(c);

 /**
  *  가능하면 변수를 선언할때 const를 사용하는것 이 좋으며,
  *  변수값을 변경해줄 필요가 있는경우에만 let을 사용하여 메모리를 최적화 시켜줘야합니다.
  */