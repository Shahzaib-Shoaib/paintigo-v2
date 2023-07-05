import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { getAllProducts, getProduct } from "@lib/queries/productsQuery";
import dynamic from "next/dynamic";
import Subscription from "@components/common/subscription";
const TestimonialCarousel = dynamic(
  () => import("@containers/testimonial-carousel"),
  {
    ssr: false,
  }
);
import ProductPageContent2 from "@components/product/product-page-content-2";
import { SingleProductSeo } from "@components/seo/seo";

export default function ProductPage({ product }: any) {
  return (
    <>
      <SingleProductSeo product={product} />
      <div className="min-h-screen py-12 mx-4 sm:pt-20">
        <ProductPageContent2 product={product} />
        <TestimonialCarousel
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
          disableBoarderRadius={true}
          reduceCardSpacing={true}
          demoVariant="ancient"
        />
        <Subscription />
      </div>
    </>
  );
}

ProductPage.Layout = Layout;

export async function idk() {
  const products = await getAllProducts();
  const paths = products.map((item: any) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}: any) => {
  const product = await getProduct(params.product, locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      product,
    },
  };
};
