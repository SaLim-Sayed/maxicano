"use client";

import { cn } from "@/libs/cn";
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
import { IoIosArrowDown } from "react-icons/io";
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
    <div className="shadow-md  text-xl uppercase font-semibold text-[#392F89]">
      {/* Navbar Wrapper */}
      <div className="flex items-center justify-evenly bg-[#F7F7F7] h-24 md:h-32">
        {/* Mobile Navbar */}
        <Navbar className="bg-[#F7F7F7] flex lg:hidden">
          <NavbarContent>
            <Dropdown className="flex lg:hidden">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 hover:bg-transparent border-green-800 bg-transparent"
                  radius="sm"
                  variant="ghost"
                  color="warning"
                  isIconOnly
                >
                  <MdMenu className="text-4xl text-purple-900  uppercase font-semibold" />
                </Button>
              </DropdownTrigger>

              <DropdownMenu aria-label="Products" className="w-[340px]">
                {Items.map((item, index) => (
                  <DropdownItem startContent={<HiHome />}>
                    <Link
                      href={item.href}
                      className={`${
                        pathName === item.href
                          ? "text-green-500 font-bold"
                          : "text-purple-900"
                      }`}
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
          <Link
            className={cn(
              pathName === "/" ? "text-green-700 font-bold" : "text-purple-900",
              " uppercase"
            )}
            href="/"
          >
            {" "}
            {t("home")}
          </Link>
          <Link
            className={cn(
              pathName === "/about"
                ? "text-green-700 font-bold"
                : "text-purple-900"
            )}
            href="/about"
          >
            {" "}
            {t("about")}
          </Link>
          <Dropdown>
            <DropdownTrigger
              className={cn(
                pathName === "/products/corn-grits" ||
                  pathName === "/products/corn-flour"
                  ? "text-green-700 font-bold"
                  : "text-purple-900"
                  ,"text-xl uppercase font-semibold"
              )}
            >
              <Button
                disableRipple
                className="p-0 bg-transparent"
                endContent={<IoIosArrowDown />}
                radius="sm"
                variant="light"
              >
                {t("products")}
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Products" className="w-[340px] text-xl uppercase font-semibold">
              <DropdownItem
                className={cn(
                  pathName === "/products/corn-flour"
                    ? "text-green-700 font-bold"
                    : "text-purple-900"
                )}
                onClick={() => navigateTo("/products/corn-flour")}
                startContent={<HiHome />}
              >
                {t("corn_flour_title")}
              </DropdownItem>
              <DropdownItem
                className={cn(
                  pathName === "/products/corn-grits"
                    ? "text-green-700 font-bold"
                    : "text-purple-900"
                )}
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
          <Link
            className={cn(
              pathName === "/corn"
                ? "text-green-700 font-bold"
                : "text-purple-900"
            )}
            href="/corn"
          >
            {t("corn")}
          </Link>
          <Link
            className={cn(
              pathName === "/gallery"
                ? "text-green-700 font-bold"
                : "text-purple-900"
            )}
            href="/gallery"
          >
            {" "}
            {t("Gallery")}
          </Link>
        </div>

        {/* Language Switcher */}
        <div className="sm:flex items-center gap-6">
          <Button
            size="md"
            variant="ghost"
            color="success"
            className="mx-2 max-w-24 p-2 text-[#488102] border-[#488102] "
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
