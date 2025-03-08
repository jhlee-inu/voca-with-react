import logo from './logo.svg';
import './App.css';
import Hello from './component/hello';
import styles from './app.module.css';
import Welcome from './component/welcome';

function App() {
  return (
    <div className="App">
      <Hello />
      <div className={styles.box}>app</div>
      </div>
  );
}

export default App;
