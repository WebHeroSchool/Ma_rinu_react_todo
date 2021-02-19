import logo from './logo.svg';
import './App.css';
import { count, length } from './number';

const flag = true;
const i = false;
const a = 5;
const b = 7;
const c = undefined;
const d = null;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p style {{
          color: 'green'
        }}>
        <p>Hello World!</p>
        <p>{ a }</p>
        <p>{ a+b }</p>
        <p>{ c }</p>
        <p>{ d }</p>
        <p>{ flag && 'True' }</p>
        <p>{ i ? 'True' : 'False' }</p>
        <p> count * length = { count*length }</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
