import './App.css';
import Counter from './components/counter';
import Nav from './components/nav';

export default function CounterApp() {
  return (
    <div className="App">
      <Nav/>
      <h1>Counter App</h1>
      <Counter/>
    </div>
  );
}
