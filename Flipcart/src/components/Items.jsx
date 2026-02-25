import React from 'react'

const Items = ({img,name}) => {
  return (
    <div>
      <div style={{height:"200px",textAlign:"center"}}>
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Items
