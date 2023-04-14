import React, {useRef} from 'react'
import {useStateValue} from "@/content/StateContent";
import {urlFor} from "@/lib/client";
import Image from "next/image";
import minus from "@/public/images/minus-inverted.png";
import plus from "@/public/images/plus-inverted.png";
import remove from "@/public/images/remove.png";
import Link from "next/link";
import close from "@/public/images/close-invert.png";

const Cart = () => {
    const cartRef = useRef();
    const {cartTotal, cartItems, cartItemsQuantity, removeFromCart, showCart, setShowCart} = useStateValue();
    return (
        <>
            <div className={"cart_body"}>
                <div className={"cart_navbar flex"}>
                    <button onClick={() => {
                        setShowCart(false)
                    }
                    }>
                        <Image src={close} alt={"previous"} width={"30"} height={"30"}
                               className={"icon"}/>
                    </button>

                    <h2 className={"flex_center"}>Cart</h2>
                </div>
                <div className={"cart_wrapper"} ref={cartRef}>

                    <div className={"cart_container"}>
                        {cartItems?.length >= 1 ? (
                            <div className={"cart_items"}>
                                {cartItems?.map((cartItem) => {
                                    return (
                                        <div className={"cart_item flex"} key={cartItem._id}>
                                            <Image src={urlFor(cartItem.image[0]).url()} alt={cartItem.title}
                                                   width={"100"} height={"100"} className={'image cart_img'}/>
                                            <div className={"block"}>
                                                <div className={"cart_item_details flex flex_even"}>
                                                    <h2>{cartItem.name}</h2>
                                                    <p>{cartItem.price + " Pkr"}</p>
                                                </div>
                                                <div className={"flex flex_even"}>
                                                    <div className={"cart_qty"}>
                                                        <div className={"cart_quantity flex_around"}>
                                                            <Image src={minus} alt={"minus"} width={"20"} height={"20"}
                                                                   onClick={() => cartItemsQuantity(cartItem._id, 'dec')}
                                                                   className={'icon'}/>
                                                            <h3>{cartItem.quantity}</h3>
                                                            <Image src={plus} alt={"plus"} width={"20"} height={"20"}
                                                                   onClick={() => cartItemsQuantity(cartItem._id, 'inc')}
                                                                   className={'icon'}/>
                                                        </div>
                                                    </div>
                                                    <div className={"delete"}>
                                                        <Image src={remove} alt={"remove"} className={"icon"}
                                                               width={"20"}
                                                               height={"20"} onClick={() => removeFromCart(cartItem)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className={"empty_cart"}>
                                <h1>Your cart is empty</h1>
                                <Link href={'/'} onClick={()=>setShowCart(false)}>Go for shopping</Link>
                            </div>
                        )
                        }
                    </div>
                    {
                        cartItems?.length >= 1 && (
                            <div className={"cart_total block"}>
                                <div className={"subtotal flex flex_even"}>
                                    <h2>Subtotal</h2>
                                    <p>{cartTotal + " Pkr"}</p>
                                </div>
                                <div className={"proceed"}>
                                    <button className={"btn"}>Proceed to checkout</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Cart