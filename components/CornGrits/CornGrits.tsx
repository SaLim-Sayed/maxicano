"use client";
import React from "react";
import Center from "../Global/Ui/Center";
import Head from "../Global/Ui/Head";
import { useTranslations } from "next-intl";
import { cn } from "@/libs/cn";
import Image, { StaticImageData } from "next/legacy/image";

interface Props {
  title: string;
  desc: string;
  images: StaticImageData[];
  list: string[];
}
export default function CornGrits({ title, desc, images, list }: Props) {
  const t = useTranslations();
  return (
    <Center>
      <div className="flex flex-col gap-3">
        <div className="text-3xl font-extrabold">{title}</div>
        <div className="text-xl ">{desc}</div>
        <div className="px-8">
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-3 px-8 w-full"
          )}
        >
          {images.map((img, index) => (
            <div
              className={cn(
                "rounded-full border-4 flex justify-center items-center   border-brown-700"
              )}
            >
              <Image
                key={index}
                src={img}
                alt="Quality Control"
                width={300}
                height={300}
                className={cn(
                  "h-[300px] cursor-pointer w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]",
                  "rounded-full border-4 border-slate-700"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </Center>
  );
}
