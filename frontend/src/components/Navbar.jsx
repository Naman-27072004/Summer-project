function Navbar() {
    return <div>
        <navbar>
            <nav>
                <div>
                    <span>Exclusive</span>
                </div>
                <div>
                    <a href="../pages/homepage.jsx">Home</a>
                    <a href="../pages/contact.jsx">Contact</a>
                    <a href="../pages/about.jsx">About</a>
                    <a href="../pages/signup.jsx">Sign Up</a>
                </div>
                <div>
                    <input type="text" placeholder="What are you looking for?" />
                    <button>
                        <i></i>
                    </button>
                </div>
                <div>
                    <button>
                        <i></i>
                    </button>
                </div>
            </nav>
        </navbar>
    </div>
}
export default Navbar;