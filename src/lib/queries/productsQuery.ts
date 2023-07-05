import { ShopifyData } from "@lib/shopify";

export async function getProductsInHomePage(locale: any) {
  let language:any;
  if (locale == "uk" || locale == "us") {
    language = "EN";
  } else {
    language = locale.toUpperCase();
  }
  let country:any;

  if (locale == "uk") {
    country = "GB";
  } else {
    country = "US";
  }

  let tag:any;

  if (locale == "uk") {
    tag = "UK Product";
  } else {
    tag = "US Product";
  }

  const query = `
  query Localization @inContext(language: ${language} country: ${country})  {
      products(query: "tag:${tag}" first: 25) {
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
  
  
  `;

  const response = await ShopifyData(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `
    
      {
      products(first: 250) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle: string, locale) {
  let language:any;
  if (locale == "uk" || locale == "us") {
    language = "EN";
  } else {
    language = locale.toUpperCase();
  }
  let country:any;

  if (locale == "uk") {
    country = "GB";
  } else {
    country = "US";
  }
  const query = `
    query Localization @inContext(language: ${language} country: ${country}) {
    
      productByHandle(handle: "${handle}") {
          collections(first: 1) {
            edges {
            node {
              products(first: 5) {
                edges {
                  node {
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    handle
                    title
                    id
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
          }
        id
        title
        handle
        totalInventory
        productType
        descriptionHtml
        description
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        options {
          name
          values
          id
        }
        variants(first: 25) {
          edges {
            node {
              selectedOptions {
                name
                value
              }
              image {
                originalSrc
                altText
              }
              title
              id
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }
  
  
  
  `;

  const response = await ShopifyData(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}
