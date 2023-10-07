import { createContext, useEffect,useState } from "react";
export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase.config";
import PropTypes from 'prop-types'

const googleProvider = new GoogleAuthProvider;
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const createWithUserGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const createUser =(email,password,url)=>{


        return createUserWithEmailAndPassword(auth,email,password,url)
    }
    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect (() => {

        const unSubscribe = onAuthStateChanged((auth), currentUser =>{
            setUser(currentUser)
        })
        return unSubscribe;
       
    }, [])
const authInfo = { createWithUserGoogle,user,createUser,userLogin,logOut };
return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    </div>
);
};
AuthProvider.propTypes ={
    children:PropTypes.node
}

export default AuthProvider;