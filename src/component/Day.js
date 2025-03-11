import { useParams } from 'react-router-dom';
import dummy from '../db/data.json';
import Word from './Word';

export default function Day() {
    const { dayId } = useParams(); // URL의 dayId 매개변수를 가져옴
    const wordList = dummy.words.filter(word => word.day === Number(dayId)); // dayId가 일치하는 단어만 필터링

    if (!wordList.length) {
        return <div>Loading...</div>; // 단어 목록이 없을 때 로딩 메시지 표시
    }

    return (
        <>
            <h2>Day {dayId}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}