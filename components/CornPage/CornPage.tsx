import React from "react";
import Center from "../Global/Ui/Center";
import { useTranslations } from "next-intl";
import Head from "../Global/Ui/Head";
import Image from "next/legacy/image";

import img1 from "@/public/corn/1.jpg";
import img2 from "@/public/corn/2.jpg";
import img3 from "@/public/corn/3.jpg";
import img4 from "@/public/corn/4.jpg";
import img5 from "@/public/corn/5.jpg";
import img6 from "@/public/corn/6.jpg";

import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import ImageSwipper from "@/components/Global/Sliders/ImageSwipper";
import { cn } from "@/libs/cn";
export default function CornPage() {
  const t = useTranslations();
  const corn = [img1, img2, img3, img4, img5, img6];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Center>
      <Head title={t("Globals.corn_title")} />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="text-3xl font-extrabold">
            {t("Globals.corn_history")}
          </div>
          <div className="text-xl ">{t("Globals.corn_history_desc")}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-3xl font-extrabold">
            {t("Globals.corn_benifits")}
          </div>
          <div className="text-xl ">{t("Globals.corn_benifits_desc")}</div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div
            className={cn(
              "grid grid-cols-1 gap-y-6 gap-x-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center items-center w-full "
            )}
          >
            {corn.map((img, index) => (
              <div className="border-8 border-amber-950 w-64 h-64 rounded-full ">
                <Image
                  onClick={onOpen}
                  key={index}
                  src={img}
                  alt="Quality Control"
                  width={500}
                  height={500}
                  className={cn(
                    "",
                    "rounded-full border-4 cursor-pointer border-slate-700"
                  )}
                />
              </div>
            ))}
          </div>
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
      </div>
    </Center>
  );
}
