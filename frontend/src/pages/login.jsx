import { useState } from 'react';
import '../Styles/login.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/')
                }

            })
            .catch(err => console.log(err))
    }
    return <div className="container">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" placeholder="Email or Phone Number" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group">
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>

        </form>
        <div className="forgot-password">
            <a href='/'><button type="submit" className="login-button ">Log In</button></a>
            <p></p>
            <a href="/account">Forget Password?</a>
        </div>
    </div>
}
export default Login;