import { ShopifyData } from "@lib/shopify";

export async function getAllCollections(locale: any) {
  let language: any;
  if (locale == "uk" || locale == "us") {
    language = "EN";
  } else {
    language = locale.toUpperCase();
  }
  let country: any;

  if (locale == "uk") {
    country = "GB";
  } else {
    country = "US";
  }

  const query = `
     query Localization @inContext(language: ${language} country:${country} ){
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            image{
              altText
              id
              url
            }
            products(first: 10) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  
  `;

  const response = await ShopifyData(query);

  const allCollections = response.data.collections.edges
    ? response.data.collections.edges
    : [];

  return allCollections;
}

export async function getProductsOfSpecificCollection(handle: string, locale) {
  const language = locale.toUpperCase();
  const query = `
    query Localization @inContext(language: ${language}) {
     
      collectionByHandle(handle: "${handle}") {
        title
        handle
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
    
    `;

  const response = await ShopifyData(query);

  const allProductsOfSpecificCollection = response.data.collectionByHandle
    .products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return allProductsOfSpecificCollection;
}

export async function getCollections() {
  const query = `
    
      {
      collections(first: 250) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.collections.edges
    ? response.data.collections.edges
    : [];

  return slugs;
}
