import { useEffect, useState } from "react";
import {
   getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,
   updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, signOut
} from "firebase/auth";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import firebaseInitialization from "../firebase/firebase.init";


// Initialize firebase app
firebaseInitialization();
const useFirebase = () => {
   const [user, setUser] = useState({});
   const router = useRouter();
   // GoogleProvider
   const googleProvider = new GoogleAuthProvider();
   // Auth
   const auth = getAuth();
   // Handle Google Sign In
   const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            const user = result.user;
            setUser(user);

            
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Registered Successfully',
            });
            router.push('/');
         }).catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
            });
         });
   }
   // Assume this utility fetches admin status from your backend or Firebase
const adminStatusCheck = async (email) => {
   return false; 
 }
   // Register User
   const handleRegister = (userData, reset) => {
      const { name, email, password, ...restUserData } = userData;
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          const user = result.user;
          setUser({ displayName: name, email });
          // Imagine this function saves the full user details somewhere
          usersCollection({ ...restUserData, displayName: name, email }, 'POST');
          
          await updateProfile(auth.currentUser, {
            displayName: name,
          });
          const isAdmin = await adminStatusCheck(email); 
          
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Registered Successfully',
          });
          reset(); 
          router.push(isAdmin ? '/admin' : '/');
        })
        .catch((error) => {
          const errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
          });
        });
    }
   const checkIfAdmin = async () => {
      const idTokenResult = await auth.currentUser.getIdTokenResult();
      const isAdmin = !!idTokenResult.claims.isAdmin;
      return isAdmin;
   }
   // Login User
   const loginUser = (email, password, reset) => {
      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const user = result.user;
            setUser(user);
            
            checkIfAdmin().then(isAdmin => {
               Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Logged In Successfully',
                  timer: 1500
               });
               reset();
               router.push(isAdmin ? '/admin' : '/');
            });
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
               timer: 1500
            });
         });
   }
   // Password reset email
   const passwordResetEmail = (email) => {
      sendPasswordResetEmail(auth, email)
         .then(() => {
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Password reset email sent',
            });
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
               timer: 1500
            });
         });
   }
   // Logout
   const logout = () => {
      signOut(auth).then(() => {
         setUser({});
         Swal.fire({
            icon: 'success',
            title: 'Logged Out Successfully',
         });
         router.push('/');
      }).catch((error) => {
         // Handle Logout Error
      });
   }
   // On Auth State Change
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser || {});
      });
      return unsubscribe;
   }, [auth]);
   // Use Collection
   const usersCollection = (userData, userMethod) => {
      const url = `http://localhost:4002/employees/`; 
      fetch(url, {
          method: userMethod,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
      .then(res => res.json())
      .then(result => console.log(result));
  }
   return {
      user,
      handleGoogleSignIn,
      handleRegister,
      loginUser,
      passwordResetEmail,
      logout,
   }
}
export default useFirebase;