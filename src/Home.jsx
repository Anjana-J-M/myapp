import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const users = useSelector((state) => state.users)
  console.log('data from store',users);
  
  return (
    <div> <h1>Welcome </h1></div>
  )
}

export default Home