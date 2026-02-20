"use client";

import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import NoAccessToCart from "@/components/NoAccessToCart";
import Title from "@/components/Title";
import { Address } from "@/sanity.types";
import useStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useStore()
  const [isClient, setIsClient] = useState(false)
  const[loading,setLoading] = useState(false)
  const {isSignedIn} = useAuth();
  const groupedItems = useStore((state) => state.getGroupedItems())
  const {user} =useUser();
  const [address,setAddress] = useState<Address|null>(null)
  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
        {isSignedIn ?(
        <Container>
            {groupedItems?.length ? (
            <>
              <div className="flex items-center gap-2 py-5">
                <ShoppingBag className="text-darkColor"/>
                <Title>Shopping Cart</Title>
              </div>
              <div className="grid lg:grid-cols-3 md:gap-8">
                <div className="lg:cols-span-2 rounded-lg">Products</div>
                <div className="">Summary</div>
              </div>
            </>
            ):(
              <EmptyCart/>
            )}
        </Container>
            ):(<NoAccessToCart/>

            )}
    </div>
  )
}

export default CartPage