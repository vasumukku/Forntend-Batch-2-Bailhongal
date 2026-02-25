  import React from 'react'

  const Footer = () => {
    return (
      <>
      <div>

        <div style={{backgroundColor:"black" ,color:"#fff",padding:"20px",  display:"flex", flexDirection:"row" ,justifyContent:"center", gap:"70px",marginTop:"20px"}}>

          <div>
            <img src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg?h=120&w=120&fm=webp&fit=fill" alt="logo img" style={{height:"100px",marginTop:"20px"}} />
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
            <h1>KFC India</h1>
            <p>About KFC <br />
          KFC Care <br />
            Careers <br />
            Our Golden Past <br />
          Responsible Disclosure</p>
          </div>

  {/* third information */}
          <div>

            <h1> KFC Food</h1>
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
