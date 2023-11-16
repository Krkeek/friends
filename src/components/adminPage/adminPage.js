import styles from './adminPage.module.css'
import { useNavigate} from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';


const AdminPage = ()=>{
    const navigate = useNavigate();

    const handleLogout = async () => {

        const auth = getAuth();
        try {
            await signOut(auth);
            navigate('/homePage');
            // Optional: Perform additional actions after logout if needed
        } catch (error) {
            console.error('Error during logout:', error);
        }


    }

    return(
        <>
            <h1>Logged in!</h1>
            <button onClick={handleLogout}>Log Out</button>
        </>
    )

}
export default AdminPage;