import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, onClick }) => {
    const clicked =()=>{
        alert(Title +" is selected");
    }
  return (
    <div className="movie" key={imdbID} onClick={clicked}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}


export default MovieCard;