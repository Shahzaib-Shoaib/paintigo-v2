import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import BlogList from "@components/blog/blog-list";
import { getAllBlogs } from "@lib/queries/blogsQuery";
import { NextSeo } from "next-seo";
import PageHeader from "@components/ui/page-header";
export default function Blogs({ blogs }: any) {
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo
        title="Blogs"
        description="Read Paintigo's latest post on Art & Craft."
      />
      <PageHeader pageHeader={t("text-page-blogs")} />

      <BlogList blogs={blogs} />
    </>
  );
}

Blogs.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const blogs = await getAllBlogs();

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      blogs,
    },
  };
};
