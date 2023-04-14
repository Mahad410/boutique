import React from "react";
import Image from "next/image";
import {useRouter } from "next/router";
import previous from '../public/images/previous.png';
import cart from "@/public/images/shopping-bag.png";
import Cart from "@/components/Cart";
import {useStateValue} from "@/content/StateContent";

const Back = ({heading, link}) => {
    const router = useRouter();
    const {cartItems,showCart,setShowCart } = useStateValue();
    const handleBack = () => {
        router.back();
    }
    return(
    <>
    <div className={"navbar flex"}>
    <Image src={previous} alt={"previous"} width={"40"} height={"40"} onClick={handleBack} className={"icon"} />
        <h2 className={"flex_center"}>{heading}</h2>
              <div className='cart'>
      <button onClick={()=>setShowCart(true)} className={'cart'}>
        <Image src={cart} alt={"cart"} width={"30"} height={"30"} className={'icon'}/>
        <span className={cartItems.length>0 ? 'items_num':'disabled'}>
          {cartItems?.length }
        </span>
      </button>
        {showCart && <Cart/>}
      </div>
    </div>
    </>
    )
}

export default Back