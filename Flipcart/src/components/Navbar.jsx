import React from 'react'

const Navbar = ({state,setState}) => {
  return (
    <div>
      
      <div   style={{display:"flex", justifyContent:"space-between"}}>

        {/* part-1 Navbar */}

        <div>
          <button  className='flipcartButton' > <img src="https://rukminim2.flixcart.com/fk-p-flap/26/22/image/d2ecfddf891a3922.png?q=80" alt="" className='flipcartButtonlogo' />    <i>Flipcart</i> </button>
          <button   className='flipcartButtontravel'> <img src="https://rukminim2.flixcart.com/fk-p-flap/29/22/image/7ab4040af860941d.png?q=80" alt="" className='flipcartButtonlogo'  /> <i>Travel</i> </button>
        </div>

{/* 2nd part */}
        <div  style={{display:"flex",  gap:"20px"}}>
          <h3>📍591121 <span className='locationstyle'>Select delivery location</span> </h3>
          <div style={{marginTop:"20px"}}>
              <button className='coinsbuttons'> 🪙72</button>
  
          </div>

          <div>
         <button   style={{marginTop:"20px", padding:"10px 20px",border:"none",backgroundColor:"blue",color:"#fff"}}  onClick={()=>{setState(!state) }}>{state?"Login":"Logout"}</button>
       </div>
        </div>

      </div>

    <div>
      <div style={{display:"flex" ,gap:'10px', justifyContent:"space-around"}} >
        <div>
                  <input type="text" placeholder='  🔍Search for products Brand and More' style={{width:"70vw",height:"8vh",borderRadius:"10px",border:"2px solid blue" ,marginTop:"20px",fontSize:"20px"}} />

        </div>
        <div style={{display:"flex",gap:"60px",marginTop:"10px"}}>
          <h5 style={{fontSize:"20px"}}>  Kle </h5>
        <h5 style={{fontSize:"20px"}}>more</h5>
        <h5 style={{fontSize:"20px"}}> 🛒 Cart </h5>
       
        </div>

      </div>
    </div>


    </div>
  )
}

export default Navbar
