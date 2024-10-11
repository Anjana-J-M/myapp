import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from './store/userReducer'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const setData = async (e) => {
  e.preventDefault();
  dispatch(addUser({username,password }));
  //navigate('/home')
  }
  useEffect(()=>{console.log('users',users);
  },[users])
  return (
    <>
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "center", marginTop: "100px"
      }}>

        <div style={{
          width: "500px", height: "300px",
          border: "solid 2px white", borderRadius: "30px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}>

          <h1>Login Page</h1>
          <div style={{ margin: "5px" }}>
            <label htmlFor="" style={{ fontWeight: "bolder", margin: "5px" }}>Username:</label>
            <input type="text" style={{ padding: "8PX", margin: "5px" }} onChange={(e) => { setUsername(e.target.value) }} />
          </div>
          <div style={{ margin: "5px", padding: "5PX" }}>
            <label htmlFor="" style={{ fontWeight: "bolder", margin: "5px" }}>Password:</label>
            <input type="password" style={{ padding: "8PX", margin: "5px" }} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div style={{ margin: "5px" }}>
            <button style={{
              padding: "10px", backgroundColor: "black",
              color: "white", fontSize: "25px",
              margin: "10px", width: "350px", borderRadius: "30px"
            }} onClick={setData}>Login</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default Login