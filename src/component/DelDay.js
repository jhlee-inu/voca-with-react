import  useFetch  from '../hooks/useFetch';
import { useRef , useState} from 'react';
export default function DelDay() { // Day 삭제 컴포넌트
    const days = useFetch('http://localhost:3001/days'); // useFetch 훅을 사용하여 api에서 데이터를 가져옴
    const dayRef = useRef();
    const [isDeleted, setIsDeleted] = useState(false);
    
    function del_day() {    // 삭제 버튼 클릭 시
        const selectday = parseInt(dayRef.current.value); 
        alert(selectday)
        console.log("선택된 Day 값:", selectday); // 선택된 Day 값을 확인하기 위한 로그
       
        // 선택한 Day 값에 해당하는 데이터의 찾기기
        const target = days.find(day => day.day === selectday);  //선택된 day

        if (!target) { 
            alert("삭제할 Day를 찾지 못했습니다."); // 데이터가 없을 경우 처리
            return;
        }
        

        if(window.confirm(`${selectday}번째 Day를 삭제하시겠습니까?`)){

        fetch(`http://localhost:3001/days/${target.id}`,{   // 해당 day를 가진 데이터를 삭제 fetch자체가 id기반이므로 target으로 찾은 day의 id로 delete
            method: 'DELETE', // delete 방식으로 서버에 전송 삭제기능
            headers: {
                'Content-Type': 'application/json', //json 형식으로 전송
            },
        }).then(res => {
                if (res.ok) {
                    alert(`${selectday}번째 Day가 삭제되었습니다!`)
                    setIsDeleted(true);//삭제가 완료되면 isDeleted를 true로 설정 바로 반영
            }
        })
        
    }
}
    return (
        <div className='input_area'>
            <h3>Day 삭제</h3>
            <select ref={dayRef}>
                {days.map(day => (
                    <option key={day.day} value={day.day}>
                        {day.day}
                    </option>
                ))}
            </select>
            <button class="btn_del"
                    onClick={() => del_day() }>삭제</button>
            </div>
            

            );
}
    