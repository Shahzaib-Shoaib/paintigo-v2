import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { getAllShoeVideos } from "@lib/queries/videosQuery";
import { NextSeo } from "next-seo";
import VideoList from "@components/gallery/video-list";
import PageHeader from "@components/ui/page-header";

export default function ShoesArtwork({ videos }: any) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title="Shoe Artwork"
        description="Watch Paintigo's latest videos on Art & Craft."
      />
      <PageHeader pageHeader="Shoe Artwork" />
      <VideoList videos={videos} />
    </>
  );
}

ShoesArtwork.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const videos = await getAllShoeVideos();

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      videos,
    },
  };
};
