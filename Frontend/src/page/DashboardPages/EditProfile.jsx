import "./style/EditProfile.css"

function EditProfile() {

    return(
        <>
            <div className="mt-4">
                <div className="gap-5 d-flex">
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

                <div className="mt-3">
                    <div className="editProfile_container">
                        <div className="d-flex justify-content-start">
                            <div className="heders d-flex align-items-center justify-content-center">
                                <h5 className="m-0">Details</h5>
                                <button className="Edit_profile_btn">Edit</button>
                            </div>
                        </div>
                        <hr className="m-0 p-0" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default EditProfile;