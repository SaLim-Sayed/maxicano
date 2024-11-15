"use client";
import AboutUs from "@/components/Policy/AboutUs";
import Policy from "@/components/Policy/Policy";

import aboutImg from "@/public/policy/about.png";
import { useTranslations } from "next-intl";
export default function page() {
  const t = useTranslations("About");
  return <Policy title={t("title")} image={aboutImg} desc={<AboutUs />} />;
}
