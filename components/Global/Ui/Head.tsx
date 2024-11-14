import { cn } from "@/libs/cn";
import Center from "./Center";

export default function Head({
  title,
  subTitle,
  desc,
  exSt,
  exStTitle,
  exStSubTitle,
}: {
  title?: string;
  subTitle?: any;
  desc?: any;
  exSt?: string;
  exStTitle?: string;
  exStSubTitle?: string;
}) {
  return (
    <Center>
      <div className="flex  flex-col items-center justify-center">
        <div className="flex  flex-col items-center text-center w-full md:w-1/2 justify-center">
          <div className="flex w-full items-center justify-center my-4">
            <div className="w-full h-[1px]  bg-gray-300"/>
            <div className="bg-green-500 text-white px-4 py-1 min-w-[160px]  rounded">
              {title}{" "}
            </div>
            <div className="w-full  h-[1px]  bg-gray-300"/>
          </div>
          <div>{subTitle}</div>
        </div>
      </div>
    </Center>
  );
}
