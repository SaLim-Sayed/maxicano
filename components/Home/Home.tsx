"use server";

import SwipperPage from "../Global/Sliders/SwipperPage";

import AboutSection from "./AboutSection/AboutSection";
import ClientsSection from "./ClientsSection/ClientsSection";
import GallerySection from "./GallerySection/GallerySection";
import ProductSection from "./ProductSection/ProductSection";
import QualityControlSection from "./QualityControlSection/QualityControlSection";
export default async function Home() {
  return (
    <div className=" overflow-hidden">
      <AboutSection />
      <QualityControlSection />
      <ProductSection />
      <GallerySection />
      <ClientsSection />
    </div>
  );
}
