"use client"
import { BRANDS_QUERY_RESULT, Category, Product } from '@/sanity.types'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Title from './Title'
import CategoriesList from './shop/CategoriesList'
import BrandsList from './shop/BrandsList'
import PriceList from './shop/PriceList'
import { useSearchParams } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { Loader2 } from 'lucide-react'
import NoProductAvailable from './NoProductAvailable'
import ProductCard from './ProductCard'

interface Props{
  categories: Category[]
  brands: BRANDS_QUERY_RESULT
}
const Shop = ({categories,brands}:Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const [products,setProducts] = useState<Product[]>([])
  const [loading,setLoading] = useState(false)
  const [selectedCategory,setSelectedCategory] =useState<string | null>(null)
  const [selectedBrand,setSelectedBrand] = useState<string |null>(brandParams || null);
  const [selectedPrice,setSelectedPrice] = useState<string | null>(null)
  const fetchProducts = async ()=>{
    setLoading(true)
    try{
      let minPrice = 0;
      let maxPrice = 10000;
      if(selectedPrice){
        const [min,max] = selectedPrice.split("-").map(Number)
        minPrice = min;
        maxPrice = max;
      }
      const query =`*[_type == 'product' && (!defined($selectedCategory) 
                   || references(*[_type == "category" && slug.current == $selectedCategory]._id)) && (!defined($selectedBrand) 
                   || references(*[_type == "brand" && slug.current == $selectedBrand]._id)) 
                   && price>= $minPrice && price <= $maxPrice ] 
                   | order(name asc){
      ...,"categories": categories[]->title
      }`
      const data = await client.fetch(
        query,
        {selectedBrand,selectedCategory,minPrice,maxPrice},
        {next: {revalidate: 0}}
      );
      setProducts(data);


    }catch(error){
      console.log("Shop product fetching Error",error)
    }finally{
      setLoading(false)
    };
   
  }
useEffect(()=>{
      fetchProducts();
    },[selectedCategory,selectedBrand,selectedPrice])

  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between">
            <Title className=" text-lg uppercase tracking wide">
              Get the products as your need
            </Title>
          {(selectedBrand != null || selectedCategory != null || selectedPrice != null) && (
            <button 
            onClick={()=>{
              setSelectedBrand(null)
              setSelectedCategory(null)
              setSelectedPrice(null)
            }}
            className="underline underline-offset-2 text-shop_btn_dark_green hover:text-shop_light_green
             hoverEffect text-sm">
              Reset All
            </button>)}
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-5 border-t border-t-shop_dark_green/50">
          <div className="md:sticky md:top-20 md:self-start md:max-h-[calc(100vh-160px)] md:overflow-auto md:min-w-64 md:border-r border-r-shop_btn_dark_green/50 ">
            <CategoriesList
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <BrandsList
              brands={brands}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
            />
            <PriceList
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
          <div className="flex-1 pt-5">
            <div className="overflow-y-auto pr-2"> 
              {loading ? ( 
              <div className="p-20 flex flex-col gap-2 items-center justify-between bg-white">
                <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin"/>
                <p className="tracking-wide text-base font-black">
                  Product is loading...
                </p>
              </div> 
              ):(
                <div>
                  {products?.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                     {products?.map((product)=>(
                       <ProductCard key={product?._id} product={product}/>
                     ))}
                  </div> 
                  ):( 
                  <NoProductAvailable/>)} 
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop