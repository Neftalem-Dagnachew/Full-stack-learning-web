import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
    const { user, logout } = useContext(AuthContext);

    return(
        <>
            <h1>Dashboard</h1>
            <p className="mt-5">Welcome, {user.first_name}</p>
        </>
    )
}

export default Dashboard;