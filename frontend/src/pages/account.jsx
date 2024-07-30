function User() {
    return <div>
        <div>
            <h5>Manage My Account</h5>
            <ul>
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
            </ul>
        </div>
        <div>
            <h5>My Orders</h5>
            <ul>
                <li>My Returns</li>
                <li>My Cancellations</li>
            </ul>
        </div>
        <div>
            <h5>My wishlist</h5>
        </div>
        <h1>Edit Your Profile</h1>
        <form>
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="Enter your name" />
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="Surname"/>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email"/>
            <label>Address</label>
            <input type="text" name="address" placeholder="Enter your password"/>
            <label>Password Changes</label>
            <input type="text" name="current_password" placeholder="Current Password"/>
            <input type="text" name="new_password" placeholder="New password"/>
            <input type="text" name="confirm_password" placeholder="Confirm New Password"/>
            <button>Cancel</button>
            <button>Save Changes</button>
        </form>
    </div>
}
export default User;