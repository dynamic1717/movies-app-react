import React, { useEffect } from 'react'
import apikeys from '../apikeys'
import Movie from './Movie'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const { movies_key } = apikeys
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${movies_key}`

function MovieList() {
  const { movies, isLoading, getMovies } = useGlobalContext()

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [getMovies])

  return (
    <div className='container'>
      <div className='movie-container'>
        {isLoading ? (
          <Loading />
        ) : movies.length > 0 ? (
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />
          })
        ) : (
          <h2>Nothing found</h2>
        )}
      </div>
    </div>
  )
}

export default MovieList
