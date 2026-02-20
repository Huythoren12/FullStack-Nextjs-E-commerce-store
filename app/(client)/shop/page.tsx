import Shop from '@/components/Shop'
import { getAllBrands, getCategories } from '@/sanity/queries'
import React from 'react'

const ShopPage = async() => {
  const brands = await getAllBrands()
  const categories = await getCategories()
  return (
    <div className="bg-white">
      <Shop categories = {categories} brands ={brands}/>
    </div>
  )
}

export default ShopPage