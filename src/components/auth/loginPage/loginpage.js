import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const LoginPage = ({userStatus}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const auth= getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const cred = userCredential.user;
                console.log('userCred: '+ cred.email)
                navigate('/adminPage');

            })
            .catch(()=>{
                console.log('Invalid Information!!');
            })
    }

    return(
        <>
            <form onSubmit={handleLogin} >
                <label>Email<input type={'text'}  onChange={(event)=> setEmail(event.target.value)}/></label>
                <label>Password<input type={'password'} onChange={(event)=> setPassword(event.target.value)}/></label>
                <button type={"submit"}>Login</button>
            </form>



        </>
    );
}

export default LoginPage;