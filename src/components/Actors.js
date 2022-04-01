import React from "react";
import { actors } from "../data";

function Actors() {

  function getActors(){
    return actors.map(actor => {
      return(
      <div key={actor.name}> 
        {actor.name}
        <ul>
          {getMovies(actor)}
        </ul>
      </div>
      )
    })
  }

  function getMovies(actor){
    return actor.movies.map(movie => {
      return <li key={actor.name + movie}>{movie}</li>
    })
  }

  return (
  <div>
    <h1>Actors Page</h1>
    {getActors()}
  </div>
  )
}

export default Actors;
