function Login() {
    return <div>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <form>
            <input type="text" placeholder="Email or Phone Number" />
            <br/>
            <input type="password" placeholder="Password" />
            <br/>
            
            <button type="submit">Log In <a href="/forgot-password">Forget Password?</a></button>
        </form>
    </div>
}
export default Login;