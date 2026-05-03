import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'

const Cartitems = () => {
    const {all_product,cartItems,addToCart,removefromCart,getTotalamount}=useContext(ShopContext);
  return (
    <div className='Cartitems'>
        <div className="Cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
          if(cartItems[e.id]>0){
            return <div>
                      <div className="Cartitems-format Cartitems-format-main ">
                        <img src={e.image} alt="" className='cart-icon' />
                        <p className='margin-left'>{e.name}</p>
                        <p className='margin-left'>${e.new_price}</p>
                        <button className='Cartitems-quantity margin-left'>
                          <span onClick={()=>{removefromCart(e.id)}}>-</span>
                          {cartItems[e.id]}
                          <span onClick={()=>{addToCart(e.id)}}>+</span>
                        </button>
                        <p className='margin-left'>${e.new_price*cartItems[e.id]}</p>
                        <img src={remove_icon} alt="" className='cart-remove-icon' onClick={()=>{removefromCart(e.id)}} />
                      </div>
                      <hr />
                   </div>
          }
          return null;

        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalamount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Total</p>
                <p>${getTotalamount()}</p>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
          <div className="cartitems-promo">
              <p>If you have a promo code, Enter it Here</p>
              <div className="cartitems-promobox">
                <input type="text" name="" id="" placeholder='Promo Code' />
                <button>Place Order</button>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Cartitems