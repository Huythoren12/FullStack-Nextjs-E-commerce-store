import { BRANDS_QUERY_RESULT } from '@/sanity.types'
import React from 'react'
import Title from '../Title';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

interface Props{
    brands: BRANDS_QUERY_RESULT;
    selectedBrand?: string | null;
    setSelectedBrand : React.Dispatch<React.SetStateAction<string | null>>
}

const BrandsList = ({brands,selectedBrand,setSelectedBrand}:Props) => {
  return (
    <div className="w-full bg-white p-5">
        <Title className="text-base font-black"> 
            Brands 
        </Title>
        <RadioGroup value={selectedBrand || ""}
                    className="mt-2 space-y-1">
            {brands?.map((brand)=>(
                <div 
                onClick={()=>{
                    setSelectedBrand(brand?.slug?.current as string)
                }}
                key={brand?._id} 
                className="flex items-center space-x-2 hover:cursor-pointer">
                    <RadioGroupItem value={brand?.slug?.current as string}
                                    id={brand?.slug?.current}
                                    className="rounded-sm"/>
                    <Label 
                    htmlFor={brand?.slug?.current}
                    className={`${selectedBrand === brand?.slug?.current ? "font-semibold text-shop_dark_green" : "font-normal"}`}>
                        {brand?.title}
                    </Label>
                </div>
            ))}
            {selectedBrand && (
                <button 
                onClick={()=>setSelectedBrand(null)} 
                className="underline underline-offset-2 text-sm font-medium hover:text-shop_light_green hoverEffect">
                    Reset Selection
                </button>
            )}
        </RadioGroup>
    </div>
  )
}

export default BrandsList