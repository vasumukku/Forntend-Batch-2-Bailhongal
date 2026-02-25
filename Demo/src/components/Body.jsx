import React from 'react'

const Body = ({img,resname,price}) => {
  return (
    <div>
     

      <div>

      <div style={{height:"70vh",width:"18vw",backgroundColor:"white",borderRadius:"20px",padding:"10px" ,textAlign:"center" ,boxShadow:"10px 10px 10px #928989"}}>
        <img src={img} alt=""  style={{height:"30vh",width:"15vw"}} />
        <h1>{resname}</h1>
        <p>Min order value is a {price}</p>
        <p style={{textDecoration:"underline"}}>View details</p>
        <button style={{backgroundColor:"black" ,borderRadius:"20px" ,color:"white",border:"none",padding:"5px 20px" }}>Apply offer</button>
      </div>

      </div> 
    </div>
  )
}

export default Body


// function name(a,b) {
//   <h1>a</h1>
//   <p>b</p>
// }

// name(2,3)   