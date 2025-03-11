import { useState } from 'react';
/**
 * rest api   json-server npm으로 설치후 서버열어서 내가 저장해놓은 json 데이터파일을 port 번호와 함꼐 실행 3001로 실행함함
 *                      json-server --watch src/db/data.json --port 3001
 * create: post
 * read: get
 * update: put
 * delete: delete
 * 
 */
export default function Word({ word }) {
    function toggle() {
        setIsshow(!isShow);//현재 isshow의 반대값으로 설정
    }   
    function toggleDone() {
        setIsDone(!isDone);
    } 
    const [isDeleted, setIsDeleted] = useState(false);
    const [isShow, setIsshow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

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
                    onClick={() => setIsDeleted(true)}>삭제</button>
            </td>           
        </tr>
    );
}

