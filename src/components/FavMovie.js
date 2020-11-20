import React from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const FavMovie = ({ items, removeFav }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title, poster_path } = item
        return (
          <article key={id} className='favorites-movie'>
            <Link to={`/movie/${id}`} className='favorites-link'>
              <img
                src={
                  poster_path
                    ? IMG_API + poster_path
                    : 'https://cdn.wallpapersafari.com/60/13/4qZk3D.jpg'
                }
                alt={title}
                className='favorites-img'
              />
              <h3>{title}</h3>
            </Link>
            <button
              onClick={() => removeFav(id)}
              className='favorites-remove-btn'
            >
              <MdClose />
            </button>
          </article>
        )
      })}
    </div>
  )
}

export default FavMovie
