import "../DashboardPages/style/FunctionalEditProfile.css"

function FunctionalEditProfile() {
    return(
        <>
            <div className="all_container">
                <div className="mt-4">
                    <h1 className="m-0">Edit Profile</h1>
                    <button className="goTo_profile_btn"><i class="fa-solid fa-user pe-4"></i>View Profile</button>
                </div>
                <div className="edit-container">
                    <h2>Edit "Details" Information</h2>

                    {/* First Name */}
                    <div className="form-group">
                        <label>First name (required)</label>
                        <input
                        type="text"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="form-group">
                        <label>Last name (required)</label>
                        <input
                        type="text"
                        />
                    </div>

                    {/* Nickname */}
                    <div className="form-group">
                        <label>Nickname (required)</label>
                        <input
                        type="text"
                        />
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label>Phone number (required)</label>
                        <input
                        type="text"
                        />
                    </div>
                    <button className="change_btn">Change</button>
                </div>
            </div>
        </>
    )
}

export default FunctionalEditProfile;