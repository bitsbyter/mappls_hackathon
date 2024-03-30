import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register =()=>{
  const userFirstNameElement=useRef();
  const userEmailElement=useRef();
  const userPasswordElement=useRef();
  const userLastNameElement=useRef();


    const handleClick=(e)=>{
      e.preventDefault();
      const userFirstName=userFirstNameElement.current.value;
      const userEmail=userEmailElement.current.value;
      const userPassword=userPasswordElement.current.value;
      const userLastName=userLastNameElement.current.value;
      console.log(firstName.current.value);
      console.log(lastName.current.value);
      axios.post("http://localhost:3000/Register",{
        email:userEmail,
        password:userPassword,
        fName:userFirstName,
        lName:userLastName
      })
      .then((response)=>{
         console.log(response.data);
      })
      .catch((error)=>{
        console.log(error)
      })
    }

return(
  <>
    <div className="w-sceen h-screen flex flex-col">
        <div className="logo w-auto h-auto flex justify-center m-12"><h1>HELLO</h1></div>
        <div className="profile_wrapper h-auto w-full flex flex-col justify-center items-center">
            <input id="Firstname" type="text" placeholder="Firstname" className="border w-48 h-10 rounded-lg m-4" ref={userFirstNameElement}/>
            <input id="Lastname" type="text" placeholder="Lastname" className="border w-48 h-10 rounded-lg m-4" ref={userLastNameElement}/>
            <input id="E-mail" type="text" placeholder="Enter Your Email" className="border w-48 h-10 rounded-lg m-4" ref={userEmailElement}/> 
            <input id="Password" type="password" placeholder="Enter Your Password" className="border w-48 h-10 rounded-lg m-4" ref={userPasswordElement}/>  
            <Link className="SaveData border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center" to="/login" onClick={handleClick}>Submit</Link>
        </div>
    </div>
  </>
)
}

export default Register;