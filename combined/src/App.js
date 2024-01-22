import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import CounterApp from "./CounterApp";
import MovieSearchApp from "./MovieSearchApp";
import TaskApp from "./TaskApp";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path = "/" element={<CounterApp/>}></Route>
            <Route path = "/MovieSearchApp" element={<MovieSearchApp/>}></Route>
            <Route path = "/TaskApp" element={<TaskApp/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
