import {createContext, useContext, useEffect, useState} from "react";
import { getAuth } from "firebase/auth";


const AuthContext = createContext();
const AuthProvider = ({ children })=>{
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);


    const value = {
        currentUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};