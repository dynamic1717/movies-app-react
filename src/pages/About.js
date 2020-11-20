import React from 'react'

export default function About() {
  return (
    <section className='about'>
      <h2>About</h2>
      <p>
        In this application you can see new movies, search for any movie and add
        the specific movie to your favorites. <br />
        <br />
        Clicking on a movie opens a separate page of the movie, where you can
        see its release date, rating, overview and trailer from YouTube.
        <br />
        <br />
        The app is built with React JS using Hooks, Context API, Router and
        React Icons.
        <br />
        <br />
        Used API: themoviedb, youtube api v3
      </p>
    </section>
  )
}
