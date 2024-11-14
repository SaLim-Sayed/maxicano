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
import ProductSection from "./ProductSection/ProductSection";
import QualityControlSection from "./QualityControlSection/QualityControlSection";
export default async function Home() {
  return (
    <div className=" overflow-hidden">
      <SwipperPage />
      <Policy title="privacy-policy" image={aboutImg} desc={<AboutUs />} />
      {/* <Policy title="منتجاتنا" image={aboutImg} desc={<AboutUs />} /> */}
      <Head title="our products" />

      <ProductSection />

      <QualityControlSection />
    </div>
  );
}
