import type { Metadata } from "next";
import { Calistoga, Changa } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Footer from "@/components/Global/Layout/Footer";
import MainNavbar from "@/components/Global/Layout/MainNavbar";
import GToast from "@/components/Global/Providers/GToast";
import ToTop from "@/components/Global/Ui/ToTop";
import NextUi from "@/components/Providers/NextUi";
import { NextIntlClientProvider } from "next-intl";
import Head from "next/head";
import { notFound } from "next/navigation";
import "./globals.css";
import SwipperPage from "@/components/Global/Sliders/SwipperPage";

 

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export const metadata: Metadata = {
  title: "MAXICANO",
  description: "للصناعات الغذائيه",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  // Language Switcher Client Provider
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body  >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextUi>
            <MainNavbar />
            <div className=" ">
            <SwipperPage  />
              {children}
              {/* <ToTop /> */}
            </div>
            <GToast />
            <Footer />
          </NextUi>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
