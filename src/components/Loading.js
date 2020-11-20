import React from 'react'

const Loading = () => {
  return (
    <div className='loading'>
      <span>↓</span>
      <span style={{ '--delay': '0.1s' }}>↓</span>
      <span style={{ '--delay': '0.3s' }}>↓</span>
      <span style={{ '--delay': '0.4s' }}>↓</span>
      <span style={{ '--delay': '0.5s' }}>↓</span>
      <p>Loading...</p>
    </div>
  )
}

export default Loading
