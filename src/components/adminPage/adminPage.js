import styles from './adminPage.module.css'
import { useNavigate} from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import EventPage from "../homePage/eventPage/eventPage";
import {useState} from "react";
import EventModal from "./eventModal/eventModal";




const AdminPage = ()=>{
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);


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

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return(
        <>
            <h1>Logged in!</h1>
            <button onClick={handleLogout}>Log Out</button>

            <button onClick={openModal} type="button"> Add Event</button>
            {isModalOpen && <EventModal closeModal={closeModal} />}

            <EventPage />
        </>
    )

}
export default AdminPage;