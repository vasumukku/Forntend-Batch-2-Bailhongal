import React from 'react'



const Cardss = ({img,name}) => {
  return (
    <div>
      <div style={{height:"230px", width:"180px",textAlign:"center", backgroundColor:"white" ,boxShadow:"2px 2px 10px grey",borderRadius:"20px"}}>
          <img src={img} alt=""  style={{borderRadius:"20px" ,marginTop:"10px"}} />

          <p>{name}</p>
      </div>
    </div>
  )
}





const Cards = () => {
  return (
    <div>
      <div className='cards-container'>
        <h3>Kle Still looking for this ?</h3>
       <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
         <Cardss img="https://rukminim2.flixcart.com/image/186/180/xif0q/sunscreen/a/i/w/100-niacinamide-sunscreen-spf-50-pa-blueberry-water-resistant-no-original-imahcbfvjpnsf7r4.jpeg?q=80" name="sunscreen" /> 
         <Cardss img="https://rukminim2.flixcart.com/image/186/180/xif0q/backpack/n/y/3/-original-imahftr8zfg4aezc.jpeg?q=80"  name="Laptop bags"/> 
         <Cardss  img="https://rukminim2.flixcart.com/image/166/180/xif0q/sunscreen/u/d/f/30-0-matte-max-velvet-touch-sweat-water-resistant-12hrs-uva-uvb-original-imahex9zww5cfvsk.jpeg?q=80&crop=false" name="sun screen" /> 
         <Cardss img="https://rukminim2.flixcart.com/image/186/180/xif0q/battery-charger/y/s/e/45w-superfast-charging-type-c-rapid-charging-adapter-compatible-original-imahe4gahzzqvqjm.jpeg?q=80"  name="Nothing charger" />
          <Cardss img="https://rukminim2.flixcart.com/image/186/180/xif0q/washing-machine-new/z/j/p/-original-imahemfypgbey2yn.jpeg?q=80"  name="washing machine" />

       </div>
      </div>
    </div>
  )
}

export default Cards
