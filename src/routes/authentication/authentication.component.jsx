// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import { auth, signInWithGoogleRedirect, signInWithGooglePopup, createUserDocumentFromAuth} from "../../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     fetchData();   
    // }, []);

    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // };

    return (
        <div className="authentication-container">
            {/* <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;
