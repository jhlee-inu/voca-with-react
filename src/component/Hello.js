import React, { useState } from 'react';
import UserName from './UserName';

function Hello({age}) { //props를 파라미터로 받음

    // let name ='react';
    const [name, setName] = useState("mike"); //배열 첫번째 값은 변수 두번째는 state 변경 함수
                                        //useState()안에 초기값을 넣어줄 수 있음 
    const msg = age > 19 ? '성인입니다.' : '미성년자입니다.';
        function changeName() {    
       setName(name === 'mike' ? 'jane' : 'mike');
        }
    return (
        <div>    {/*여기서 name은 state값,하지만 username컴포넌트에서는 props*/}
             <h2>{name}({age}): {msg}</h2> {/* props.age 대신 age 상태를 사용 파라미터로 이미 받아서 굳이 props.age로 기재 안함*/}
            <UserName name={name}/>
            <button onClick={() => { changeName();}}>Click me</button>
        </div>  
    );
}
export default Hello;