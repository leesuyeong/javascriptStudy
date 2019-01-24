// 기본 함수 선언방법

function func1(){
    //내용
}

// 기본 무명함수 선언방법
// 무명함수란 이름이 없는 함수를 뜻함
const func2 = function(){
    console.log(this);
}

// 화살표 함수 선언방법 (기본적으로 무명함수)
// this 가 없음.
const func3 = () => {
    console.log(this);
}


class Test extends Component {
    render(){
        return(
            <button onClick={this.pressEvent}>Click</button>
        );

    }

    // 에러, this.setState 찾을 수 없음.
    // 제대로 사용하려면 bind(this) 를 해줘야함.
    pressEvent(){
        this.setState({value : 'test'});
    }

    // 정상작동, this가 없기때문에 상위 부모(Test 컴퍼넌트) 의 this를 대신 가져옴
    // 사용하지 않는 이유. Component가 생성될때마다 만들어짐.
    pressEvent = () => {
        this.setState({value : 'test'});
    }
}