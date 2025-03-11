import { Link } from 'react-router-dom';
import { useeffect, useState } from 'react';
export default function DayList() {
    const [days, setDays] = useState([]); // days 배열을 만들고 초기화 api에서 받아온 데이터를 저장

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