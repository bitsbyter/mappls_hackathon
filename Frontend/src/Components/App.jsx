import Login from './Login-Register/Login'
import Register from './Login-Register/Register'
function App() {
 
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center flex-col'>
        <p className='text-3xl m-4'>App Logo</p>
        <a className="SignIn border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center" href="/login">Log In to Explore</a>
      </div>
    </>
  )
}
export default App;