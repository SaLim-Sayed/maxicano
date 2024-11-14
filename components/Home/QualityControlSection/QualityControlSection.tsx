import Image from "next/legacy/image";

import cert1 from "@/public/policy/cert1.png";
import cert2 from "@/public/policy/cert2.png";
import cert3 from "@/public/policy/cert3.png";
import qualityControl from "@/public/policy/quality-control.png";
export default function QualityControlSection() {
  return (
    <div className="flex flex-col justify-center w-full">
      <div
        style={{ backgroundImage: `url('policy/bg-quality.png')` }}
        className="relative flex w-full lg:w-[95%] h-60 md:h-80 bg-white"
      >
        <div className="absolute top-0 -left-10 w-full h-full">
          <div className="relative border-8 border-t-0 border-b-0 -skew-x-6 flex justify-center items-center w-60 md:w-80 h-60 md:h-80 overflow-hidden">
            <Image
              src={qualityControl}
              alt="Quality Control"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="hidden sm:flex absolute top-0 right-60 bg-green-600 text-white px-4 py-1 text-sm font-semibold">
          QUALITY CONTROL
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 my-4 items-center w-full">
        <div className="text-justify px-4 w-[90%] lg:w-1/2">
          The policy of our company depends on the adoption of quality global
          standards for all products. Our company uses the latest and most
          prestigious laboratories to examine products, ensuring quality
          control. In addition to Egyptian certificates, we have obtained
          international certifications such as ISO 9001:2015, ISO 22000:2005,
          and BRC (British Retail Consortium).
        </div>
        <div className="flex px-4 w-full md:w-1/2 h-28 justify-between">
          {[cert1, cert2, cert3].map((cert, index) => (
            <Image
              key={index}
              src={cert}
              alt="Certification"
              width={200}
              height={200}
              className="h-full w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
