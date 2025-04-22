import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "../common/SectionWrapper";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <SectionWrapper id="hero" bgColor="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {t("title")}
          </h1>

          <h2 className="text-xl font-medium text-gray-800">
          {t("subtitle")}
          </h2>

          <p className="text-lg text-gray-600">
          {t("description")}
          </p>

          <div className="flex gap-4">
            <a
              href="#service"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {t("buttonViewServices")}
            </a>
            <a
              href="#introduction"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              {t("buttonLearnMore")}
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/image/hero-img.png"
            width={300}
            height={500}
            alt="hero image"
            className="object-contain"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
