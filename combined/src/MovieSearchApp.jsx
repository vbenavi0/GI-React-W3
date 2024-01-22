import './App.css';
import Movie from './components/movie';
import Nav from './components/nav';

export default function MovieSearchApp() {
  return (
    <div className="App">
      <Nav/>
      <h1>Movie Search App</h1>
      <Movie/>
    </div>
  );
}