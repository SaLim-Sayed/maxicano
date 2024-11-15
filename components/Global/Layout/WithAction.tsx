"use client";

import { useNavigation } from "@/util/useNavigation";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarContent,
  useDisclosure,
} from "@nextui-org/react";

import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdMenu } from "react-icons/md";

export default function WithAction() {
  const router = useRouter();
  const { navigateTo } = useNavigation();
  const locale = useLocale();
  const pathName = usePathname();
  const t = useTranslations("Globals");

  const Items = [
    { name: t("home"), href: "/", key: "home" },
    { name: t("about"), href: "/about", key: "about" },
    { name: t("corn"), href: "/corn", key: "corn" },
    { name: t("Gallery"), href: "/gallery", key: "gallery" },
    {
      name: t("corn_flour_title"),
      href: "/products/corn-flour",
      key: "corn-flour",
    },
    {
      name: t("corn_grits_title"),
      href: "/products/corn-grits",
      key: "corn-grits",
    },
  ];

  const getDirection = () => {
    Cookies.set("NEXT_LOCALE", locale === "ar" ? "en" : "ar");
    if (pathName === "/ar" || pathName === "/") {
      return locale === "en" ? "/ar" : "en";
    }
    return locale === "en"
      ? `/ar${pathName}`
      : pathName.replace("/ar/", "/en/");
  };
  const { isOpen, onOpen } = useDisclosure();
  const switchLang = () => {
    router.push(getDirection());
  };

  return (
    <div className="shadow-md ">
      {/* Navbar Wrapper */}
      <div className="flex items-center justify-evenly bg-[#F7F7F7] h-24 md:h-32">
        {/* Mobile Navbar */}
        <Navbar className="bg-[#F7F7F7] flex lg:hidden">
          <NavbarContent>
            <Dropdown className="flex lg:hidden">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent"
                  radius="sm"
                  variant="light"
                  isIconOnly
                >
                  <MdMenu className="text-2xl" />
                </Button>
              </DropdownTrigger>

              <DropdownMenu aria-label="Products" className="w-[340px]">
                {Items.map((item, index) => (
                  <DropdownItem startContent={<HiHome />}>
                    <Link
                      className={`w-full ${
                        index === 2
                          ? "text-primary"
                          : index === Items.length - 1
                          ? "text-danger"
                          : "text-foreground"
                      }`}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <div>
              <Button
                isIconOnly
                size="lg"
                className="min-w-[150px] h-[40px] md:min-w-[200px] flex gap-2"
              >
                <Link href="/" className="font-bold text-xl text-[#00b5bc]">
                  <Image src="/logo1.png" alt="logo" layout="fill" />
                </Link>
              </Button>
            </div>
          </NavbarContent>
        </Navbar>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/"> {t("home")}</Link>
          <Link href="/about"> {t("about")}</Link>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent"
                endContent={<FaArrowDown />}
                radius="sm"
                variant="light"
              >
                {t("products")}
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Products" className="w-[340px]">
              <DropdownItem
                onClick={() => navigateTo("/products/corn-flour")}
                startContent={<HiHome />}
              >
                {t("corn_flour_title")}
              </DropdownItem>
              <DropdownItem
                onClick={() => navigateTo("/products/corn-grits")}
                startContent={<HiHome />}
              >
                {t("corn_grits_title")}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        {/* Logo Section */}
        <div className="hidden lg:flex items-center">
          <Button
            isIconOnly
            size="lg"
            variant="light"
            color="default"
            className="min-w-[160px] h-[100px] bg-white md:min-w-[300px]"
          >
            <Link href="/" className="font-bold text-xl text-[#00b5bc]">
              <Image src="/logo1.png" alt="logo" layout="fill" />
            </Link>
          </Button>
        </div>

        {/* Additional Links */}
        <div className="hidden lg:flex justify-center items-center gap-6">
          <Link href="/corn">{t("corn")}</Link>
          <Link href="/gallery"> {t("Gallery")}</Link>
        </div>

        {/* Language Switcher */}
        <div className="sm:flex items-center gap-6">
          <Button
            size="lg"
            variant="flat"
            color="success"
            className="mx-4"
            onClick={switchLang}
          >
            <BiWorld />
            {locale === "en" ? " | English" : " | العربية"}
          </Button>
        </div>
      </div>
    </div>
  );
}
