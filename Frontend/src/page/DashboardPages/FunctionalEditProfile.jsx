import "../DashboardPages/style/FunctionalEditProfile.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { updateProfile } from "../../services/api";

function FunctionalEditProfile() {

    const { user, setUser } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        nickname: user.nickname || "",
        phone_numer: user.phone_numer || "",
        identity: user.identity || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const data = await updateProfile(formData);
      setUser({ ...user, ...formData });
      alert("Profile updated");
      console.log(data);
    } catch (error) {
      console.error("UPDATE ERROR:", error);
      alert("Update failed");
    }
  };

    return(
        <>
            <div className="edit-container">
                <h2>Edit "Details" Information</h2>

                {/* First Name */}
                <div className="form-group">
                    <label>First name (required)</label>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </div>

                {/* Last Name */}
                <div className="form-group">
                    <label>Last name (required)</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </div>

                {/* Nickname */}
                <div className="form-group">
                    <label>Nickname (required)</label>
                    <input
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                    />
                </div>

                {/* Phone */}
                <div className="form-group">
                    <label>Phone number (required)</label>
                    <input
                        type="text"
                        name="phone_numer"
                        value={formData.phone_numer}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Identity (required)</label>
                    <input
                        type="text"
                        name="identity"
                        value={formData.identity || ""}
                        onChange={handleChange}
                    />
                </div>

                <button className="change_btn" onClick={handleSubmit}>Change</button>
            </div>
        </>
    )
}

export default FunctionalEditProfile;