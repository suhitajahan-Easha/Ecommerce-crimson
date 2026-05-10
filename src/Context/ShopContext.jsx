import React, {createContext, useEffect, useState} from "react";
import all_product from "../Components/assets/all_product"
 

export const ShopContext = createContext(null);
   
const getDefultCart=()=>{
        let cart ={};
        for (let index = 0; index < all_product.length+1; index++) {
             cart[index]=0;  
        }
        return cart;
      }


const ShopContextProvider = (props) =>{

    const [cartItems,setcartItems]=useState(getDefultCart())

    
    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    const removefromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-prev[itemId]}));
    }

    const decresefromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalamount=()=>{
        let totalamount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo= all_product.find((product)=>product.id===Number(item));
                totalamount =totalamount+itemInfo.new_price * cartItems[item];
            } 
        }
        return totalamount;
    }

    const getTotalitem=()=>{
        let totalitem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalitem =totalitem+cartItems[item];
            }
        }
        return totalitem;
    }
    
    const ContextValue={all_product,cartItems,addToCart,removefromCart,getTotalamount,getTotalitem,decresefromCart};
    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;