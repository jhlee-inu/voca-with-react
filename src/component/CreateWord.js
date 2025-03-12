import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useRef } from 'react';

export default function CreateWord() {
  const days= useFetch('http://localhost:3001/days'); // useFetch 훅을 사용하여 api에서 데이터를 가져옴
    const history = useNavigate(); // useNavigate 훅을 사용하여 history 객체를 가져옴
    function onSubmit(e){
        e.preventDefault();//새로고침 방지
    //
    fetch('http://localhost:3001/words/', {
        method: 'POST', //post 방식으로 서버에 전송 추가기능
        headers: {
            'Content-Type': 'application/json', //json 형식으로 전송
        },
        body: JSON.stringify({
             day:dayRef.current.value,
             eng:engRef.current.value,
             kor:korRef.current.value,
             isdone: false, }),//현재 word의 isDone의 반대값으로 설정
    })
        .then(res => { //서버에서 응답이 오면
            if (res.ok) { //정상적으로 응답이 오면
            alert('생성이 완료되었습니다.');
            history(`/day/${dayRef.current.value}`);//지정루트로 이동
            }
        });

    console.log(engRef.current.value); // engRef의 현재값을 콘솔에 출력
    console.log(korRef.current.value); // korRef의 현재값을 콘솔에 출력     
    console.log(dayRef.current.value); // dayRef의 현재값을 콘솔에 출력
    }
    const engRef = useRef(null); // useRef를 사용하여 engRef라는 변수를 만들고 초기화
    const korRef = useRef(null); // useRef를 사용하여 korRef라는 변수를 만들고 초기화
    const dayRef = useRef(null);   // useRef를 사용하여 dayRef라는 변수를 만들고 초기화

       
  return ( <form onSubmit={onSubmit}>
    <div className="input_area"> 
        <label>Eng</label> 
        <input type="text"  ref={engRef}/>
    </div>
    <div className="input_area">
        <label>Kor</label>
        <input type="text"  ref = {korRef}/>
    </div>  
    <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
            {/* <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option> 하드코딩방식 */}
            {days.map(day =>( //map은 배열을 받아서 또다른 배열로 반환
                <option key={day.id} value={day.day}>{day.day}</option> //key는 고유한 값으로 설정
            ))}

        </select>
        </div>
    <button>저장</button>

    </form>
    );
}