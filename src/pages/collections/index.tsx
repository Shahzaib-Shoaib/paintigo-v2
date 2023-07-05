import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import CollectionList from "@components/collection/collection-list";
import { getAllCollections } from "@lib/queries/collectionsQuery";
import { NextSeo } from "next-seo";

export default function Collections({ collections }: any) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title="Paintigo Collections"
        description="Looking for high-quality acrylic paint pens? Browse our collection and discover a wide range of vibrant colors and versatile tips. Perfect for art projects, DIY crafts, and more, our acrylic paint pens are easy to use and provide long-lasting results on a variety of surfaces. Shop now and take your creativity to the next level!"
      />
      <CollectionList collections={collections} />
    </>
  );
}

Collections.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const collections = await getAllCollections(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      collections,
    },
  };
};
