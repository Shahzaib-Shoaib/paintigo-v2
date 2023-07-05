import {
  NextSeo,
  OrganizationJsonLd,
  ProductJsonLd,
  ArticleJsonLd,
} from "next-seo";

export const IndexSeo = () => {
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
      <OrganizationJsonLd
        type="Corporation"
        logo="/assets/images/logo.png"
        legalName="Paintigo"
        name="Paintigo"
        address={{
          streetAddress: "",
          addressLocality: "",
          addressRegion: "GFD",
          postalCode: "95129",
          addressCountry: "UK",
        }}
        contactPoint={[
          {
            telephone: "",
            contactType: "customer service",
            email: "info@paintigo.com",
            areaServed: ["GB", "US"],
            availableLanguage: ["en"],
          },
        ]}
        sameAs={[
          "https://www.facebook.com/PaintigoGlobal",
          "https://twitter.com/paintigo",
          "https://www.instagram.com/paintigoworld/?hl=en",
          "https://www.youtube.com/@paintigo9457",
          "https://www.pinterest.com/paintigoshop/",
        ]}
        url="https://paintigo.shop/"
      />
    </>
  );
};

export const LayoutSeo = () => {
  return (
    <NextSeo
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ]}
      title="Paintigo.."
      description="Paintigo is dedicated to giving you the very best of Art Supplies, with a focus on quality, pigment, color vibrancy, and long-lasting painting results."
      canonical=""
      openGraph={{
        url: "",
        title: "Paintigo",
        description:
          "Paintigo is dedicated to giving you the very best of Art Supplies, with a focus on quality, pigment, color vibrancy, and long-lasting painting results.",
        images: [
          {
            url: "",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
          {
            url: "",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
          },
        ],
      }}
    />
  );
};

export const ProductsIndexSeo = () => {
  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
        title="Products"
        description="Paintigo Products are dedicated to giving you the very best of experience, with a focus on quality, pigment, color vibrancy, and long-lasting painting results."
        openGraph={{
          url: "",
          title: "Products",
          description:
            "Paintigo Products are dedicated to giving you the very best of experience, with a focus on quality, pigment, color vibrancy, and long-lasting painting results.",
          images: [
            {
              url: "",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
        }}
      />
      <OrganizationJsonLd
        type="Corporation"
        logo="/assets/images/logo.png"
        legalName="Paintigo"
        name="Paintigo"
        address={{
          streetAddress: "",
          addressLocality: "",
          addressRegion: "GFD",
          postalCode: "",
          addressCountry: "UK",
        }}
        contactPoint={[
          {
            telephone: "",
            contactType: "customer service",
            email: "info@paintigo.com",
            areaServed: ["GB", "US"],
            availableLanguage: ["en"],
          },
        ]}
        sameAs={[
          "https://www.facebook.com/PaintigoGlobal",
          "https://twitter.com/paintigo",
          "https://www.instagram.com/paintigoworld/?hl=en",
          "https://www.youtube.com/@paintigo9457",
          "https://www.pinterest.com/paintigoshop/",
        ]}
        url="https://paintigo.shop/"
      />{" "}
    </>
  );
};

export const SingleProductSeo = ({ product }: any) => {
  return (
    <>
      <NextSeo
        title={`${product.title}`}
        description={`${product.description}`}
      />
      <ProductJsonLd
        productName={`${product.title}`}
        images={[
          `${product.images.edges[0].node.originalSrc}`,
          `${product.images.edges[1].node.originalSrc}`,
        ]}
        description={`${product.description}`}
        brand="Paintigo"
        color="Multicolor"
        manufacturerName="Paintigo"
        manufacturerLogo="/assets/images/logo.png"
        material="Acrylic"
        slogan="Paintigo is dedicated to giving you the very best of Art Supplies, with a focus on quality, pigment, color vibrancy, and long-lasting painting results.."
        disambiguatingDescription={`${product.title}, Perfect for Artists like you`}
      />
    </>
  );
};
export const SingleBlogSeo = ({ blog }: any) => {
  return (
    <>
      <NextSeo title={`${blog.title}`} />
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://paintigo.shop/blogs/${blog.handle}`}
        title={`${blog.title}`}
        images={[`${blog.image.url}`]}
        datePublished={`${blog.publishedAt}`}
        authorName={`${blog.author.name}`}
        description="This is a Paintigo Blog"
      />{" "}
    </>
  );
};
