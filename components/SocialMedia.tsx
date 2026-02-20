import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props{
    className?:string,
    iconClassName?:string,
    tooltipClassName?:string
}


const socialMedia=[
    {
        title:"GitHub",
        href: "https://github.com/Huythoren12",
        icon: <Github className="w-5 h-5"/>
    },
    {
        title:"Facebook",
        href: "https://www.facebook.com/huy.le.769867",
        icon: <Facebook className="w-5 h-5"/>
    },

    {
        title:"Linkedin",
        href: "https://www.linkedin.com/in/huy-lequoc/",
        icon: <Linkedin className="w-5 h-5"/>
    },
    {
        title:"Instagram",
        href: "https://www.instagram.com/henry_le12/",
        icon: <Instagram className="w-5 h-5"/>
    }

]

const SocialMedia = ({className, iconClassName,tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
        <div className={cn("flex items-center gap-3.5")}>
            {socialMedia?.map((item)=>(
                <Tooltip key={item?.title}>
                    <TooltipTrigger asChild>
                        <Link key={item?.title}
                        target="_blank"
                        rel="noopener noreferrer"
                         href={item?.href}
                          className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",iconClassName)}>
                        {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn("bg-white text-darkColor font font-semibold",tooltipClassName)}>
                        {item?.title}
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia