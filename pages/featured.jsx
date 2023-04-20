import React from 'react';
import Product from "@/pages/components/Product";
import previewClient from "@/lib/client";
import Back from "@/pages/components/Back";

const Featured = ({featuredproducts}) => {
    const product = featuredproducts;
    return (
        <>
            <Back heading={"Featured"} link={""}/>
            <div className={"mt_product"}>
                <div className={"flex flex_wrap"}>
                    {
                        product?.map((featuredProduct) => {
                            return (
                                <Product key={featuredProduct._id} products={featuredProduct}/>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
};
export default Featured;
export const getServerSideProps = async () => {
    const featuredQuery = '*[_type == "product" && featured == true]';
    const featuredproducts = await previewClient.fetch(featuredQuery);
    return {
        props: {
            featuredproducts,
        }
    };
}
