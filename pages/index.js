import React from 'react';
import {Categories, Hero, Navbar} from './components';
import previewClient from "@/lib/client";

const Home = ({products}) => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Categories/>
        </>
    )
}
export const getServerSideProps = async () => {
    const productQuery = '*[_type == "product"]';
    const products = await previewClient.fetch(productQuery);
    return {
        props: {
            products
        }
    };
}

export default Home;