import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateProfilePhoto } from "../../services/api";

const SERVER_URL = "http://localhost:5000";

import "../DashboardPages/style/profile.css"

// img
import profileImg from "../../assets/Navbar-img/profile.png";

function Profile() {
  const { user, setUser } = useContext(AuthContext);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const result = await updateProfilePhoto(file);
      alert("Photo Successfully changed");
      
      if (result && result.profile_image) {
        setUser({ ...user, profile_image: result.profile_image });
      }
    } catch (err) {
      alert("Have Erorr: " + err.message);
    }
  };

  if (!user) return <div className="p-5 text-center">Loading...</div>;

  return (
    <div className="container mt-5">
        {/* <img src="" /> */}
            
        <div className="image_display_area">
            <label htmlFor="upload-photo" className="profile_image_wrapper">
                {user.profile_image ? (
                    <img 
                    src={`${SERVER_URL}${user.profile_image}`} 
                    alt="Profile" 
                    className="profile_circle_img"/>
                ) : (
                    <div>
                        <img className="profile_circle_img" src={profileImg} />
                    </div>
                )}
                <div className="profile_img_overlay">
                    <div className="camera_icon_bg">
                        <i className="fa-solid fa-camera"></i>
                    </div>
                    <p className="overlay_text">Change Profile Photo</p>
                </div>
                <input type="file" id="upload-photo" hidden accept="image/*" onChange={handleFileChange} />
            </label>
        </div>
    </div>
  );
}

export default Profile;