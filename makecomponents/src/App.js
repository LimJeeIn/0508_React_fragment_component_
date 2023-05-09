// 1. 컴포넌트 만들기
// 아래 코드를 컴포넌트화 시켜보기

// function App() {
// 	const name = '라이캣!';
//   const someStyle = {backgroundColor:"black", color:"white"};
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth()+1;
//   const date = today.getDate();
//   const hour = today.getHours();
//   const min = today.getMinutes();
//   const sec = today.getSeconds();

//   return (
//     <div>
//       <div>
//         <h1 style={someStyle}>안녕, {name} 1호</h1>
//         <h1>안녕, 라이캣 2호!</h1>
//         <div className="newClass"/>
//       </div>
//       <div style={{backgroundColor:"black", color:"white"}}>
//         <h1 style={{color:'red'}}>년 : {year}</h1>
//         <h1>월/일 : {month}/{date}</h1>
//         <h1>시간 : {hour}시 {min}분 {sec}초</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

// 컴포넌트화

import Hello from './Components/Hello';
import Time from './Components/Time';
import Resume from './Components/Resume';
import ColorText from './Components/ColorText';

function HelloProps(props) {
  console.log(props);
  return (
    <div>
      <p>
        my name is {props.name} and age is {props.age}
      </p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  );
}

function App() {
  return (
    <div>
      <Hello name='Gary' />
      <Time />
      <HelloProps
        name='jaehyun'
        age={25}
        someFunc={() => 'awesome!!!'}
        someJSX={<img src='https://picsum.photos/id/237/200/300' />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
      <Resume
        hello='안녕하세요'
        name='개리'
        hobby='게임'
        food='고기'
        color='blue'
      />
      <ColorText color='red' />
      <ColorText color='blue' />
      <ColorText color='green' />
    </div>
  );
}

export default App;
