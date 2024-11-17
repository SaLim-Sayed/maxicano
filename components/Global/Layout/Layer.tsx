"use client";
import { useTranslations } from "next-intl";

export default function Layer({
  title,
  subTitle,
}: {
  title?: any;
  subTitle?: string;
  route?: string;
}) {
  const transContent = useTranslations("Globals");

  return (
    <div>
      <div
        className="flex relative text-center md:text-start  gap-4  text-white justify-center items-center h-[150px]"
        style={{
          background:
            "linear-gradient(91.39deg,#1299a8 31.4%,  #051b72 103.45%)",
        }}
      >
        <h1 className="text-[2.5rem] uppercase font-[700]"> {title} </h1>

        <h2 className="text-lightColor-400">{subTitle}</h2>
      </div>
    </div>
  );
}
