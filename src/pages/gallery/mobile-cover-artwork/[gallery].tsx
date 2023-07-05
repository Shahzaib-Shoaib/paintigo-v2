import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import {
  getAllMobileCoverVideos,
  getMobileCoverVideo,
} from "@lib/queries/videosQuery";
import { NextSeo } from "next-seo";
import GalleryPageContent from "@components/gallery/gallery-page-content";

export default function GalleryFoldersPage({ video }: any) {
  
  return (
    <>
      <NextSeo title={`${video.title}`} />

      <div className="">
        <GalleryPageContent video={video} />
      </div>
    </>
  );
}

GalleryFoldersPage.Layout = Layout;

export async function idk() {
  const videos = await getAllMobileCoverVideos();

  const paths = videos.map((item: any) => {
    const video = String(item.node.handle);

    return {
      params: { video },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

idk();

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}: any) => {
  const video = await getMobileCoverVideo(params.gallery);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      video,
    },
  };
};
