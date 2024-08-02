import'../Styles/error.css'
function Error(){
    return<div className="error-container">
    <h1 className="error-heading">404 Not Found</h1>
    <p className="error-paragraph">The page you visited could not be found. You may go back to the home page.</p>
    <button className="error-button">
      <a className="error-link" href='/'>Back to Home Page</a>
    </button>
  </div>
    }
export default Error;