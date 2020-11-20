import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import apikeys from '../apikeys'

const { movies_key } = apikeys
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${movies_key}&query=`

const Navbar = () => {
  const { searchTerm, setSearchTerm, getMovies } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm)
      setSearchTerm('')
    }
  }

  return (
    <header>
      <div className='header-container'>
        <h2>Movies App</h2>
        <nav>
          <ul className='menu'>
            <li>
              <Link to='/' className='link-btn'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/favorites' className='link-btn'>
                Favorites
              </Link>
            </li>
            <li>
              <Link to='/about' className='link-btn'>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <form onSubmit={handleSubmit}>
          <input
            className='search'
            type='search'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </header>
  )
}

export default Navbar
