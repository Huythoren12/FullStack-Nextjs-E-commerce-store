import React, { FC } from 'react'
import Logo from './logo';
import { X } from 'lucide-react';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks';
interface SideBarProps{
    isOpen: boolean;
    onClose:()=>void
}
const SideMenu: FC<SideBarProps>= ({isOpen, onClose}) => {
    const pathName = usePathname()
    const SideMenu= useOutsideClick<HTMLDivElement>(onClose)
  return (
    <div 
    className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50  text-white/80 shadow-xl transition-transform duration-300 ease-in-out ${isOpen?"translate-x-0":"-translate-x-full pointer-events-none"}hoverEffect`}>
        <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6">
            <div className="flex items-center justify-between gap-5">
                <Logo className="text-white"/>
                <button onClick={onClose} 
                        className="hover:text-shop_light_green hoverEffect">
                    <X />
                </button>
            </div>
            <div className="flex flex-col space-y-3-5 font-semibold text-white ">
                {headerData?.map((item)=>(
                    <Link href={item?.href} key={item?.title}
                    className={`hover:text-shop_light_green hoverEffect ${pathName === item?.href && "text-white" }`}>
                        {item?.title}
                    </Link>
                ))}
            </div>

            <SocialMedia/>
        </div>
    </div>
  )
}


export default SideMenu