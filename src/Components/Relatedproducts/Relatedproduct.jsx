import React, { useContext } from 'react'

import './Relatedproduct.css'
import Items from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const Relatedproduct = (props) => {
  const {product}=props;
  const {all_product}=useContext(ShopContext);
  return (
    <div className='Relatedproduct'>
        <h1>Relatedproduct</h1>
        <hr/>
        <div className='Relatedproduct-Item'>
            {all_product.filter(item=>(product.category===item.category)&&(product.id!=item.id)).slice(0,4).map((item,i)=>{
               return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
           }
        </div>

    </div>
  )
}

export default Relatedproduct