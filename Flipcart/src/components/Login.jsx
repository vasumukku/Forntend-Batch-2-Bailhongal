import React from 'react'

const Login = () => {
  return (
    <div className='login-main-parent'>
      <div className='loginpage-style'>
        <label htmlFor="" style={{fontSize:"30px"}}>Username</label><br />
        <input type="email" placeholder='enter your email' style={{width:"18vw",height:"5vh",borderRadius:"10px",border:"none"}} /> <br />
        <label htmlFor="" style={{fontSize:"30px" ,marginTop:"10px"}}>password</label> <br />
        <input type="password" placeholder='enter your password' style={{width:"18vw",height:"5vh",borderRadius:"10px",border:"none"}} />
        <br />
      <button style={{width:"18vw",fontSize:"30px",textAlign:"center",marginTop:"15px",padding:"10px", background: "linear-gradient(grey,white)",border:"none"}}>Submit </button>
      </div>
    </div>
  )
}

export default Login
