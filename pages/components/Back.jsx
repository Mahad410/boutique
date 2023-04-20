import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import previous from '@/public/images/previous.png';
import cart from "@/public/images/shopping-bag.png";
import Cart from "@/pages/components/Cart";
import {useStateValue} from "@/content/StateContent";
import client from "@sanity/client";

const Back = ({heading, link}) => {
    const router = useRouter();
    const {cartItems, showCart, setShowCart} = useStateValue();
    const handleBack = () => {
        router.back();
    }
    return (
        <>
            <div className={"navbar flex"}>
                <Image src={previous} alt={"previous"} width={"40"} height={"40"} onClick={handleBack}
                       className={"icon"}/>
                <h2 className={"flex_center"}>{heading}</h2>
                <div className='cart'>
                    <button onClick={() => setShowCart(true)} className={'cart'}>
                        <Image src={cart} alt={"cart"} width={"30"} height={"30"} className={'icon'}/>
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

export async function getServerSideProps(context) {
    const previewClient = client({
        projectId: '348cqm7m',
        dataset: 'production',
        useCdn: false,
        apiVersion: "2021-10-21",
        token: process.env.SANITY_TOKEN,
    });

    const asset = '*[_type == "asset"]{image,name}';
    const assets = await previewClient.fetch(asset);
    return {
        props: {
            icons: assets
        }
    };
}


export default Back