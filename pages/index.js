import React from 'react';
import Featured from './featured';
import {Categories, Hero, Navbar} from './../components';
import {previewClient} from "@/lib/client";

const Home = ({featuredproducts}) => {

    return (
        <>
            <Navbar/>
            <Hero/>
            <Categories/>
            <Featured featuredProducts={featuredproducts}/>
        </>
    )
}
export const getServerSideProps = async () => {
    const featuredQuery = '*[_type == "product" && featured == true]';
    const featuredproducts = await previewClient.fetch(featuredQuery);
    return {
        props: {
            featuredproducts
        }
    };
}

export default Home;