import React from 'react'

const ProductsCards = ({img,name,price}) => {
  return (
    <div>
      <div style={{height:"300px", width:"220px",boxShadow:"10px 10px 10px lightgrey" ,borderRadius:"20px" ,textAlign:"center"}}>
        <img src={img} alt=""  style={{height:"160px" ,width:"220"}} />
        <h4>{name}</h4>
        <p>{price}</p>
        <div >
          <button className='Addtocartbutton'>Add to cart</button>
          <button className='buynowbuuton'>Buy now </button>  
        </div>
      </div>
    </div>
  )
}

export default ProductsCards
