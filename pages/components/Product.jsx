import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {urlFor} from "@/lib/client";

const Product = ({products: {title, name, slug, image, price}}) => {
    return (
        <>

            <div className="product">
                <Link href={`product/${slug.current}`}>
                    <div className="product_card">
                        <div className={"image_container"}>
                            <Image src={urlFor(image && image[0]).url()} alt={title} width={"250"} height={"250"}
                                   className={"image"}/>
                        </div>
                        <div className={'details'}>
                            <h1 className={"product_name"}>{name && name}</h1>
                            <p className={"product_price"}>{price && price + " Pkr"}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Product