"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

import { Button } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/libs/cn";


import Image from "next/legacy/image";
export default function ProductCard({
  title,
  desc,
  imgSrc,
}: {
  title?: any;
  desc?: string;
  imgSrc: any;
}) {
  return (
    <div className="text-center  w-full md:w-1/2 px-4">
      <h3 className="text-brown-600 font-semibold text-lg mb-2">
       {title}
      </h3>
      <div className="flex items-center justify-center mb-2">
        <div className="w-1/4 border-t border-gray-300"></div>
        <div className="bg-green-500 h-[2px] w-1/4"></div>
        <div className="w-1/4 border-t border-gray-300"></div>
      </div>
     <div className="flex justify-start gap-2 items-center ">
     <Image
        src={imgSrc}
        alt="دقيق الذرة"
        width={100}
        height={100}
        className="mx-auto w-24 h-24 rounded-full object-cover"
      />
     <p className="text-gray-700 mb-4">{desc}</p>
      
     </div>
    </div>
  );
}
