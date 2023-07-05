import React from "react";
import ReactPlayer from "react-player";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
export default function InstructionVideo() {
  return (
    <>
      <NextSeo
        title="Instruction Video"
        description="Unlock the full potential of your art supplies with our informative instruction video. Discover expert tips, techniques, and creative ideas for using various art supplies effectively. From paints and brushes to markers and pencils, our video provides valuable insights to enhance your artistic journey. Unleash your imagination and elevate your artwork with our guidance. Watch now and elevate your art with the right supplies!"
      />
      <div className="flex items-center justify-center my-9">
        <ReactPlayer
          url="https://cdn.shopify.com/videos/c/o/v/ee147619fe314b72a8c56027c1e306bc.mp4"
          light={false}
          controls={true}
          width={1200}
          height={600}
        />
      </div>
    </>
  );
}
InstructionVideo.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
    },
  };
};
