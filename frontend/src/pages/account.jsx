import '../Styles/account.css'
function User() {
    return <div>
        <div className="containers1">
            <div className="sidebar">
                <h5>Manage My Account</h5>
                <ul>
                    <li className="active">My Profile</li>
                    <li>Address Book</li>
                    <li>My Payment Options</li>
                </ul>
                <h5>My Orders</h5>
                <ul>
                    <li>My Returns</li>
                    <li>My Cancellations</li>
                </ul>
                <h5>My Wishlist</h5>
            </div>
            <div className="content">
                <h1>Edit Your Profile</h1>
                <form className="form">
                    <label>First Name</label>
                    <input type="text" name="first_name" placeholder="Enter your name" />
                    <label>Last Name</label>
                    <input type="text" name="last_name" placeholder="Surname"  />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email"  />
                    <label>Address</label>
                    <input type="text" name="address" placeholder="Enter your address"  />
                    <label>Password Changes</label>
                    <input type="password" name="current_password" placeholder="Current Password" />
                    <input type="password" name="new_password" placeholder="New Password" />
                    <input type="password" name="confirm_password" placeholder="Confirm New Password" />
                    <div className="buttons">
                        <button type="button" className="cancel">Cancel</button>
                        <button type="submit" className="save">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default User;