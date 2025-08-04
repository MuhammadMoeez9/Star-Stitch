import Image from "next/image";
import { Badge } from "./ui/badge";
import RushOrders from "@/../public/RushOrders.webp";
import ThreeSkeleton from "@/../public/ThreeSkeleton.webp";
import WomenFace from "@/../public/WomanFace.webp";
import ManHiddenFace from "@/../public/ManHiddenFace.webp";
import CoupleEmbroidery from "@/../public/CoupleEmbroidery.webp";
import BlackPanther from "@/../public/BlackPanther.webp";
import WoonWard from "@/../public/WoonWard.webp";
import Panda from "@/../public/Panda.webp";
import LionRabbit from "@/../public/LionRabbit.webp";

export default function Portfolio() {
  return (
    <section className="py-20 mx-auto bg-gray-50">
      <div className="text-center mb-12 px-4 sm:px-6 md:px-8">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 text-sm sm:text-base">
          Our Portfolio
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Professional Digitizing Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We specialize in converting your artwork into high-quality embroidery
          files with precision and attention to detail.
        </p>
      </div>

      {/* Masonry layout */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden">
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={ThreeSkeleton}
            alt="Embroidery Digitizing"
          />
        </div>
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={WomenFace}
            alt="Embroidery Digitizing"
          />
        </div>
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={RushOrders}
            alt="Rush Order"
          />
        </div>
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={ManHiddenFace}
            alt="gallery-photo"
          />
        </div>
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={CoupleEmbroidery}
            alt="gallery-photo"
          />
        </div>
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={BlackPanther}
            alt="gallery-photo"
          />
        </div>
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={WoonWard}
            alt="gallery-photo"
          />
        </div>
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={Panda}
            alt="gallery-photo"
          />
        </div>
        <div>
          <Image
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src={LionRabbit}
            alt="gallery-photo"
          />
        </div>
      </div>
    </section>
  );
}
