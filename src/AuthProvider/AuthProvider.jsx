import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase.config";
import PropTypes from 'prop-types'

const googleProvider = new GoogleAuthProvider;
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading,setLoading]=useState(true)

    const createWithUserGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const createUser = (email, password, url, name) => {
        setLoading(true)


        return createUserWithEmailAndPassword(auth, email, password, url, name)

    }
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


useEffect(() => {

    const unSubscribe = onAuthStateChanged((auth), currentUser => {
        setUser(currentUser)
        setLoading(false)
    })
    return unSubscribe;

}, [])
const authInfo = { createWithUserGoogle, user, createUser, userLogin, logOut,loading };
return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    </div>
);
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;