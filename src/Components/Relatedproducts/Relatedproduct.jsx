import React from 'react'

import './Relatedproduct.css'
import data_product from '../assets/data'
import Items from '../Item/Item'

const Relatedproduct = () => {
  return (
    <div className='Relatedproduct'>
        <h1>Relatedproduct</h1>
        <hr/>
        <div className='Relatedproduct-Item'>
            {data_product.map((item,i)=>{
              return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           })}
        </div>

    </div>
  )
}

export default Relatedproduct