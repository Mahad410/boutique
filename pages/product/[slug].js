import React from 'react';
import {previewClient, urlFor} from "@/lib/client";
import Image from 'next/image';
import Back from "@/components/Back";
import plus from "@/public/images/plus-inverted.png";
import minus from "@/public/images/minus-inverted.png";
import cart from "@/public/images/inverted cart.png";
import blackCart from "@/public/images/shopping-bag.png";
// swiper
import {Swiper, SwiperSlide,} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import {EffectCreative, Pagination} from "swiper";

// states
import {useStateValue} from "@/content/StateContent";
import toast from "react-hot-toast";

const Productdetails = ({featuredproducts}) => {
    const {image, price, name, description} = featuredproducts;
    const {qty, addToCart, removeFromCart, cartItems, decQty, incQty} = useStateValue();
    return (
        <>
            <Back heading={"Details"} link={""}/>
            <div className={"product_details_container"}>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    grabCursor={true}
                    loop={true}
                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ["-20%", 0, -1],
                        },
                        next: {
                            shadow: true,
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative, Pagination]}
                    className="mySwiper3"
                >

                    {
                        image?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image src={urlFor(item).url()} alt={item.title} width={"500"} height={"480"}
                                       className={"image"}/>
                            </SwiperSlide>
                        ))}
                </Swiper>

                <div className={"product_details"}>
                    <h1>
                        {name}
                    </h1>
                    <p>
                        {description}
                    </p>
                    {
                        cartItems.find((item) => item._id === featuredproducts._id) ?
                            <div className={"quantity flex_around grey"} onClick={() => {
                                toast.error('Go to Cart to edit quantity')
                            }}>
                                <button className={"btn_qty"} disabled={true}>
                                    <Image src={minus} alt={"minus"} width={"20"} height={"20"}
                                           className={'icon'}/>
                                </button>
                                <h3>{qty}</h3>
                                <button className={"btn_qty"} disabled={true}>
                                    <Image src={plus} alt={"plus"} width={"20"} height={"20"}
                                           className={'icon'}/>
                                </button>
                            </div> :
                            <div className={"quantity flex_around"}>
                                <button className={"btn_qty"} onClick={decQty} disabled={false}>
                                    <Image src={minus} alt={"minus"} width={"20"} height={"20"}
                                           className={'icon'}/>
                                </button>
                                <h3>{qty}</h3>
                                <button className={"btn_qty"} onClick={incQty} disabled={false}>
                                    <Image src={plus} alt={"plus"} width={"20"} height={"20"}
                                           className={'icon'}/>
                                </button>
                            </div>
                    }


                    <div className={"flex flex_even"}>
                        <h2>
                            {price + " Pkr"}
                        </h2>
                        {cartItems.find((item) => item._id === featuredproducts._id) ?
                            <button className={"btn flex delete_btn"} onClick={() => removeFromCart(featuredproducts)}>
                                <Image src={blackCart} alt={"Cart"} width={"30"} height={"30"} className={"icon"}/>
                                <h5> Remove from Bag</h5>
                            </button> : <button className={"btn flex"} onClick={() => addToCart(featuredproducts, qty)}>
                                <Image src={cart} alt={"Cart"} width={"30"} height={"30"} className={"icon"}/>
                                <h5> Add to Bag</h5>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{slug {current}}`;
    const products = await previewClient.fetch(query);
    const paths = products.map((product) => ({
        params: {slug: product.slug.current},
    }));
    return {
        paths,
        fallback: false,
    }
};
export const getStaticProps = async ({
                                         params: {
                                             slug
                                         }
                                     }) => {
    const productDetailQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const featuredproducts = await previewClient.fetch(productDetailQuery);
    return {
        props: {
            featuredproducts
        }
    };
}
export default Productdetails;