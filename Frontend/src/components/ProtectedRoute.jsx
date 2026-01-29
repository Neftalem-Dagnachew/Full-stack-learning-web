import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function ProtectedRoute({ children }) {
    const { user, loading } = useContext(AuthContext);

    if(loading) return <p>loading...</p>
    if(!user) return <Navigate to="/login" replace />

    return children;

}

export default ProtectedRoute;