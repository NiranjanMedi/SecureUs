
/**
 * import React, { useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { getAuth } from 'firebase/auth';

const SignInComponent = () => {
    const uiConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Customize other FirebaseUI options if needed
    };
  
    const uiContainerRef = useRef(null);
    const firebaseAuth = getAuth();
  
    useEffect(() => {
      const ui = new firebaseui.auth.AuthUI(firebaseAuth);
      ui.start('#firebaseui-auth-container', uiConfig);
    }, [firebaseAuth, uiConfig]);
  
    return <div id="firebaseui-auth-container" ref={uiContainerRef} />;
};

export default SignInComponent;
 * 
 */