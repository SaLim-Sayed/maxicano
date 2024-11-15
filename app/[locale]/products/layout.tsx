"use client";
import Center from "@/components/Global/Ui/Center";
import Head from "@/components/Global/Ui/Head";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const t = useTranslations();
  return (
    <Center>
      <Head title={t("Globals.Products")} />
      {children}
    </Center>
  );
}
