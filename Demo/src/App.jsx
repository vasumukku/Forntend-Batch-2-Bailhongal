import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

const data =[
  {
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=77.75",
      resname:"Kfc chicken",
       price:"399"
  },
   {
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=77.75",
      resname:"Kfc chicken",
       price:"399"
  },
   {
    img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=77.75",
      resname:"Kfc chicken",
       price:"399"
  },
]

const App = () => {
  return (
    <div>
        <Navbar />
         <h1>Save More as you order</h1>
        <div style={{display:"flex",flexWrap:"wrap" ,gap:"40px" ,justifyContent:"center"}}>
          <Body img="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=77.75"  resname="Kfc chicken"  price="399"/>
           <Body img="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=77.75" resname="offers" />
           <Body  img="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=77.75" resname="Upto 100 off" price="₹699" />
        </div>
        <Footer />
    

    </div>
  )
}

export default App
