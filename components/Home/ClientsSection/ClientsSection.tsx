import Image from "next/legacy/image";

import client1 from "@/public/clients/Client-1.png";
import client2 from "@/public/clients/Client-2.png";
import client3 from "@/public/clients/Client-3.png";
import client4 from "@/public/clients/Client-4.png";
import qualityControl from "@/public/policy/quality-control.png";
import Head from "@/components/Global/Ui/Head";
export default function ClientsSection() {
  return (
    <div className="flex flex-col justify-center w-full">
      <Head title="Clients"/>
 
        <div className="flex justify-center" >
        <div className="flex px-4 w-full md:w-1/2 h-28 items-center  justify-between">
          {[client1, client2, client3,client4].map((client, index) => (
            <Image
              key={index}
              src={client}
              alt="clientification"
              width={120}
              height={120}
              className="h-full w-full"
            />
          ))}
    
      </div>
        </div>
    </div>
  );
}
