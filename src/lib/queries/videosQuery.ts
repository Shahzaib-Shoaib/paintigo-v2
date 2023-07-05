import { ShopifyData } from "@lib/shopify";

export async function getAllVideos() {
  const query = `
    {
      blog (handle:"videos") {
        articles(first:30) {
          edges {
            node {
              excerpt
              contentHtml
              handle
              id
              image {
                id
                altText
                url
                width
                height
              }
              publishedAt
              title
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.blog.articles.edges
    ? response.data.blog.articles.edges
    : [];

  return slugs;
}

export async function getVideo(handle: string) {
  const query = `
    {
      blog(handle: "videos") {
        articleByHandle(handle: "${handle}") {
          title
          content
          contentHtml
          handle
          publishedAt
          author: authorV2 {
            name
          }
          image {
            id
            altText
            url
            width
            height
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const blog = response.data.blog.articleByHandle
    ? response.data.blog.articleByHandle
    : [];

  return blog;
}

export async function getAllMobileCoverVideos() {
  const query = `
    {
      blog (handle:"mobile-cover-artwork") {
        articles(first:30) {
          edges {
            node {
              excerpt
              contentHtml
              handle
              id
              image {
                id
                altText
                url
                width
                height
              }
              publishedAt
              title
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.blog.articles.edges
    ? response.data.blog.articles.edges
    : [];

  return slugs;
}

export async function getMobileCoverVideo(handle: string) {
  const query = `
    {
      blog(handle: "mobile-cover-artwork") {
        articleByHandle(handle: "${handle}") {
          title
          content
          contentHtml
          handle
          publishedAt
          author: authorV2 {
            name
          }
          image {
            id
            altText
            url
            width
            height
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const blog = response.data.blog.articleByHandle
    ? response.data.blog.articleByHandle
    : [];

  return blog;
}

export async function getAllShoeVideos() {
  const query = `
    {
      blog (handle:"shoes-artwork") {
        articles(first:30) {
          edges {
            node {
              excerpt
              contentHtml
              handle
              id
              image {
                id
                altText
                url
                width
                height
              }
              publishedAt
              title
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.blog.articles.edges
    ? response.data.blog.articles.edges
    : [];

  return slugs;
}

export async function getShoeVideo(handle: string) {
  const query = `
    {
      blog(handle: "shoes-artwork") {
        articleByHandle(handle: "${handle}") {
          title
          content
          contentHtml
          handle
          publishedAt
          author: authorV2 {
            name
          }
          image {
            id
            altText
            url
            width
            height
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const blog = response.data.blog.articleByHandle
    ? response.data.blog.articleByHandle
    : [];

  return blog;
}

export async function getAllStoneVideos() {
  const query = `
    {
      blog (handle:"stone-artwork") {
        articles(first:30) {
          edges {
            node {
              excerpt
              contentHtml
              handle
              id
              image {
                id
                altText
                url
                width
                height
              }
              publishedAt
              title
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.blog.articles.edges
    ? response.data.blog.articles.edges
    : [];

  return slugs;
}

export async function getStoneVideo(handle: string) {
  const query = `
    {
      blog(handle: "stone-artwork") {
        articleByHandle(handle: "${handle}") {
          title
          content
          contentHtml
          handle
          publishedAt
          author: authorV2 {
            name
          }
          image {
            id
            altText
            url
            width
            height
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const blog = response.data.blog.articleByHandle
    ? response.data.blog.articleByHandle
    : [];

  return blog;
}

export async function getAllCeramicVideos() {
  const query = `
    {
      blog (handle:"ceramic-artwork") {
        articles(first:30) {
          edges {
            node {
              excerpt
              contentHtml
              handle
              id
              image {
                id
                altText
                url
                width
                height
              }
              publishedAt
              title
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.blog.articles.edges
    ? response.data.blog.articles.edges
    : [];

  return slugs;
}

export async function getCeramicVideo(handle: string) {
  const query = `
    {
      blog(handle: "ceramic-artwork") {
        articleByHandle(handle: "${handle}") {
          title
          content
          contentHtml
          handle
          publishedAt
          author: authorV2 {
            name
          }
          image {
            id
            altText
            url
            width
            height
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const blog = response.data.blog.articleByHandle
    ? response.data.blog.articleByHandle
    : [];

  return blog;
}

export async function getAllOtherVideos() {
  const query = `
    {
      blog (handle:"others") {
        articles(first:30) {
          edges {
            node {
              excerpt
              contentHtml
              handle
              id
              image {
                id
                altText
                url
                width
                height
              }
              publishedAt
              title
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.blog.articles.edges
    ? response.data.blog.articles.edges
    : [];

  return slugs;
}

export async function getOtherVideo(handle: string) {
  const query = `
    {
      blog(handle: "others") {
        articleByHandle(handle: "${handle}") {
          title
          content
          contentHtml
          handle
          publishedAt
          author: authorV2 {
            name
          }
          image {
            id
            altText
            url
            width
            height
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const blog = response.data.blog.articleByHandle
    ? response.data.blog.articleByHandle
    : [];

  return blog;
}

export async function getAllSketchingVideos() {
  const query = `
    {
      blog (handle:"sketches") {
        articles(first:30) {
          edges {
            node {
              excerpt
              contentHtml
              handle
              id
              image {
                id
                altText
                url
                width
                height
              }
              publishedAt
              title
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.blog.articles.edges
    ? response.data.blog.articles.edges
    : [];

  return slugs;
}

export async function getSketchingVideo(handle: string) {
  const query = `
    {
      blog(handle: "sketches") {
        articleByHandle(handle: "${handle}") {
          title
          content
          contentHtml
          handle
          publishedAt
          author: authorV2 {
            name
          }
          image {
            id
            altText
            url
            width
            height
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const blog = response.data.blog.articleByHandle
    ? response.data.blog.articleByHandle
    : [];

  return blog;
}

export async function getAllWoodVideos() {
  const query = `
    {
      blog (handle:"wood-artwork") {
        articles(first:30) {
          edges {
            node {
              excerpt
              contentHtml
              handle
              id
              image {
                id
                altText
                url
                width
                height
              }
              publishedAt
              title
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.blog.articles.edges
    ? response.data.blog.articles.edges
    : [];

  return slugs;
}

export async function getWoodVideo(handle: string) {
  const query = `
    {
      blog(handle: "wood-artwork") {
        articleByHandle(handle: "${handle}") {
          title
          content
          contentHtml
          handle
          publishedAt
          author: authorV2 {
            name
          }
          image {
            id
            altText
            url
            width
            height
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const blog = response.data.blog.articleByHandle
    ? response.data.blog.articleByHandle
    : [];

  return blog;
}
