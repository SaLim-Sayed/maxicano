"use client";

import { cn } from "@/libs/cn";
import { useNavigation } from "@/util/useNavigation";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { Button, Navbar } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
 
export default function WithAction() {
  const router = useRouter();
  const { navigateTo } = useNavigation();
  const locale = useLocale();
  const pathName = usePathname();
  const translate = useTranslations("Globals");

  const [placement, setPlacement] = useState("right");

  const getDirection = () => {
    Cookies.set("NEXT_LOCALE", locale == "ar" ? "en" : "ar");
    if (pathName == "/ar" || pathName == "/") {
      return locale == "en" ? "/ar" : "en";
    }

    return locale == "en"
      ? `/ar/${pathName}`
      : pathName.replace("/ar/", "/en/");
  };

  const switchLang = () => {
    router.push(getDirection());
  };

  useEffect(() => {
    if (locale === "ar") {
      setPlacement("left");
    }
  }, [locale]);

  return (
    <>
      <Box bg={"#fff"} className="shadow-md " px={4}>
        <Flex
          h={{ base: "24", md: "32" }}
          bg={"#F7F7F7"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Navbar className=" w-3  flex lg:hidden ">
            <Box className={cn(locale === "ar" ? "-mr-6" : "-ml-6")}>
              <Button
                isIconOnly
                size="lg"
                variant="light"
                className="min-w-[100px]  h-[40px]  md:min-w-[200px]   flex   gap-2"
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
            </Box>
          </Navbar>
          <HStack spacing={8} className="hidden lg:flex" alignItems={"center"}>
            <Box>
              <Button
                size="sm"
                isIconOnly
                variant="flat"
                color="success"
                className="mx-1"
                onClick={switchLang}
              >
                <BiWorld />
                {locale == "en" ? " | En" : " | ع"}
              </Button>
            </Box>
          </HStack>
          <HStack spacing={8} className="hidden lg:flex" alignItems={"center"}>
            <Box>
              <Button
                isIconOnly
                size="lg"
                variant="light"
                color="default"
                className="min-w-[160px] h-[100px] bg-white  hidden lg:flex md:min-w-[300px]     gap-2"
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
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <Button
              size="sm"
              isIconOnly
              variant="flat"
              color="success"
              className="mx-1"
              onClick={switchLang}
            >
              <BiWorld />
              {locale == "en" ? " | En" : " | ع"}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
