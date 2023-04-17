import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cart from "@/pages/components/Cart";
import cart from "@/public/images/shopping-bag.png";
import {useStateValue} from "@/content/StateContent";
import {urlFor} from "@/lib/client";

const Navbar = ({asset}) => {
    const {cartItems, showCart, setShowCart} = useStateValue();
    return (
        <>
            <div className='flex flex_even navbar'>
                <div className='profile flex'>
                    <Link href='components#' className='pic'>
                        <Image src='' className='profile_img' alt={"profile"} width={"30"} height={"30"}/>
                    </Link>
                    <div className='name_font'>
                        Hi, Mahad
                    </div>
                </div>
                <div className='cart'>
                    <button onClick={() => setShowCart(true)} className={'cart'}>
                        {
                            <Image src={cart} alt={"abc"} width={"30"} height={"30"}/>
                            /*<Image src={cart} alt={"cart"} width={"30"} height={"30"} className={'icon'}/>*/}
                        <span className={cartItems.length > 0 ? 'items_num' : 'disabled'}>
          {cartItems?.length}
        </span>
                    </button>
                    {showCart && <Cart/>}
                </div>
            </div>
        </>
    )
}


export default Navbar