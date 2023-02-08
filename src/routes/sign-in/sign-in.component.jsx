import React from "react";
import {
    signInWithGooglePopup,
    createUserProfileDocument,
    signInWitGoogleRedirect,
  } from '../../utils/firebase/firebase.utils';
  
  import {createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

  const SignIn = () => {
    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user);
    };
  
    const logGoogleRedirectUser = async () => {
      const {user} = await signInWitGoogleRedirect();
      console.log({user})
    };

    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button><br />
        <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
      </div>
    );
  };
  
  export default SignIn;