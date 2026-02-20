import React from 'react'
import Title from './Title'
import { Category } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'


const HomeCategories = ({categories}:{categories:Category[]}) => {
  return (
    <div className="bg-white border border-shop_light_green/20 my-10 md:my-20 p-5 lg:pp-7 rounded-md">
    <Title className="border-b pb-3">Popular Categories</Title>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories?.map((category)=>
      <div key={category?._id} className="bg-shop_light_bg p-5 flex items-center gap-3 group">
        {category?.image && (
          <div>
            <Link href={`/category/${category?.slug?.current}`}>
            <Image src={urlFor(category?.image).url()}
                                   alt="categoryImage" width={500} height={500}
                                   className="w-full h-full object-contain group-hover:scale-110 hoverEffect"/>
            </Link>
          </div>
        )}
        <div className="space-y-1"> 
          <h3 className="text-base font-semibold">
            {category?.title}
            <p className="text-sm flex items-center gap-2">
              <span className="font-bold text-shop_dark_green">{`(${category?.productCount})`}</span>
               items Available
            </p>
          </h3>
        </div>
      </div>
    )}
    
    </div>
    </div>
  )
}

export default HomeCategories