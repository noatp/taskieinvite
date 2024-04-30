// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCmpdac7WFFcXhGxR4S1MYP7K5xbfwhXc",
  authDomain: "taskit-8c240.firebaseapp.com",
  projectId: "taskit-8c240",
  storageBucket: "taskit-8c240.appspot.com",
  messagingSenderId: "866486091483",
  appId: "1:866486091483:web:709a65ef9ab3e7cead96fe",
  measurementId: "G-8YQ59JHZVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const analytics = getAnalytics(app);
const householdId = extractHouseholdIdFromPath(); 

function extractHouseholdIdFromPath() {
    const pathSegments = window.location.pathname.split('/');
    if ((pathSegments.length > 2) && (pathSegments[1] == "invite")) {
        return pathSegments.length > 2 ? pathSegments[2] : null;
    }
    else {
        return null
    }
}

const handleClick = () => {
    console.log(householdId)
    // window.location.href = 'https://apps.apple.com/app/apple-store/id1447330651'; // Change URL as needed
};

function EmailPanel(): React.ReactElement {


    return (
        <div className="text-center emailPanel p-4" id='emailPanel'>
            <h2 className="mb-4">You're invited to join Taskie!<br />But first - your email.</h2>
            <div className="mb-4">
                Enter the email you'll use for your future Taskie account.
            </div>
            <input className="mb-4 p-2 w-100" type="text" id="emailTextField" placeholder="Your email address"/>

            <button type="button" className="primary-button w-100 p-2" onClick={handleClick}>Continue</button>
        </div>
    )
}

export default EmailPanel