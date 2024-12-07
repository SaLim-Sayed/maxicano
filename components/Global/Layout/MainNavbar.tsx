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

export default function MainNavbar() {
  const router = useRouter();
  const { navigateTo } = useNavigation();
  const locale = useLocale();
  const pathName = usePathname();
  const t = useTranslations("Globals");
  const normalizedPath = pathName.startsWith(`/${locale}`)
    ? pathName.replace(`/${locale}`, "")
    : pathName;

  const Items = [
    { name: t("home"), href: `/${locale}/`, key: "home" },
    { name: t("about"), href: `/${locale}/about`, key: "about" },
    { name: t("corn"), href: `/${locale}/corn`, key: "corn" },
    { name: t("Gallery"), href: `/${locale}/gallery`, key: "gallery" },
    {
      name: t("corn_flour_title"),
      href: `/${locale}/products/corn-flour`,
      key: "corn-flour",
    },
    {
      name: t("corn_grits_title"),
      href: `/${locale}/products/corn-grits`,
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
    <div className="shadow-md  text-xl uppercase font-semibold text-[#392F89] sticky top-0 z-50" id="mainNavbar"> 
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
                        normalizedPath === item.href.replace(`/${locale}`, "")
                          ? "text-green-500  font-bold"
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
                <Link  href={`/${locale}/`} className="font-bold text-xl text-[#00b5bc]">
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
              normalizedPath === "" || normalizedPath === "/"
                ? "text-green-700 font-bold"
                : "text-purple-900",
              "uppercase"
            )}
            href={`/${locale}/`}
          >
            {t("home")}
          </Link>

          <Link
            className={cn(
              normalizedPath === "/about"
                ? "text-green-700 font-bold"
                : "text-purple-900"
            )}
            href={`/${locale}/about`}
          >
            {t("about")}
          </Link>

          <Dropdown>
            <DropdownTrigger
              className={cn(
                normalizedPath === `/products/corn-grits` ||
                  normalizedPath === `/products/corn-flour`
                  ? "text-green-700 font-bold"
                  : "text-purple-900",
                "text-xl uppercase font-semibold"
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

            <DropdownMenu
              aria-label="Products"
              className="w-[340px] text-xl uppercase font-semibold"
            >
              <DropdownItem
                className={cn(
                  normalizedPath === `/products/corn-flour`
                    ? "text-green-700 font-bold"
                    : "text-purple-900"
                )}
                onClick={() => navigateTo(`/${locale}/products/corn-flour`)}
                startContent={<HiHome />}
              >
                {t("corn_flour_title")}
              </DropdownItem>
              <DropdownItem
                className={cn(
                  normalizedPath === `/products/corn-grits`
                    ? "text-green-700 font-bold"
                    : "text-purple-900"
                )}
                onClick={() => navigateTo(`/${locale}/products/corn-grits`)}
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
            <Link  href={`/${locale}/`} className="font-bold text-xl text-[#00b5bc]">
              <Image src="/logo1.png" alt="logo" layout="fill" />
            </Link>
          </Button>
        </div>

        {/* Additional Links */}
        <div className="hidden lg:flex justify-center items-center gap-6">
          <Link
            className={cn(
              normalizedPath === "/corn"
                ? "text-green-700 font-bold"
                : "text-purple-900"
            )}
            href={`/${locale}/corn`}
          >
            {t("corn")}
          </Link>
          <Link
            className={cn(
              normalizedPath === "/gallery"
                ? "text-green-700 font-bold"
                : "text-purple-900"
            )}
            href={`/${locale}/gallery`}
          >
            {" "}
            {t("Gallery")}
          </Link>
        </div>

        {/* Language Switcher */}
        <div className="sm:flex items-center gap-6">
          <Button
            id="lang"
            size="md"
            variant="bordered"
            className="mx-2 max-w-24 p-2 text-[#488102]  border-[#488102] "
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
