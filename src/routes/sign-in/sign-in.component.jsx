import React, { useEffect } from "react";
import {getRedirectResult} from 'firebase/auth';

import {
    auth,
    signInWithGooglePopup,
    createUserProfileDocument,
    signInWitGoogleRedirect,
  } from '../../utils/firebase/firebase.utils';
  
  import {createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

  const SignIn = () => {
      useEffect(() => {
        async function fetchData() {
          const response = await getRedirectResult(auth);
          console.log(response);
        }
        fetchData();
      }, []);


    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user);
    };

    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button><br />
        <button onClick={signInWitGoogleRedirect}>Sign in with Google Redirect</button>
      </div>
    );
  };
  
  export default SignIn;