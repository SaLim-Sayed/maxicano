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
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@nextui-org/react";

import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { it } from "node:test";
import { useEffect, useState } from "react";
import { BiMenuAltLeft, BiWorld, BiX } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdMenu } from "react-icons/md";

export default function WithAction() {
  const router = useRouter();
  const { navigateTo } = useNavigation();
  const locale = useLocale();
  const pathName = usePathname();
  const t = useTranslations("Globals");

  const [placement, setPlacement] = useState("right");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
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

  useEffect(() => {
    if (locale === "ar") {
      setPlacement("left");
    }
  }, [locale]);

  return (
    <div className="shadow-md ">
      {/* Navbar Wrapper */}
      <div className="flex items-center justify-evenly bg-[#F7F7F7] h-24 md:h-32">
        {/* Mobile Navbar */}
        <Navbar
          className="bg-[#F7F7F7] flex lg:hidden"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            {/* <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
              
            /> */}
            <Dropdown className="sm:hidden">
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
                      onClick={() => setIsMenuOpen(false)}
                      className={`w-full ${
                        index === 2
                          ? "text-primary"
                          : index === menuItems.length - 1
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
          {isMenuOpen && (
            <NavbarMenu>
              {Items.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full ${
                      index === 2
                        ? "text-primary"
                        : index === menuItems.length - 1
                        ? "text-danger"
                        : "text-foreground"
                    }`}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          )}
        </Navbar>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/">الصفحة الرئيسية</Link>
          <Link href="/about">حول الشركة</Link>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent"
                endContent={<FaArrowDown />}
                radius="sm"
                variant="light"
              >
                المنتجات
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Products" className="w-[340px]">
              <DropdownItem
                onClick={() => navigateTo("/products/corn-flour")}
                startContent={<HiHome />}
              >
                الذره الصفراء / دقيق الذره
              </DropdownItem>
              <DropdownItem
                onClick={() => navigateTo("/products/corn-grits")}
                startContent={<HiHome />}
              >
                الذرة الصفراء / جريش الذرة
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
          <Link href="/corn">الذره</Link>
          <Link href="/gallery">معرض الصور</Link>
        </div>

        {/* Language Switcher */}
        <div className="sm:flex items-center gap-6">
          <Button
            size="sm"
            isIconOnly
            variant="flat"
            color="success"
            className="mx-1"
            onClick={switchLang}
          >
            <BiWorld />
            {locale === "en" ? " | En" : " | ع"}
          </Button>
        </div>
      </div>
    </div>
  );
}
