import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
    const { user } = useContext(AuthContext)
    return(
        <>
            <h1>profile pafe</h1>
            <h1>Profile: {user.nickname}</h1>
        </>
    )

}

export default Profile;