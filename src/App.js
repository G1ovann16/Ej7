import logo from './logo.svg';
import './App.css';
import Clock from './containers/clock';
import ClockFunction from './containers/clockFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* <Clock></Clock> */}
       <ClockFunction></ClockFunction>
      </header>
    </div>
  );
}

export default App;
