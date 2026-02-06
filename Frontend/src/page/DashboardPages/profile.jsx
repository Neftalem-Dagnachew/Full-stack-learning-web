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

      console.log("New Photo URL:", result.profile_image);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h1>Profile: {user.nickname}</h1>
      <div>
        <h3>Change Profile</h3>
        <div style={{ marginBottom: "20px" }}>
          <img
            src={user.profile_image ? `${SERVER_URL}${user.profile_image}` : "/default-avatar.png"} 
            alt="Profile" 
            style={{ 
                width: "150px", 
                height: "150px", 
                borderRadius: "50%", 
                objectFit: "cover",
                border: "3px solid #ddd" 
            }}
            onError={(e) => { e.target.src = "/default-avatar.png"; }}
          />
        </div>
        <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
        />
      </div>
    </>
  );
}

export default Profile;