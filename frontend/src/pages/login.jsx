import '../Styles/login.css'
function Login() {
    return <div className="container">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <form>
            <div className="input-group">
                <input type="text" placeholder="Email or Phone Number" />
            </div>
            <div className="input-group">
                <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="login-button ">Log In</button>
        </form>
        <div className="forgot-password">
            <a href="/account">Forget Password?</a>
        </div>
    </div>
}
export default Login;