import { useState } from 'react';

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

/**
 * rest api
 * 
 * create: post
 * read: get
 * update: put
 * delete: delete
 * 
 */