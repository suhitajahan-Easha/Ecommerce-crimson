import React, { useContext } from 'react'

import './CSS/Shopcategory.css'
import  {ShopContext}  from '../Context/ShopContext'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Items from '../Components/Item/Item'


const Shopcategory = (props) => {

  const {all_product} = useContext(ShopContext);
  
  return (
    <div className='Shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-load">
        Explore More
      </div>
      
    </div>
  )
}

export default Shopcategory