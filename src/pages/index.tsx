import dynamic from "next/dynamic";
import { getProductsInHomePage } from "@lib/queries/productsQuery";
import ProductList from "@components/product/product-list";
import Layout from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import CollectionBlock from "@containers/collection-block";
import { collectionData as collection } from "@framework/static/collection";
import Container from "@components/ui/container";
import Divider from "@components/ui/divider";
import { useUI } from "@contexts/ui.context";
import { useEffect } from "react";
import Subscription from "@components/common/subscription";
import { getUsersCountry } from "@components/common/countrydeterminer";
import DualGridSection from "@components/common/dual-grid-section";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import LogoWhite from "@components/ui/logo-white";
import { ancientHeroBanner } from "@framework/static/banner";
import Loader from "@components/loaders/loader";

const TestimonialCarousel = dynamic(
  () => import("@containers/testimonial-carousel"),
  {
    ssr: false,
  }
);
const VideoPlayer = dynamic(() => import("@components/common/video-player"), {
  ssr: false,
});
const HeroSlider = dynamic(() => import("@containers/hero-slider"), {
  loading: () => <Loader />,
  ssr: false,
});

const FeatureCarousel = dynamic(
  () => import("@components/common/featured-carousel"),
  { ssr: false }
);

export default function Home({ products }: any) {
  const sectionCommonStyle = "";
  const router = useRouter();

  const country = getUsersCountry("unknown");
  useEffect(() => {
    if (country == "US") {
      router.push("us");
    } else {
      router.push("uk");
    }
  }, []);

  const { openModal, setModalView } = useUI();

  useEffect(() => {
    setModalView("NEWSLETTER_VIEW");
    setTimeout(() => {
      // openModal();
    }, 3000);
  }, []);

  return (
    <>
      <NextSeo
        title="High-Quality Acrylic Paint Pens by Paintigo - Unleash Your Creativity"
        description="Paintigo is dedicated to giving you the very best of acrylic paint pens, with a focus on quality, pigment, color vibrancy, and long-lasting painting results. "
        canonical="https://paintigo.shop/"
        openGraph={{
          type: "website",
          locale: "en_IE",
          site_name: "Paintigo",
        }}
        twitter={{
          handle: "@paintigo",
          site: "https://twitter.com/paintigo",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1 maximum-scale=1",
          },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            href: "icons/apple-icon-180.png",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <Container>
        <HeroSlider data={ancientHeroBanner} buttonGroupClassName="hidden" />
      </Container>
      <FeatureCarousel />
      <ProductList products={products} />
      <Divider />
      <Container>
        <TestimonialCarousel
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
          disableBoarderRadius={true}
          reduceCardSpacing={true}
          demoVariant="ancient"
        />
      </Container>
      <Divider />
      <Container>
        <DualGridSection />
      </Container>
      <Divider />
      <VideoPlayer />
      <Divider />
      <Container>
        <CollectionBlock data={collection} />
      </Container>
      <Subscription />
    </>
  );
}
Home.Layout = Layout;

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
