import "./Movie-list.css"

import React from 'react'
import MovieListItem from "../Movie-list-item/Movie-list-item";

function MovieList({data}) {
  console.log(data)
  return (
    <ul className='movieList'>
        {data.map((item) =>
          <MovieListItem {...item} key={item.id}/>
        )}
    </ul>
  )
}

export default MovieList