import { Product } from '@/sanity.types'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { getBrand } from '@/sanity/queries'

interface Props{
    product:Product | null|undefined
    className ?:string
}


const ProductCharacteristic = async ({product,className}:Props) => {
    const brand=await getBrand(product?.slug?.current as string)
  return (

    <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>{product?.name}: Characteristics </AccordionTrigger>
            <AccordionContent>
                <p className="flex items-center justify-between">
                    Brand: <span className="font-semibold">{brand && brand[0]?.brandName}</span>
                </p>
                <p className="flex items-center justify-between">
                    Collection:<span className="font-semibold">2025</span>
                </p>

                 <p className="flex items-center justify-between">
                    Type: {<span className="font-semibold">{product?.variant}</span>}
                </p>

                 <p className="flex items-center justify-between">
                    Stock: 
                    <span className="font-semibold tracking-wide">
                        {product?.stock ? "Available" : "Out of Stock"}
                    </span>
                </p>

                 
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}

export default ProductCharacteristic