import React from 'react'
import Carousel from "./Carousel"
import Items from './Items'
import Cards from "./Cards"
import ProductsCards from "./ProductsCards"
const Body = () => {
  return (
    <div>
      <Carousel />
     <div  style={{display:"flex",justifyContent:"center",gap:'40px',marginTop:"10px",flexWrap:"wrap" ,margin:"0px 30px"}}>
       <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/f03c562321e764bb.jpg?q=80"  name="Fashions"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/d7eae409dc461a54.jpg?q=80"  name="Travel"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/a080ac3397f3612d.png?q=80"  name="Electronics"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/506347d817d14025.jpg?q=80"  name="Home and kitchen"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/d7eae409dc461a54.jpg?q=80"  name="Travel"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/a080ac3397f3612d.png?q=80"  name="Electronics"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/506347d817d14025.jpg?q=80"  name="Home and kitchen"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/d7eae409dc461a54.jpg?q=80"  name="Travel"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/a080ac3397f3612d.png?q=80"  name="Electronics"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/506347d817d14025.jpg?q=80"  name="Home and kitchen"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/f03c562321e764bb.jpg?q=80"  name="Fashions"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/d7eae409dc461a54.jpg?q=80"  name="Travel"/>
      <Items  img="https://rukminim2.flixcart.com/fk-p-flap/98/98/image/a080ac3397f3612d.png?q=80"  name="Electronics"/>
      </div> 

      <Cards />
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/620/image/752e76d672e027f8.jpg?q=80" alt=""  style={{width:"100vw" ,height:"50vh"}} />
      <div style={{display :"flex", gap:"20px",flexWrap:"wrap",justifyContent:"center" ,marginTop:"10px"}}>
        <ProductsCards   img="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/7/w/x/s-52885675-puma-original-imahehwdvfguqgyb.jpeg?q=70" name="puma T-shirts"   price="₹699"/>
        <ProductsCards img="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/l/f/u/s-frml-st2-vebnor-original-imahkyyw8pj7bbfu.jpeg?q=70"  name="Formals"  price="₹999" />
        <ProductsCards img="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/o/k/xl-usshtfx0111-u-s-polo-assn-original-imagzg4ekxez7mvj.jpeg?q=70"  name="us polo Shirts"  price="₹1499"/>
        <ProductsCards img="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/5/l/z/9-10-years-44-apna-collection-original-imah2eeqn5kffkxj.jpeg?q=70"  name="part Wear"  price="₹999" />
        <ProductsCards img="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/z/3/u/11-12-years-dn-150-mdmongaldresses-resized-2-original-imahdue4pxasqecr.jpeg?q=70"  name="Mdmongaldresses"  price="₹1499"/>
        <ProductsCards img="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/o/k/xl-usshtfx0111-u-s-polo-assn-original-imagzg4ekxez7mvj.jpeg?q=70"  name="us polo Shirts"  price="₹1499"/>
        <ProductsCards img="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/5/l/z/9-10-years-44-apna-collection-original-imah2eeqn5kffkxj.jpeg?q=70"  name="part Wear"  price="₹999" />
        <ProductsCards img="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/z/3/u/11-12-years-dn-150-mdmongaldresses-resized-2-original-imahdue4pxasqecr.jpeg?q=70"  name="Mdmongaldresses"  price="₹1499"/>
                <ProductsCards   img="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/7/w/x/s-52885675-puma-original-imahehwdvfguqgyb.jpeg?q=70" name="puma T-shirts"   price="₹699"/>
        <ProductsCards img="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/l/f/u/s-frml-st2-vebnor-original-imahkyyw8pj7bbfu.jpeg?q=70"  name="Formals"  price="₹999" />

      </div>
    
    </div>
  )
}

export default Body
