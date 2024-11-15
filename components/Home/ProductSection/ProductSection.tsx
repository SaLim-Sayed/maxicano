"use client";
import Center from "@/components/Global/Ui/Center";
import Head from "@/components/Global/Ui/Head";
import ProductCard from "@/components/Global/Ui/ProductCard";

import product1 from "@/public/policy/product1.jpg";
import product2 from "@/public/policy/product2.jpg";
import { useTranslations } from "next-intl";
export default function ProductSection() {
  const t = useTranslations("Products");
  return (
    <Center>
      <Head title={t("Products")} />

      <div className="flex flex-col w-full justify-center md:flex-row my-8">
        <ProductCard
          title={t("Corn_Grit")}
          desc={t("Corn_Grit_Desc")}
          imgSrc={product1}
        />
        <ProductCard
          title={t("Corn_Flour")}
          desc={t("Corn_Flour_Desc")}
          imgSrc={product2}
        />
      </div>
    </Center>
  );
}
