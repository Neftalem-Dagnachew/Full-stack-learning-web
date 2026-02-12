import "../DashboardPages/style/FunctionalEditProfile.css"

function FunctionalEditProfile() {
    return(
        <>
            <div className="all_container">
                <div className="edit-container">
                    <h2>Edit "Details" Information</h2>

                    {/* First Name */}
                    <div className="form-group">
                        <label>First name (required)</label>
                        <input
                        type="text"
                        />
                        <span className="privacy public">Public</span>
                    </div>

                    {/* Last Name */}
                    <div className="form-group">
                        <label>Last name (required)</label>
                        <input
                        type="text"
                        />
                        <div className="privacy-row">
                        <span className="privacy public">Public</span>
                        </div>
                    </div>

                    {/* Nickname */}
                    <div className="form-group">
                        <label>Nickname (required)</label>
                        <input
                        type="text"
                        />
                        <span className="privacy public">Public</span>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label>Phone number (required)</label>
                        <input
                        type="text"
                        />
                        <div className="privacy-row">
                        <span className="privacy private">Only Me</span>
                        <button className="change-btn">Change</button>
                        </div>
                    </div>
                    <button className="change_btn">Change</button>
                </div>
            </div>
        </>
    )
}

export default FunctionalEditProfile;