"use client";

import Image from "next/image";

import { Button, Card, Divider, Input } from "@nextui-org/react";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

import { MdCopyright, MdEmail } from "react-icons/md";

export default function Footer() {
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
  const t = useTranslations("Policy");
  return (
    <footer className="bg-[#303133] text-white relative z-40 flex flex-col justify-start gap-[30px] text-lightColor-900">
      <div className="flex justify-center bg-[#F7F7F7] p-2">
        <Button
          isIconOnly
          size="lg"
          radius="none"
          variant="light"
          className="min-w-[100px]  h-[60px]  md:min-w-[400px]  flex "
        >
          <Link href="/" className="font-bold text-xl text-[#00b5bc]">
            <Image
              src="/logo1.png"
              alt="logo"
              className=" p-0 m-0"
              layout="fill"
            />
          </Link>
        </Button>
      </div>
      <Divider className=" text-white bg-slate-600" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full justify-items-center gap-4">
        <div className="grid px-4 grid-cols-1 items-stretch">
          <div className="flex flex-col gap-2">
            {/* Newsletter Subscription */}

            <h2 className="text-lg font-bold">القائمة البريدية</h2>
            <p>
              اشترك معنا في القائمة البريدية، وسوف نقوم بإرسال آخر المنتجات
              والأحداث إليكم
            </p>
            <div className="flex justify-center rounded-lg bg-gray-700 item-center ">
              <Input
                classNames={{
                  input:"h-2"
                }}
                placeholder="ادخل بريدك الالكتروني" 
                className=" border-r-0 rounded-r-none"
              />
              <Button className="rounded-r-md h-[60px]  bg-gray-700 text-white px-4">
                اشتراك
              </Button>
            </div>
            <div className="flex flex-col mt-2  space-y-4 items-start">
              <h2 className="text-lg font-bold">تابعنا</h2>
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
        <Card
          isPressable
          className="bg-white h-40 w-40 rounded-full flex justify-center items-center"
        >
          <Image src="/logo1.png" alt="1" width={200} height={200} />
        </Card>
        <div className="flex flex-col gap-8 mx-12  w-[80%]">
          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold">اتصل بنا</h2>
            <div className="flex items-center gap-2 space-x-2">
              <HiPhone size={20} />
              <Link target="_blank" href="https://wa.me/+201516000712">
                +20 15 16 00 07 12
              </Link>
            </div>
            <div className="flex items-center  gap-2  space-x-2">
              <HiLocationMarker size={20} />
              <span>مصر، مدينة العاشر المنطقة الصناعية A7 اندستريا غرب</span>
            </div>
            <div className="flex items-center  gap-2 space-x-2">
              <MdEmail size={20} />
              <Link
                target="_blank"
                href="mailto:info@africanocorn.com"
                className="hover:underline"
              >
                info@africanocorn.com
              </Link>
            </div>
            <div className="flex items-center space-x-2 gap-2">
              <MdEmail size={20} />
              <Link
                target="_blank"
                href="http://www.africanocorn.com"
                className="hover:underline"
              >
                www.africanocorn.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Divider className=" text-white bg-slate-600" />
      <div className="flex items-center  text-sm md:text-lg  gap-4 flex-col justify-center  mb-2">
        <div className="flex items-center text-center">
          <div> كل الحقوق محفوظة لدى مكسيكانو</div>
          <MdCopyright />
          <div>{new Date().getFullYear()} </div>
        </div>
      </div>
    </footer>
  );
}
