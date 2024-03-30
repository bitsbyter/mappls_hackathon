
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAa08mNoFwQ66uDPyuvJBgVTI6I5Cgyr54",
  authDomain: "mapplshackathon.firebaseapp.com",
  projectId: "mapplshackathon",
  storageBucket: "mapplshackathon.appspot.com",
  messagingSenderId: "1045681932336",
  appId: "1:1045681932336:web:070657638a7429123b85f5"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
import { getAuth, signInWithPopup } from "firebase/auth";
import { Link} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";


const Login=()=>{
  
const auth = getAuth();
const signInWithGoogle=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
 
  });
}

  return(
    <>
    <div className="w-screen h-screen flex items-center">
        <div className="w-full h-auto flex flex-col items-center">
            <input id="E-mail" type="text" placeholder="Enter Your Email" className="border w-48 h-10 rounded-lg m-4"/>
            <input id="Password" type="text" placeholder="Enter Your Password" className="border w-48 h-10 rounded-lg m-4"/>
            <div className="buttons flex min-w-max">
                <Link to="/register" className="SignIn border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center">Sign Up</Link>
                <Link to="/options" className="LogIn border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center">Log In</Link>
            </div>
            <a href="" className="GoogleAuth border rounded-lg bg-black-800 text-white/70 m-4 w-48 h-8 text-center flex justify-around items-center">Login with Google <FaGoogle /></a>
        </div>
    </div>
    </>
  )
}

export default Login;
