// switch 구문

const fruit = 'banana';

// 기본문구

switch(fruit){
    case 'banana' : 
    console.log('바나나맛');
    break;
    
    case 'apple' : 
    console.log('사과맛')
    break;
    
    default :
    console.log('궁금해 허니')
}

// 응용

// 시험 점수가 A 학점이면 훌륭 출력
// 시험 점수가 F 학점이면 낙제 출력
// 시험 점수가 XF 학점이면 "큰일남" 출력
// 단 XF 일때는 "낙제" 와 "큰일남" 동시출력

const grade = 'XF';

switch(grade){
    
    case 'A' :
    console.log('훌륭');
    break;

    case 'F' : 
    console.log('낙제');

    default :
    console.log('큰일남');

    
}