import { ShopifyData } from "@lib/shopify";

export async function createCheckout(id: any, quantity: any) {
  const query = `
      mutation {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
        }) {
          checkout {
            id
            webUrl
          }
        }
      }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id: any, lineItems: any) {
  const lineItemsObject = lineItems.map((item: any) => {
    return `{
        variantId: "${item.id}",
        quantity:  ${item.variantQuantity}
      }`;
  });

  const query = `
    mutation {
      checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}
export async function recursiveCatalog(cursor = "", initialRequest = true) {
  let data: any;

  if (cursor !== "") {
    const query = `{
        products(after: "${cursor}", first: 250) {
          edges {
            cursor
            node {
              id
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;
      console.log("Cursor: ", cursor);

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
        products(first: 250) {
          edges {
            cursor
            node {
              id
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
      `;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}
