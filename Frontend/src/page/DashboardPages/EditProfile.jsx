import "./style/EditProfile.css"

function EditProfile() {
    return(
        <>
            <div className="mt-4 gap-5 d-flex">
                <div className="links_container">
                    <p className="m-0 profile_link">Profile</p>
                    <div className="under_line"></div>
                </div>

                <div className="links_container">
                    <p className="m-0 profile_link">Courses</p>
                </div>

                <div className="links_container">
                    <p className="m-0 profile_link">Achievements</p>
                </div>
            </div>
        </>
    )
}

export default EditProfile;