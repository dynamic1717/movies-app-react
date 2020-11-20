import React, { useState, useContext, useEffect, useCallback } from 'react'

const getLocalStorage = () => {
  let fav = localStorage.getItem('fav')
  if (fav) {
    return (fav = JSON.parse(localStorage.getItem('fav')))
  } else {
    return []
  }
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [fav, setFav] = useState(getLocalStorage())

  const getMovies = useCallback((API) => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.results)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    getMovies()
  }, [getMovies])

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 6) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  const removeFav = (id) => {
    setFav(fav.filter((item) => item.id !== id))
  }

  const clearFav = () => {
    setFav([])
  }

  const toggleFav = (id, title, poster_path) => {
    if (!fav.find((item) => item.id === id)) {
      const newItem = { id, title, poster_path }
      setFav([...fav, newItem])
      console.log('added to favs')
    } else {
      removeFav(id)
      console.log('removed from favs')
    }
  }

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav))
  }, [fav])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        movies,
        searchTerm,
        setSearchTerm,
        getMovies,
        setVoteClass,
        fav,
        removeFav,
        clearFav,
        toggleFav,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
