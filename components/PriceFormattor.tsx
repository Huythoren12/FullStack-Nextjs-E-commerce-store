import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    amount: number | undefined;
    className?: string;
}

const PriceFormattor = ({amount, className}:Props) => {
  const fomattedPrice = new Number(amount).toLocaleString("en-US",{
    currency: "USD",
    style : "currency",
    minimumFractionDigits: 2,
  }); 
  return (
    <span className={twMerge("text-sm font-semibold text-darkColor",
                    className
    )}>
        {fomattedPrice}
    </span>
  )
}

export default PriceFormattor