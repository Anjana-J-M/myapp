import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const users = useSelector((state) => state.users)
  console.log('data from store',users);
  
  return (
    <div> <h1>Welcome</h1>
    
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"left"}}>
    <h2>Name:{users && users.user.username}</h2>
    <h2>Role:{users && users.user.roles[0]}</h2>
    </div>
  
    </div>
  )
}

export default Home