import React from 'react';
import Product from "@/pages/components/Product";
import previewClient from "@/lib/client";

const All = ({allProducts}) => {
    const product = allProducts;
    return (
        <>
            <div className={"flex flex_wrap"}>
                {
                    product?.map((featuredProduct) => {
                        return (
                            <Product key={featuredProduct._id} products={featuredProduct}/>
                        );
                    })
                }
            </div>
        </>
    )
};
export default All;
export const getServerSideProps = async () => {
    const allProductQuery = '*[_type == "product"]';
    const allProducts = await previewClient.fetch(allProductQuery);
    return {
        props: {
            allProducts,
        }
    };
}
