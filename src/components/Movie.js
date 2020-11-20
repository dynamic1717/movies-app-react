import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({ title, poster_path, vote_average, id }) => {
  const { setVoteClass, fav, toggleFav } = useGlobalContext()

  return (
    <div className='movie'>
      <Link to={`/movie/${id}`}>
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : 'https://cdn.wallpapersafari.com/60/13/4qZk3D.jpg'
          }
          alt={title}
        />
      </Link>
      <div className='movie-info'>
        <Link to={`/movie/${id}`} className='link-btn'>
          <h3>{title}</h3>
        </Link>
        <span className={'vote ' + setVoteClass(vote_average)}>
          {vote_average}
        </span>
      </div>
      <div className='fav-btn-container'>
        <button
          className='fav-btn'
          onClick={() => toggleFav(id, title, poster_path)}
        >
          {fav.find((item) => item.id === id) ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          )}
        </button>
      </div>
    </div>
  )
}

export default Movie
