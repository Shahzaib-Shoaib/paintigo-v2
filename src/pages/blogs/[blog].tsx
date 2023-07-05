import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { getAllBlogs, getBlog } from "@lib/queries/blogsQuery";
import BlogPageContent from "@components/blog/blog-page-content";
import { SingleBlogSeo } from "@components/seo/seo";

export default function BlogPage({ blog }: any) {
  return (
    <>
      <SingleBlogSeo blog={blog} />
      <div className="min-h-screen py-12 sm:pt-20">
        <BlogPageContent blog={blog} />
      </div>
    </>
  );
}

BlogPage.Layout = Layout;

export async function idk() {
  const blogs = await getAllBlogs();

  const paths = blogs.map((item: any) => {
    const blog = String(item.node.handle);

    return {
      params: { blog },
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
  const blog = await getBlog(params.blog);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      blog,
    },
  };
};
