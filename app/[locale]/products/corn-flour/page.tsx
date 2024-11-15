"use client";

import CornGrits from "@/components/CornGrits/CornGrits";
import { useTranslations } from "next-intl";
import React from "react";

import img6 from "@/public/gallery/6.jpg";
import img7 from "@/public/gallery/7.jpg";
import img8 from "@/public/gallery/8.jpg";
import img9 from "@/public/gallery/9.jpg";
import img10 from "@/public/gallery/10.jpg";
export default function page() {
  const t = useTranslations();
  return (
    <CornGrits
      title={t("Globals.corn_flour_title")}
      desc={t("Globals.corn_flour_desc")}
      list={[
        t("Globals.Breads"),
        t("Globals.Pancake_Waffle"),
        t("Globals.Confections"),
        t("Globals.Baby_Foods"),
        t("Globals.Cereal_Snacks"),
      ]}
      images={[img6, img7, img8, img9, img10]}
    />
  );
}
