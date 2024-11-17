"use client";
import AboutPage from "@/components/About/AboutPage";
import AboutUs from "@/components/About/AboutUs";

import aboutImg from "@/public/policy/about.png";
import { useTranslations } from "next-intl";
export default function page() {
  const t = useTranslations("About");
  return <AboutPage title={t("title")} image={aboutImg} desc={<AboutUs />} />;
}
