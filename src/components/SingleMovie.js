import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import apikeys from '../apikeys'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const { youtube_key } = apikeys
const trailer_url = (q) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&type=video&key=${youtube_key}`
const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const SingleMovie = () => {
  const { id } = useParams()
  const { movies, isLoading, setVoteClass, fav, toggleFav } = useGlobalContext()
  const [trailerSrc, setTrailerSrc] = useState('')
  const [movie, setMovie] = useState(null)
  const [searchTrailerQ, setSearchTrailerQ] = useState('')

  const convertToTrailerQ = (str) => {
    return str.replace(new RegExp(' ', 'g'), '%20')
  }

  useEffect(() => {
    const newMovie = movies.find((movie) => movie.id === parseInt(id))
    setMovie(newMovie)
  }, [id, movies])

  useEffect(() => {
    movie && setSearchTrailerQ(convertToTrailerQ(movie.title))
  }, [movie])

  useEffect(() => {
    if (searchTrailerQ) {
      fetch(trailer_url(searchTrailerQ + '%20trailer'))
        .then((resp) => resp.json())
        .then((data) => {
          setTrailerSrc(data.items[0].id.videoId)
        })
    }
  }, [searchTrailerQ])

  if (isLoading) {
    return <Loading />
  }

  return (
    <section className='movie-section'>
      {movie && (
        <div className='single-movie-container'>
          <div className='single-movie-img'>
            <img
              src={
                movie.poster_path
                  ? IMG_API + movie.poster_path
                  : 'https://cdn.wallpapersafari.com/60/13/4qZk3D.jpg'
              }
              alt={movie.title}
            />
          </div>
          <div className='single-movie-info'>
            <h2>{movie.title}</h2>
            <p>Release date: {movie.release_date}</p>
            <p>
              Rating:
              <span className={'vote ' + setVoteClass(movie.vote_average)}>
                {movie.vote_average}
              </span>
            </p>
            <p>{movie.overview || 'No overview.'}</p>
            <iframe
              title='trailer'
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${trailerSrc}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
          <div className='fav-btn-container'>
            <button
              className='fav-btn visible'
              onClick={() =>
                toggleFav(movie.id, movie.title, movie.poster_path)
              }
            >
              {fav.find((item) => item.id === movie.id) ? (
                <AiFillStar />
              ) : (
                <AiOutlineStar />
              )}
            </button>
          </div>
        </div>
      )}
      <Link to='/' className='link-btn link-btn-center'>
        Back Home
      </Link>
    </section>
  )
}

export default SingleMovie
