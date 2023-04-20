import React from 'react';
import Link from 'next/link';
import {useStateValue} from "@/content/StateContent";

const Categories = () => {
    const categories = [
        {category: 'All', url: `/`, id: 2, click: () => setAll()},
        {category: 'Featured', id: 1, click: () => setFeatured()},
        {category: 'Women', id: 3, click: () => setWomen()},
        {category: 'Men', id: 4, click: () => setMen()},
        {category: 'Kids', id: 4, click: () => setMen()},
    ]
    const {setAll, setFeatured, setWomen, setMen} = useStateValue();
    return (
        <>
            <div className='category  flex_even flex '>
                {
                    categories?.map((category) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className='bullet'>
                                <ul>
                                    <li key={category._id} onClick={category.click}>
                                        <Link href={''}>{category.category}</Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Categories