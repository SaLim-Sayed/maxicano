"use client";

import Image from "next/image";

import { Button, Card, Divider, Input } from "@nextui-org/react";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

import { MdCopyright, MdEmail } from "react-icons/md";

export default function Footer() {
  const t = useTranslations("Footer");
  const socialLinks = [
    {
      icon: <FaFacebook size={40} />,
      href: "https://www.facebook.com/africanocorn",
      label: "Facebook",
    },
    {
      icon: <FaTwitter size={40} />,
      href: "https://www.twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaLinkedin size={40} />,
      href: "https://www.linkedin.com/company/africano-company-for-food-industries/",
      label: "FaLinkedin",
    },

    {
      icon: <FaYoutube size={40} />,
      href: "https://www.snapchat.com",
      label: "FaYoutube",
    },
  ];

  return (
    <footer className="bg-[#303133] mt-8 text-white relative z-40 flex flex-col justify-start gap-[30px] text-lightColor-900">
      <Divider className=" text-white bg-slate-600" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full justify-items-center gap-4">
        <div className="grid px-4 grid-cols-1 items-stretch">
          <div className="flex flex-col gap-2">
            {/* Newsletter Subscription */}

            <h2 className="text-lg font-bold"> {t("newsletter.title")}</h2>
            <p>{t("newsletter.description")}</p>
            <div className="flex justify-center rounded-lg bg-gray-700 item-center ">
              <Input
                classNames={{
                  input: "text-[1.2rem]",
                }}
                placeholder={t("email.placeholder")}
                className="w-full border-r-0 rounded-r-none"
              />
              <Button className="rounded-r-md h-[56px]  bg-gray-700 text-white px-4">
                اشتراك
              </Button>
            </div>
            <div className="flex flex-col mt-2  space-y-4 items-start">
              <h2 className="text-lg font-bold">{t("follow_us")}</h2>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="light"
                    className="text-white"
                    as={Link}
                    target="_blank"
                    href={link.href}
                    isIconOnly
                  >
                    {link.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Card className=" bg-transparent rounded-none h-40  w-full text-white  flex gap-4  flex-col justify-center items-center">
          <div className="bg-[#F7F7F7] flex justify-center w-full">
            <Image src="/logo1.png" alt="1" width={200} height={200} />
          </div>
          <div className="flex items-start  gap-1  space-x-2">
            <div>
              <HiLocationMarker size={20} />
            </div>
            <span>{t("contact_us.address")}</span>
          </div>
        </Card>
        <div className="flex flex-col gap-8 mx-12  w-[80%]">
          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold"> {t("contact_us.title")} </h2>
            <div className="flex items-center gap-2 space-x-2">
              <HiPhone size={20} />
              <Link target="_blank" href="https://wa.me/+201096348733">
              +20 109 634 8733
              </Link>
            </div>

            <div className="flex items-center  gap-2 space-x-2">
              <MdEmail size={20} />
              <Link
                target="_blank"
                href="mailto:admin@maxicano.com"
                className="hover:underline"
              >
                admin@maxicano.com
              </Link>
            </div>
            <div className="flex items-center space-x-2 gap-2">
              <MdEmail size={20} />
              <Link
                target="_blank"
                 href="mailto:sales@maxicano.com"
                className="hover:underline"
              >
                sales@maxicano.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Divider className=" text-white bg-slate-600" />
      <div className="flex items-center  text-sm md:text-lg  gap-4 flex-col justify-center  mb-2">
        <div className="flex items-center text-center">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
