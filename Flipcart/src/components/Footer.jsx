  import React from 'react'

  const Footer = () => {
    return (
      <>
      <div>

        <div style={{backgroundColor:"black" ,color:"#fff",padding:"20px",  display:"flex", flexDirection:"row" ,justifyContent:"center", gap:"70px",marginTop:"20px"}}>

          <div>
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt="logo img" style={{height:"100px",marginTop:"20px"}} />
          </div>
          {/* first information */}

          <div>
            <h1>Legal</h1>
            <p>Terms and Conditions <br />
            Privacy Center <br />
            Disclaimer <br />
            Caution Notice</p>
          </div>

  {/* second information */}
          <div>
            <h1>Flipcart India</h1>
            <p>About Flipcart <br />
          flipcart Care <br />
            Careers <br />
            Our Golden Past <br />
          Responsible Disclosure</p>
          </div>

  {/* third information */}
          <div>

            <h1> Fashions</h1>
            <p>
            Menu <br />
          Order Lookup  <br />
          Gift Card  <br />
          Nutrition & Allergen
            </p>
          </div>

  {/* fourth card information */}

          <div>
            <h1>support </h1>
            <p>
  Get Help <br />
  Contact Us <br />
  KFC Feedback <br />
  Privacy Center
            </p>
          </div>


        </div>
      </div>
      </>
    )
  }

  export default Footer
