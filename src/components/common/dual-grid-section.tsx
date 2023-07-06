import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@utils/routes";

export default function DualGridSection() {
  return (
    <div className="grid md:grid-cols-2 mb-10 grid-cols-1 ">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/banner-2.jpg"
          width={550}
          height={540}
          alt="banner"
        />
      </div>
      <div className="flex items-center justify-center flex-col text-center">
        <h1 className="md:text-4xl text-3xl text-black font-segoe font-semibold mb-7 mt-14 md:mt-0">
          {/* md:text-4xl text-black font-segoe mb-5 font-semibold sm:mt-14 mt-10 text-3xl */}
          Paintigo Premium Acrylic Paint Pens{" "}
        </h1>
        <h2 className="text-2xl text-gray-900 font-segoe font-medium mb-5 ">
          {/* text-2xl text-gray-900 font-segoe mb-5 font-medium */}
          Comes with 12 Italian Ink - Rich & Vibrant Colors !{" "}
        </h2>
        <p className="px-8">
          {/* px-7 */}
          Fine Tip Paint Pens, highly pigmented acrylic paint ink dries quickly
          to produce a very durable opaque and glossy finish on light and dark
          surfaces. They can be used to add writing, calligraphy, and
          embellishments to virtually any surface.
        </p>
        <button className="bg-[#262626] p-3 rounded text-white mt-6 hover:bg-gray-800">
          <Link href={ROUTES.PRODUCT}>Buy Now</Link>
        </button>
      </div>
    </div>
  );
}
