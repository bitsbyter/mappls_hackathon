const Register =()=>{
return(
  <>
    <div className="w-sceen h-screen flex flex-col">
        <div className="logo w-auto h-auto flex justify-center m-12"><h1>HELLO</h1></div>
        <div className="profile_wrapper h-auto w-full flex flex-col justify-center items-center">
            <input id="Firstname" type="text" placeholder="Firstname" className="border w-48 h-10 rounded-lg m-4"/>
            <input id="Lastname" type="text" placeholder="Lastname" className="border w-48 h-10 rounded-lg m-4"/>
            <input id="E-mail" type="text" placeholder="Enter Your Email" className="border w-48 h-10 rounded-lg m-4"/> 
            <input id="Password" type="password" placeholder="Enter Your Password" className="border w-48 h-10 rounded-lg m-4"/>  
            <a className="SaveData border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center" href="/login">Submit</a>
        </div>
    </div>
  </>
)
}

export default Register;