import "../DashboardPages/style/ChangeCoverImag.css"

function ChangeCoverImag() {
    return(
        <>
            <div className="cover-container">
                <h2 className="cover-title">Change Cover Photo</h2>

                <div className="info-box">
                    <div className="info-icon">i</div>
                    <p>
                    Your Cover Photo will be used to customize the header of your
                    profile.
                    </p>
                </div>

                <div className="drop-area">
                    <p>Drop your image here</p>
                    <button className="select-btn">Select your file</button>

                    <input type="file"/>
                </div>

                <div className="best-result">
                    For best results, upload an image that is 1950px by 450px or larger.
                </div>

                <p className="delete-text">
                    If you'd like to delete your current cover photo, use the delete Cover
                    Photo button.
                </p>

                <button className="delete-btn">
                    Delete My Cover Photo
                </button>
            </div>
        </>
    )
}

export default ChangeCoverImag;