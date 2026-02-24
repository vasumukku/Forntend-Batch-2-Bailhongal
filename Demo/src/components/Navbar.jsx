import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* main-parent-Navbar */}
      <div  style={{display:"flex",justifyContent:"space-around",boxShadow:"5px 5px 10px grey"}}>
        {/* childer-1 */}

        <div   style={{display:"flex",flexDirection:"row",gap:"40px"}}>

          <h1 style={{color:"red"}}>KFC</h1>
          <h4 style={{paddingTop:"10px" }}>Menu</h4>
          <h4  style={{paddingTop:"10px"}}>Deals</h4>

        </div>


        {/* childern-2 */}
        <div style={{display:"flex",flexDirection:"row",gap:"40px"}}>
          <h1>🤖user</h1>
          <h3 style={{paddingTop:"18px"}}>SignIn</h3>
          <h3 style={{paddingTop:"18px"}}>Cart🛒</h3>
        </div>


       

      </div>



       {/* order-button */}

        <div style={{backgroundColor:"black" , color:"#fff", marginTop:"-20px", gap:"20px", padding:"10px",
           display:"flex", flexDirection:"row",justifyContent:"center"}}>


            <h3>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h3>
            <button  style={{padding:"0px 30px",backgroundColor:"red",color:"#fff",borderRadius:"30px", border:"none"}}>Start order</button>
        </div>
    </div>
  )
}

export default Navbar
