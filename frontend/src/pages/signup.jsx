
import '../Styles/signup.css'
function Signup() {
    return <div className="sign-up">
    <h1>Create an account</h1>
    <p>Enter your details below</p>
    <form>
      <div className="inputs-group">
        <input type="text" name="Name" placeholder="Name" />
      </div>
      <div className="inputs-group">
      <input type="text" placeholder="Email or Phone Number" />
      </div>
      <div className="inputs-group">
      <input type="password" placeholder="Password" />
      </div>
      <button type="submit" className="sign-button">Create Account</button>
      <p className="para">
        Already have an account? <a href="/login">Log In</a>
      </p>
    </form>
  </div>
}
export default Signup;