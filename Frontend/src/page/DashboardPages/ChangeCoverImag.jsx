import "../DashboardPages/style/ChangeCoverImag.css"

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { deleteProfilePhoto, deleteCoverPhoto, getMe } from "../../services/api";

function ChangeCoverImag() {

    const { user, setUser } = useContext(AuthContext);

    const handleDeleteProfile = async () => {
        try {
            await deleteProfilePhoto();
            const updatedUser = await getMe();
            setUser(updatedUser);
            alert("Profile photo deleted");
        } catch (err) {
            console.error(err);
            alert("Failed to delete profile photo");
        }
    }

    const handleDeleteCover = async () => {
        try {
            await deleteCoverPhoto();
            const updatedUser = await getMe();
            setUser(updatedUser);
            alert("Cover photo deleted");
        } catch (err) {
            console.error(err);
            alert("Failed to delete cover photo");
        }
    }

    return(
        <>
            <div className="cover-container">

                <div className="d-flex justify-content-center gap-5">
                    <div>
                        <h2 className="cover-title m-0 mb-2">Delate-Profile-photo</h2>
                        <button type="button" className="delete-btn" onClick={handleDeleteProfile}>
                            Delete My Profile Photo
                        </button>
                    </div>

                    <div>
                        <h2 className="cover-title m-0 mb-2">Delate-Cover-Photo</h2>
                        <button className="delete-btn" onClick={handleDeleteCover}>
                            Delete My Cover Photo
                        </button>
                    </div>

                </div>

                
            </div>
        </>
    )
}

export default ChangeCoverImag;