"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function AboutUs() {
  const t = useTranslations("About");
  return (
    <div>
      <h1 className="text-3xl mt-4 my-2 "> {t("who_we_are")} :</h1>
      <p>{t("who_we_are_desc")}</p>

      <h2 className="text-2xl mt-4 my-2 "> {t("our_goals")} </h2>
      <p>{t("goal_desc")}</p>

      <h2 className="text-2xl mt-4 my-2 "> {t("philosophy")}</h2>
      <p>{t("philosophy_desc")}</p>

      <h2 className="text-2xl mt-4 my-2 ">{t("our_location")}</h2>
      <p>{t("our_location_desc")}</p>
    </div>
  );
}
