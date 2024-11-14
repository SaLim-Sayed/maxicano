"use server";

import SwipperPage from "../Global/Sliders/SwipperPage";
import Head from "../Global/Ui/Head";
import AboutSection from "./AboutSection/AboutSection";
import GallerySection from "./GallerySection/GallerySection";
import ProductSection from "./ProductSection/ProductSection";
import QualityControlSection from "./QualityControlSection/QualityControlSection";
export default async function Home() {
  return (
    <div className=" overflow-hidden">
      <SwipperPage />
      <AboutSection/>
      {/* <Policy title="privacy-policy" image={aboutImg} desc={<AboutUs />} /> */}
      {/* <Policy title="منتجاتنا" image={aboutImg} desc={<AboutUs />} /> */}
      <Head title="our products" />

      <ProductSection />

      <QualityControlSection />
      <GallerySection/>
    </div>
  );
}
