import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../firebase";


export const signInUser =  async (email: string, password: string) =>  {

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        return userCredentials.user
    }
    catch (error){
        console.error(error)
        return false
    }
}

export const signOutUser = ()=> {
    signOut(auth).then(() => {
        console.log('Sign-out successful')
    }).catch((error) => {
        console.log('An error happened while signing out.')
    });
}


export const checkAuthentication = ()=> {

    return new Promise((resolve)=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            unsubscribe();
            resolve (user)
        })
    })

}
