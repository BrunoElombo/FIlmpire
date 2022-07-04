import searchIcon from './search.svg';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard'
import './App.css';

// Here is your key: 405dc095
const API_URL = 'http://www.omdbapi.com?apikey=405dc095';





const App=()=> {

  const searchMovie = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  }

const [searchTerm, setSearchTerm] = useState("");
const [movies, setMovies] = useState([]);

  useEffect(()=>{
    searchMovie(searchTerm);
  }, []);



  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {/* Movie cards goes below */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    
  );
}

export default App;
