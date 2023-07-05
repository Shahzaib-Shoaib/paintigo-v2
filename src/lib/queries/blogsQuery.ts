import { ShopifyData } from "@lib/shopify";

export async function getAllBlogs() {
  const query = `
    {
      blog (handle:"news") {
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

export async function getBlog(handle: string) {
  const query = `
    {
      blog(handle: "news") {
        articleByHandle(handle: "${handle}") {
          title
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
