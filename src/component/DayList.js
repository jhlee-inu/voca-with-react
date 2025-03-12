import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


export default function DayList() {
    const days= useFetch('http://localhost:3001/days'); // useFetch 훅을 사용하여 api에서 데이터를 가져옴
    //const [days, setDays] = useState([]); // days 배열을 만들고 초기화 api에서 받아온 데이터를 저장

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setDays(data);
    //         });



    // }, []); // 두번째 인자가 빈 배열이면 컴포넌트가 처음 렌더링될 때만 실행
    
    if (!days || !days) {
        return <div>Loading...</div>; // 초기화되지 않았을 때 로딩 메시지 표시
    }

    return (
        <ul className='list_day'>
            {days.map(day => ( // map은 배열을 받아서 또다른 배열로 반환
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}