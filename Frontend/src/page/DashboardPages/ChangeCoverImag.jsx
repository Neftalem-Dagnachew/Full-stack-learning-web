import "../DashboardPages/style/ChangeCoverImag.css"

function ChangeCoverImag() {
    return(
        <>
            <div className="cover-container">

                <div className="d-flex justify-content-center gap-5">
                    <div>
                        <h2 className="cover-title m-0 mb-2">Delate-Profile-photo</h2>
                        <button className="delete-btn">
                            Delete My Profile Photo
                        </button>
                    </div>

                    <div>
                        <h2 className="cover-title m-0 mb-2">Delate-Cover-Photo</h2>
                        <button className="delete-btn">
                            Delete My Cover Photo
                        </button>
                    </div>

                </div>

                
            </div>
        </>
    )
}

export default ChangeCoverImag;