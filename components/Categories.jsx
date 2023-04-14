import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
const Categories = () => {
    const router = useRouter();
    const categories = [
        {category: 'Featured', url: `/featured`, id: 1},
        {category: 'All', url: `/all`, id: 2},
        {category: 'Summer', url: `/summer`, id: 3},
        {category: 'Winter', url: `/winter`, id: 4},
        {category: 'Autumn', url: `/autumn`, id: 5},
        {category: 'Spring', url: `/spring`, id: 6},
    ]
  return (
   <>
   <div className='category  flex_even flex '>
{
    categories?.map((category) => {
    return (
        // eslint-disable-next-line react/jsx-key
        <div className='bullet'>
        <ul>
        <li key={category._id}>
        <Link href={category.url}>{category.category}</Link>
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