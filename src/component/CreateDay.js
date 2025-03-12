import useFetch from "../hooks/useFetch"
import {useNavigate} from 'react-router-dom';
export default function CreateDay() { 
    const history = useNavigate();
    function addDay() { 
         
        fetch('http://localhost:3001/days/', {
            method: 'POST', //post 방식으로 서버에 전송 추가기능
            headers: {
                'Content-Type': 'application/json', //json 형식으로 전송
            },
            body: JSON.stringify({
                 day:days.length+1,
                 isdone: false, }),//현재 word의 isDone의 반대값으로 설정
        })
            .then(res => { //서버에서 응답이 오면
                if (res.ok) { //정상적으로 응답이 오면
                alert('생성이 완료되었습니다.');
                history(`/`);//지정루트로 이동
                }
            });
        }
    const days = useFetch('http://localhost:3001/days');
    return (
        <div>
            <h1> 현재일수 : {days.length}일</h1>
            <button onClick={addDay}>추가</button>

        </div>
    )
}