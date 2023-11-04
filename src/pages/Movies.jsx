import React from 'react'
import { dummy } from "../movieDummy";
import Movie from '../Components/Movie';

export default function Movies() {
  return (
    <div className = "movie-container">
      {dummy.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        )
      })}
    </div>
  )
}

