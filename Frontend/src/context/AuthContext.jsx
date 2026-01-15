
import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider() {

    const [ user, setUser ] = useState(null);

    return(
        <AuthProvider.Provider value={{ user, setUser }}>
            {Children}
        </AuthProvider.Provider>
    )
}

export default AuthProvider;