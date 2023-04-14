import React from 'react';
import Product from "@/components/Product";
const Featured = ({featuredProducts}) => {
        return (
    <>
        <div className={"flex flex_wrap"}>
        {
          featuredProducts?.map((featuredProduct) => {
            return (
               <Product key = {featuredProduct._id} products={featuredProduct} />
            );
        })
        }
        </div>
    </>
  )
}

export default Featured;
