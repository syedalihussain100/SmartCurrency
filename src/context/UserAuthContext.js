import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
    // signInWithPopup,
} from "firebase/auth"
import { auth, db } from "../Components/config/firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";




const userAuthContext = createContext();




export const UserAuthContext = ({ children }) => {
    const [user, setUser] = useState(null);


    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    async function signUp(email, password, name, address) {
        let data = await createUserWithEmailAndPassword(auth, email, password);
        let uid = data?.user?.uid;

        const userRef = doc(db, 'users', uid);
        setDoc(userRef, { role: 'user' });


        const docRef = await addDoc(collection(db, "userData"), {
            uid: uid,
            email: email,
            name: name,
            address: address,
        });
        console.log("Document written with ID: ", docRef?.id);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Register Successfully",
            showConfirmButton: false,
            timer: 1500,
        });

    }


    async function logOut() {
        await signOut(auth);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logout Successfully!",
            showConfirmButton: false,
            timer: 1500,
        });

        setTimeout(() => {
            window.location.reload()
        }, 1000);

    }







    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);



    return (
        <userAuthContext.Provider
            value={{ user, setUser, logIn, signUp, logOut }}
        >
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}