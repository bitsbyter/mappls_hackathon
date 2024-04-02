import logo from '../../assets/Images/logo.png'
import google from '../../assets/Images/google.png'
import profile from '../../assets/Images/profile.png'

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
import { Link, useNavigate} from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { UserActions } from "../../Store/userSlice";

const Login=()=>{
  const userCoords=useSelector((store)=>store.userCoords);
  console.log(userCoords);
  const dispatch=useDispatch();
  const navigate=useNavigate();
const auth = getAuth();
const signInWithGoogle=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const email=user.email;
    const name=user.displayName;
    dispatch(UserActions.setActiveUser({email,name}))
    navigate("/options");
    // console.log(user)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
     console.log(error)

  });
}

  return(
    <>
        <div className="w-auto rounded-2xl h-auto flex flex-col items-center bg-black/70">

            <img className='m-8' src={logo} alt="" />

            {/* <div className='w-auto h-auto flex flex-col justify-center items-start m-2'>
              <label className='text-[#FBBC05] m-1 text-md' htmlFor="username">Username</label>
              <input id="username" type="text" className="border w-48 h-10 rounded-lg bg-white/80"/>
            </div>
            <div className='w-auto h-auto flex flex-col justify-center items-start m-2'>
              <label className='text-[#FBBC05] m-1 text-md'l htmlFor="Password">Password</label>
              <input id="Password" type="text" className="border w-48 h-10 rounded-lg bg-white/80"/>
            </div> */}

            {/* <Link to={'./options'} className='login-with-username w-20 h-7 rounded-lg bg-[#FBBC05] text-black m-4 flex justify-center items-center'>Log In</Link> */}
              <p className='monseratt mb-6 lg:text-lg'>Please choose your login method</p>
            
              <Link onClick={signInWithGoogle} className='h-12 w-80 rounded-full bg-white/90 m-2 flex items-center mb-2'> <img className='w-12 h-12 m-2' src={google} alt=""  /> <p className='text-black font-semibold p-6 text-lg'>Continue with google</p> </Link>
              <Link to="/options" className='h-12 w-80 rounded-full bg-white/90 m-2 flex items-center mb-8'> <img className='w-12 h-12 m-2' src={profile} alt="" /> <p className='text-black font-semibold p-6 text-lg'>Continue as a guest</p> </Link>
            

            {/* <Link className='underline mb-2' to={'./register'}>Create a new account</Link> */}

            {/* <div className="buttons flex min-w-max">
                <Link to="/register" className="SignIn border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center">Sign Up</Link>
                <Link to="/options" className="LogIn border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center">Log In</Link>
            </div> */}

            {/* <button className="GoogleAuth border rounded-lg bg-black-800 text-white/70 m-4 w-48 h-8 text-center flex justify-around items-center" onClick={signInWithGoogle}>Login with Google <FaGoogle /></button> */}

        </div>
    </>
  )
}

export default Login;
