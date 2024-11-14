"use client";
import React from "react";
import Center from "../Global/Ui/Center";
import Layer from "../Global/Ui/Layer";
import { useTranslations } from "next-intl";
import Image from "next/legacy/image";
import ClientHydration from "../Global/Providers/ClientHydration";
import { Spinner } from "@nextui-org/react";
import Head from "../Global/Ui/Head";

interface Props {
  title: string;
  image: any;
  desc?: any;
}
export default function Policy({ title, image, desc }: Props) {
  const t = useTranslations("Policy");
  return (
    <Center>
      <div className="mb-8 relative">
        <Head title={title}  subTitle={"تأسست شركة افريكانو عام 2015 كمشروع مشترك بين مجموعة مستثمرين أجانب لهم تاريخ عريق في مجال طحن الذرة واستخراج أفضل أنواع الدقيق والسومولينا والجر"} />
        <div className="flex flex-col items-end  md:flex-row gap-8 mt-4">
          <ClientHydration LoaderComponent={<Spinner />}>
            <div className="flex w-full md:w-[60%] flex-col gap-3 justify-center items-center">
              {desc}{" "}
            </div>
          </ClientHydration>
          <div className="   border-8 border-amber-950 w-64 h-64  rounded-full ">
            <Image
              src={image}
              alt="1"
              width={300}
              height={300}
              className=" w-full border-2 rounded-full "
            />
          </div>
        </div>
      </div>
    </Center>
  );
}
