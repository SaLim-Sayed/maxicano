"use client";

import CornGrits from "@/components/CornGrits/CornGrits";
import { useTranslations } from "next-intl";
import React from "react";

import img1 from "@/public/gallery/1.jpg";
import img2 from "@/public/gallery/2.jpg";
import img3 from "@/public/gallery/3.jpg";
import img4 from "@/public/gallery/4.jpg";
import img5 from "@/public/gallery/5.jpg";

export default function page() {
  const t = useTranslations();
  return (
    <CornGrits
      title={t("Globals.corn_grits_title")}
      desc={t("Globals.corn_grits_desc")}
      list={[
        t("Globals.Snack_food_Industry"),
        t("Globals.Corn_flakes_Industry"),
        t("Globals.Confectionary_Industry"),
      ]}
      images={[img1, img2, img3, img4, img5]}
    />
  );
}
