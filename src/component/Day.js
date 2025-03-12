import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

export default function Day() {
    const { dayId } = useParams(); // URL의 dayId 매개변수를 가져옴
    const words= useFetch(`http://localhost:3001/words?day=${dayId}`); // useFetch 훅을 사용하여 api에서 데이터를 가져옴
    //const [words, setWords] = useState([]); // words 배열을 만들고 초기화 api에서 받아온 데이터를 저장
        return (
        <>
            <h2>Day {dayId}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody> 
            </table>
        </>
    );
}