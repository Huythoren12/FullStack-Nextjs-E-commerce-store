import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import Title from '@/components/Title';
import { getDealProduct } from '@/sanity/queries'

import React from 'react'

const DealPage = async() => {

  const products = await getDealProduct();
  return (
    <div className="py-10 bg-deal-bg">
        <Container className="">
            <Title className="mb-5 undeline underline-offset-4 decoration-1 text-base uppercase tracking-wide">
                Hot Deals of The Week
            </Title>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {products?.map((product)=>(
                    <ProductCard key={product?._id} product={product}/>
                ))} 
                    
                
            </div>
        </Container>
    </div>
  )
}

export default DealPage