import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateProfilePhoto } from "../../services/api";

const SERVER_URL = "http://localhost:5000";

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
      alert("Have Error: " + err.message);
    }
  };

  if (!user) return <div className="p-5 text-center">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="mb-4 poppins-bold">Profile: {user.nickname}</h1>
          
          <div className="profile_main_wrapper d-flex flex-column align-items-center gap-4">
            
            <div className="image_display_area">
              {user.profile_image ? (
                <img 
                  src={`${SERVER_URL}${user.profile_image}`} 
                  alt="Profile" 
                  className="profile_circle_img"
                  style={{ 
                    width: "150px", 
                    height: "150px", 
                    borderRadius: "50%", 
                    objectFit: "cover",
                    border: "4px solid #fff",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
                  }} 
                />
              ) : (
                <div style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #ddd",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.05)"
                }}>
                  <i className="fa-solid fa-user text-secondary" style={{ fontSize: "50px" }}></i>
                </div>
              )}
            </div>

            <div className="user_details mt-3">
              <h3 className="poppins-regular">{user.first_name} {user.last_name}</h3>
              <p className="text-muted">{user.email}</p>
            </div>

            <div className="upload_section mt-4 p-4 border rounded bg-light">
              <h5 className="poppins-light mb-3">Change Profile Picture</h5>
              <input 
                type="file" 
                className="form-control"
                accept="image/*" 
                onChange={handleFileChange} 
              />
              <p className="mt-2 text-info small">Max size: 5MB</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;