import React from 'react'
import { useGlobalContext } from '../context'
import FavMovie from '../components/FavMovie'
import { BsTrash } from 'react-icons/bs'

export default function Favorites() {
  const { fav, removeFav, clearFav } = useGlobalContext()

  return (
    <section className='favorites'>
      <h2>Yours Favorite Movie List</h2>
      {fav.length > 0 ? (
        <FavMovie items={fav} removeFav={removeFav} />
      ) : (
        <p>You haven't added any movie to favorites!</p>
      )}
      <button className='favorites-clear-btn' onClick={clearFav}>
        <BsTrash />
        &nbsp; Clear All
      </button>
    </section>
  )
}
