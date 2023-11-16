import {Navigate} from "react-router-dom";
import {useAuth} from "../authProvider/authProvider";
import {useEffect, useState} from "react"; // Import the Firebase auth state change listener


const ProtectedRoute = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser){
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }

    }, []);


    if (isAuthenticated === null) {
        // Still waiting to determine authentication state
        return null; // You might want to render a loading spinner or something else
    }
    if (!isAuthenticated) {
        // User is not authenticated, redirect to the home page
        return <Navigate to="/homePage" replace />;
    }
    // User is authenticated, render the protected content
    return children;

}
export default ProtectedRoute