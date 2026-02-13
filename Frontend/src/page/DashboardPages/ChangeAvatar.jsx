
import "../DashboardPages/style/ChangeAvatar.css"

function ChangeAvatar() {
    return(
        <>
            <div>
                <div className="changeavatar_container">

                    <div>
                        <h2 className="title">Change Profile Photo</h2>

                        <div className="info-box">
                            <div className="info-icon">i</div>
                            <p>
                            Your profile photo will be used on your profile and throughout the
                            site.
                            </p>
                        </div>

                        <div className="tabs">
                            <button className="active">Upload</button>
                            <button className="delete-btn">Delete</button>
                        </div>

                        <div className="drop-area">
                            <p>Drop your image here</p>
                            <button className="select-btn">Select your file</button>

                            <input type="file"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ChangeAvatar;