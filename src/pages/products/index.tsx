import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import ProductList from "@components/product/product-list";
import { getProductsInHomePage } from "@lib/queries/productsQuery";
import PageHeader from "@components/ui/page-header";
import { ProductsIndexSeo } from "@components/seo/seo";
export default function Products({ products }: any) {
  const { t } = useTranslation("common");

  return (
    <>
      <ProductsIndexSeo />
      <PageHeader pageHeader={t("text-page-products")} />

      <ProductList products={products} />
    </>
  );
}

Products.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const products = await getProductsInHomePage(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "forms",
        "menu",
        "footer",
        "aboutus",
      ])),
      products,
    },
  };
};
