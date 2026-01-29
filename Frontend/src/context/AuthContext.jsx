
import { createContext, useState, useEffect } from "react";
import { getMe } from "../services/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token) {
            setUser(null)
            setLoading(false);
        }

        getMe()
            .then(setUser)
            .catch(() => {
                localStorage.removeItem(token);
                setLoading(false);
            })
            .finally(() => setLoading(false));

    }, [])

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ user, setUser, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;