import {useState} from "react";
import {authUserContext} from "./authUserContext";

const AuthUserProvider = ({children})=> {
    const [currentUser, setCurrentUser] = useState(null);

    const loginUser = (user)=> setCurrentUser(user);

    const logoutUser = ()=> setCurrentUser(null);



    return(
        <>
            <authUserContext.Provider value={{currentUser,loginUser,logoutUser}}>
                {children}
            </authUserContext.Provider>
        </>
    );
}
export default AuthUserProvider