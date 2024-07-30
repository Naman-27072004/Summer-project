import '../Styles/navbar.css'
function Navbar() {
    return <div className="navbar">
        <navbar>
            <nav>
                <div>
                    
                </div>
                <div className='nav-bar'>
                    <span className = "bold-nav">Exclusive</span>
                    <div><a href="/">Home</a></div>
                    <div><a href="/contact">Contact</a></div>
                    <div><a href="/about">About</a></div>
                    <div><a href="/signup">Sign Up</a></div>
                    <input type="text" placeholder="What are you looking for?" size="30" />
                    <button>
                        <i></i>
                    </button>
                    <button>
                        <i></i>
                    </button>
                    <button>
                        <i></i>
                    </button>
                </div>
            </nav>
        </navbar>
    </div>
}
export default Navbar;