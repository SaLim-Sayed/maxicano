"use client";
import Image from "next/legacy/image";

import Center from "@/components/Global/Ui/Center";
import Head from "@/components/Global/Ui/Head";
import img1 from "@/public/gallery/1.jpg";
import img2 from "@/public/gallery/2.jpg";
import img3 from "@/public/gallery/3.jpg";
import img4 from "@/public/gallery/4.jpg";
import img5 from "@/public/gallery/5.jpg";
import img6 from "@/public/gallery/6.jpg";
import img7 from "@/public/gallery/7.jpg";
import img8 from "@/public/gallery/8.jpg";
import img9 from "@/public/gallery/9.jpg";
import img10 from "@/public/gallery/10.jpg";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import ImageSwipper from "@/components/Global/Sliders/ImageSwipper";
import { cn } from "@/libs/cn";
import { useTranslations } from "next-intl";

export default function GallerySection({ isRounded }: { isRounded?: boolean }) {
  const t=useTranslations("Globals")
  const corn = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Center>
      <Head title={t("Gallery")}/>

      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5   w-full",
          isRounded && "gap-3"
        )}
      >
        {corn.map((img, index) => (
          <div className={cn(
            isRounded && "rounded-full border-4 flex justify-center items-center   border-brown-700"
          )}>
          <Image
            onClick={onOpen}
            key={index}
            src={img}
            alt="Quality Control"
            width={300}
            height={300}
            className={cn(
              "h-[300px] cursor-pointer w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]",
              isRounded && "rounded-full border-4   border-slate-700"
            )}
          /></div>
        ))}
      </div>
      <Modal
        classNames={{
          closeButton:
            "text-white bg-black z-10 hover:bg-black hover:text-white",
        }}
        backdrop="blur"
        size="md"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="  flex justify-center bg-transparent items-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="h-full  ">
                <ImageSwipper images={corn as any[]} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Center>
  );
}
