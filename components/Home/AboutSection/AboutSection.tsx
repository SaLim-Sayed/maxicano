"use client";
import Image from "next/legacy/image";

import Center from "@/components/Global/Ui/Center";
import Head from "@/components/Global/Ui/Head";
import corn from "@/public/policy/corn.jpg";
import { useTranslations } from "next-intl";
export default function AboutSection() {
  const t = useTranslations("About");
  return (
    <Center>
      <Head title={t("title")} subTitle={t("desc")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4  w-full">
        <Image
          src={corn}
          alt="Quality Control"
          width={300}
          height={300}
          className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
        />
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold"> {t("who_we_are")}</div>
          <div className="text-justify">{t("who_we_are_desc")}</div>
        </div>
      </div>
    </Center>
  );
}
