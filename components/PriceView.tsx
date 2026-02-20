import React from 'react'
import PriceFormattor from './PriceFormattor';
interface Props {
    price: number | undefined;
    discount: number | undefined;
    className ? : string;
}
const PriceView = ({price, discount,className}:Props) => {
  return (
    <div>
        <div className="flex items-center gap-2">
            <PriceFormattor amount={price} className="text-shop_dark_green"/>
            {price && discount && <PriceFormattor amount={price +(discount)/100}
            className="line-through text-xs font-normal text-shop_light_text"
            />}
           
        </div>
    </div>
  )
}

export default PriceView