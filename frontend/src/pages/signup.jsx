function Signup() {
    return <div>
        <h1>Create an account!</h1>
        <p>Enter your details below:</p>
        <form>
            <input type="text" name="Name" placeholder="Name" />
            <br />
            <input type="text" placeholder="Email or Phone Number" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button type="submit">Create Account</button>
            <p>Already have an account? <a href="./login">Log In</a></p> 
        </form>
    </div>
}
export default Signup;