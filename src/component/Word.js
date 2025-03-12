import { useState } from 'react';
/**
 * rest api   json-server npm으로 설치후 서버열어서 내가 저장해놓은 json 데이터파일을 port 번호와 함꼐 실행 3001로 실행함함
 * npm install -g json-server                      json-server --watch src/db/data.json --port 3001
 * create: post
 * read: get
 * update: put
 * delete: delete
 * 
 */
export default function Word({ word }) {
    const [isDeleted, setIsDeleted] = useState(false);
    const [isShow, setIsshow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    
    function toggle() {
        setIsshow(!isShow);//현재 isshow의 반대값으로 설정
    }   
        function toggleDone() {
            //setIsDone(!isDone);
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'PUT', //put 방식으로 서버에 전송
                headers: {
                    'Content-Type': 'application/json', //json 형식으로 전송
                },
                body: JSON.stringify({ ...word, isDone: !isDone }),//현재 word의 isDone의 반대값으로 설정
            })
                .then(res => { //서버에서 응답이 오면
                    if (res.ok) { //정상적으로 응답이 오면
                        setIsDone(!isDone); //현재 isDone의 반대값으로 설정
                    }
                });
        } 
    function del(){
        if(window.confirm('삭제하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE', //delete 방식으로 서버에 전송
            })
                .then(res => {
                    if (res.ok) {
                        setIsDeleted(true);//삭제가 완료되면 isDeleted를 true로 설정 바로 반영
                    }
                });
        }
    }
    

    if (isDeleted) { 
        return null;
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input
                    type="checkbox" checked={isDone} onChange={toggleDone}
                />
               
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
            <button onClick={() => toggle()}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button class="btn_del"
                    onClick={() => del() }>삭제</button>
            </td>           
        </tr>
    );
}

