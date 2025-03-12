import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
import DelDay from './component/DelDay';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/> {/* /는 루트 즉 localhost:3000/이면 Header 컴포넌트를 렌더링 */}
        <Routes> {/* 라우트를 정의하는 컴포넌트 */}
          <Route path="/" element={<DayList />} /> {/* element는 컴포넌트를 받아서 렌더링, 루트가 일치할 때만 element를 렌더링 */}
          <Route path="/day/:dayId" element={<Day />} /> {/* :dayId는 변수, 예를 들어 localhost:3000/day/3이면 dayId가 3일 때 Day 컴포넌트를 렌더링 */}
        </Routes>
        <Routes>
          <Route path="/create_word" element={<CreateWord/>} /> {/*createWord 컴포넌트를 렌더링 */}
        </Routes>
        <Routes>
          <Route path="/create_day" element={<CreateDay/>} /> {/*createDay 컴포넌트를 렌더링 */}
        </Routes>
        <Routes>
          <Route path="/del_day" element={<DelDay/>} /> {/*DelDay 컴포넌트를 렌더링 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
