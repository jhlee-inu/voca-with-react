import { useState, useEffect } from 'react';

export default function useFetch(url) {
     const[data, setData] = useState([]); // useState 훅을 올바르게 사용
     // 
         useEffect(() => {
            fetch(url)// 템플릿 리터럴 작성할때 `` 사용
           .then(res => res.json()) 
                .then(data => {
                    setData(data); // 데이터를 설정
                }); 
        }, []); // dayId가 변경될 때마다 useEffect 실행
    return data; // 데이터 반환
// Compare this snippet from src/component/Day.js:

}