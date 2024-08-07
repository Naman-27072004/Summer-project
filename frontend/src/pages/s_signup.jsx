
import { useState } from 'react';
import '../Styles/signup.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
function S_signup() {
  const [username, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isAdmin, setAdmin] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/signup', { username, email, password, isAdmin })
      .then(result => {
        console.log(result)
        navigate('/login')
      })
      .catch(err => console.log(err))
  }


  return <div className="sign-up">
    <h1>Create an account</h1>
    <p>Enter your details below</p>
    <form onSubmit={handleSubmit}>
      <div className="inputs-group">
        <input type="text" name="Name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="inputs-group">
        <input type="text" placeholder="Email or Phone Number" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="inputs-group">
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='inputs-group'>
        <input type ="text" value="true" hidden onChange={(e) => setAdmin(e.target.value)}/>
      </div>
      <a href='login'><button type="submit" className="sign-button">Create Account</button></a>

      <p className="para">
        Already have an account? <a href="/login">Log In</a>
      </p>
    </form>
  </div>
}
export default S_signup;