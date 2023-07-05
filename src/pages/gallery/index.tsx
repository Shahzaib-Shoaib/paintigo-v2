import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { getAllVideos } from "@lib/queries/videosQuery";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { ROUTES } from "@utils/routes";

import PageHeader from "@components/ui/page-header";
import FolderList from "@components/gallery/folder-list";

export default function Gallery() {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title="Gallery"
        description="Watch Paintigo's latest videos on Art & Craft."
      />
      <PageHeader pageHeader="text-page-gallery" />
      <FolderList />
    </>
  );
}

Gallery.Layout = Layout;

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
