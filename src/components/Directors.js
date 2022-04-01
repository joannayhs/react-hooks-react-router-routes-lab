import React from "react";
import { directors } from "../data";

function Directors() {

  function getDirectors(){
    return directors.map(director => {
      return (
      <div key={director.name}>
        {director.name}
        <h5>Movies:</h5>
        <ul>
          {getMovies(director)}
        </ul>
      </div>
      )
    }) 
  }

  function getMovies(director){
    return director.movies.map( movie => {
     return  <li key={director.name + movie}>{movie}</li>
    })
  }

  return (
  <div>
    <h1>Directors Page</h1>
    {getDirectors()}
    </div>
    
    )
}

export default Directors;
