import React from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import { movies } from "../data";

function Movies() {

  function getMovies() {
    return movies.map(movie => {
    return (<div key={movie.title}>
       <h1> Title: {movie.title} </h1><br/>
        Time: {movie.time}
        {getGenres(movie)}
      </div>
    )
    })
  }

  function getGenres(movie) {
    return (
      <>
        <h2>Genres</h2>
        <ul>
          {movie.genres.map(genre => {
            return <li key={movie.title + genre}>{genre}</li>
          })}
        </ul>
      </>
      
    )
  }

  return (
  <div>
    <h1>Movies Page</h1>
    {getMovies()}
  </div>)
    
}

export default Movies;
