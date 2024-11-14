"use server";

import { Divider } from "@nextui-org/react";
import CategorySlider from "../Global/Sliders/CategorySlider";
import SwipperPage from "../Global/Sliders/SwipperPage";
import Offers from "./Offers/Offers";
import Head from "../Global/Ui/Head";
import Policy from "../Policy/Policy";
import AboutUs from "../Policy/AboutUs";
import aboutImg from "@/public/policy/about.png";
import ProductCard from "../Global/Ui/ProductCard";
import product1 from "@/public/policy/product1.jpg";
import product2 from "@/public/policy/product2.jpg";
import qualityControl from "@/public/policy/quality-control.png";
import cert1 from "@/public/policy/cert1.png";
import cert2 from "@/public/policy/cert2.png";
import cert3 from "@/public/policy/cert3.png";
import Image from "next/legacy/image";
import { url } from "inspector";
export default async function Home() {
  return (
    <div>
      <SwipperPage />
      <Policy title="privacy-policy" image={aboutImg} desc={<AboutUs />} />
      {/* <Policy title="منتجاتنا" image={aboutImg} desc={<AboutUs />} /> */}
      <Head title="our products" />

      <div className="flex flex-col w-full justify-center  md:flex-row   my-8">
        <ProductCard
          title="الذرة الصفراء / جريش الذرة"
          desc="
            تتميز شركتنا بإنتاج أفضل أنواع جريش الذرة بجميع أنواعها ولجميع
            الاستخدامات وفقاً لأفضل المعايير."
          imgSrc={product1}
        />
        <ProductCard
          title="الذرة الصفراء / دقيق الذرة"
          desc="
            تتميز شركتنا بإنتاج أفضل أنواع دقيق الذرة من جميع الأصناف ولجميع
            الاستخدامات وفقاً لأعلى المعايير."
          imgSrc={product2}
        />
      </div>

      <div className=" flex flex-col justify-center      w-full   ">
        <div
          style={{ backgroundImage: `url('policy/bg-quality.png')` }}
          className=" relative flex w-full lg:w-[90%] h-80 bg-white"
        >
          <div className="absolute top-0 -left-10 w-full h-full">
            <div className=" relative border-8 border-t-0 border-b-0  -skew-x-6   flex justify-center items-center  w-80 h-80    overflow-hidden">
              <div className=" ">
                <Image
                  src={qualityControl}
                  alt="Quality Control"
                  width={1000}
                  height={1000}
                  className="   h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className=" absolute top-0 right-60  bg-green-600 text-white px-4 py-1 text-sm font-semibold">
            QUALITY CONTROL
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full ">
          <div className=" text-justify px-4 w-full md:w-1/2">
            The policy of our company depends on the adoption of quality global
            standard for all products therefore. Our company worked on using the
            latest and most prestigious laboratories to examine the products to
            provide our quality control. In addition to the Egyptian
            certificates we have obtained some international certificates such
            as: ISO 9001:2015 – ISO 22000:2005 and BRC(British Retail
            Consortium).
          </div>
          <div className="flex px-4 w-full md:w-1/2 h-28  justify-between">
            <Image
              src={cert1}
              alt="Quality Control"
              width={200}
              height={200}
              className="    h-full w-full"
            />
            <Image
              src={cert2}
              alt="Quality Control"
              width={200}
              height={200}
              className="    h-full w-full"
            />
            <Image
              src={cert3}
              alt="Quality Control"
              width={200}
              height={200}
              className="    h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
