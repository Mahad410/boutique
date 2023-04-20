import React from 'react';
import {Categories, Hero, Navbar} from './components';
import previewClient from "@/lib/client";
import Product from "./components/Product";
import {useStateValue} from "@/content/StateContent";
import Loader from "@/pages/components/Loader";

const Home = ({allProduct, featuredproducts}) => {
    const {isFeatured, isMen, isWomen, allProducts, manProducts, womenProducts} = useStateValue();
    const product = allProduct;
    const featured = featuredproducts;
    const manProduct = manProducts;
    const womenProduct = womenProducts;
    return (
        <>
            <Navbar/>
            <Hero/>
            <Categories/>
            <div className={"flex flex_wrap"}>
                {
                    allProducts ? product ? product.map((product) =>
                            <Product key={product._id} products={product}/>) : <Loader/>
                        : isFeatured ? featured ? featured.map((product) =>
                                <Product key={product._id} products={product}/>) : <Loader/>
                            : isMen ? manProduct ? product.map((product) =>
                                    <Product key={product._id} products={product}/>) : <Loader/>
                                : isWomen ? womenProduct ? product.map((product) =>
                                        <Product key={product._id} products={product}/>) : <Loader/> :
                                    <Loader/>
                }
            </div>
        </>
    )
}
export const getServerSideProps = async () => {
    const allProductQuery = '*[_type == "product"]';
    const allProduct = await previewClient.fetch(allProductQuery);
    const featuredQuery = '*[_type == "product" && featured == true]';
    const featuredproducts = await previewClient.fetch(featuredQuery);
    return {
        props: {
            allProduct,
            featuredproducts
        }
    };
}

export default Home;