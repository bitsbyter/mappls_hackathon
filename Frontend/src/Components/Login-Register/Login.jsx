import { FaGoogle } from "react-icons/fa6";

const Login=()=>{
  return(
    <>
    <div className="w-screen h-screen flex items-center">
        <div className="w-full h-auto flex flex-col items-center">
            <input id="E-mail" type="text" placeholder="Enter Your Email" className="border w-48 h-10 rounded-lg m-4"/>
            <input id="Password" type="text" placeholder="Enter Your Password" className="border w-48 h-10 rounded-lg m-4"/>
            <div className="buttons flex min-w-max">
                <a href="/register" className="SignIn border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center">Sign Up</a>
                <a href="/options" className="LogIn border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center">Log In</a>
            </div>
            <a href="" className="GoogleAuth border rounded-lg bg-black-800 text-white/70 m-4 w-48 h-8 text-center flex justify-around items-center">Login with Google <FaGoogle /></a>
        </div>
    </div>
    </>
  )
}

export default Login;
