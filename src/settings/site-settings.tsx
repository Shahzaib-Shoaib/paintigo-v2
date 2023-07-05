import { USFlag } from "@components/icons/USFlag";
import { UKFlag } from "@components/icons/UKFlag";
export const siteSettings = {
  name: "Paintigo",
  description:
    "Paintigo is dedicated to giving you the very best of Art Supplies, with a focus on quality, pigment, color vibrancy, and long-lasting painting results.",
  author: {
    name: "Fester",
    websiteUrl: "https://fester-924622.netlify.app/",
    address: "",
  },
  logo: {
    url: "/assets/images/image2vector-2.svg",
    whiteurl: "/assets/images/logo-white.png",
    alt: "Paintigo",
    href: "/",
    width: 120,
    height: 100,
  },
  defaultLanguage: "uk",
  currencyCode: "GBP",
  site_header: {
    menu: [
      {
        id: 8,
        path: "/products",
        label: "text-products",
      },
      {
        id: 9,
        path: "/blogs",
        label: "text-blogs",
      },
      {
        id: 10,
        path: "/gallery",
        label: "text-gallery",
      },
      {
        id: 11,
        path: "/",
        label: "text-amazon-stores",
        subMenu: [
          {
            id: 1,
            path: "https://www.amazon.com/stores/Paintigo/page/AF111FC8-5FD9-4249-A960-58749715DBE6?ref_=paintigo.shop",
            label: "text-amazon-global",
          },
          {
            id: 2,
            path: "https://www.amazon.co.uk/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-uk",
          },
          {
            id: 3,
            path: "http://www.amazon.ca/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-canada",
          },
          {
            id: 4,
            path: "https://www.amazon.de/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-germany",
          },
          {
            id: 5,
            path: "https://www.amazon.fr/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-france",
          },
          {
            id: 6,
            path: "https://www.amazon.it/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-italy",
          },
          {
            id: 7,
            path: "https://www.amazon.es/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-spain",
          },
          {
            id: 8,
            path: "https://www.amazon.pl/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-poland",
          },
        ],
      },

      {
        id: 12,
        path: "/about-us",
        label: "text-about-us",
      },
      {
        id: 13,
        path: "/faq",
        label: "text-faq",
      },
      {
        id: 14,
        path: "/contact-us",
        label: "text-contact-us",
      },
    ],
    mobileMenu: [
      {
        id: 8,
        path: "/products",
        label: "text-products",
      },
      {
        id: 9,
        path: "/blogs",
        label: "text-blogs",
      },
      {
        id: 10,
        path: "/gallery",
        label: "text-gallery",
      },
      {
        id: 11,
        path: "/",
        label: "text-amazon-stores",
        subMenu: [
          {
            id: 1,
            path: "https://www.amazon.com/stores/Paintigo/page/AF111FC8-5FD9-4249-A960-58749715DBE6?ref_=paintigo.shop",
            label: "text-amazon-global",
          },
          {
            id: 2,
            path: "https://www.amazon.co.uk/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-uk",
          },
          {
            id: 3,
            path: "http://www.amazon.ca/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-canada",
          },
          {
            id: 4,
            path: "https://www.amazon.de/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-germany",
          },
          {
            id: 5,
            path: "https://www.amazon.fr/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-france",
          },
          {
            id: 6,
            path: "https://www.amazon.it/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-italy",
          },
          {
            id: 7,
            path: "https://www.amazon.es/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-spain",
          },
          {
            id: 8,
            path: "https://www.amazon.pl/stores/PAINTIGO/page/48CC385B-F8FF-4376-AAB1-E26C16076F44?ref_=paintigo.shop",
            label: "text-amazon-poland",
          },
        ],
      },
      {
        id: 12,
        path: "/about-us",
        label: "text-about-us",
      },
      {
        id: 13,
        path: "/faq",
        label: "text-faq",
      },
      {
        id: 14,
        path: "/contact-us",
        label: "text-contact-us",
      },
    ],
    languageMenu: [
      {
        id: "uk",
        name: "UK - English",
        value: "uk",
        icon: <UKFlag width="20px" height="15px" />,
      },
      {
        id: "us",
        name: "US - English",
        value: "us",
        icon: <USFlag width="20px" height="15px" />,
      },
      // {
      //   id: "de",
      //   name: "Deutsch - DE",
      //   value: "de",
      //   icon: <DEFlag width="20px" height="15px" />,
      // },
      // {
      //   id: "es",
      //   name: "Español - ES",
      //   value: "es",
      //   icon: <ESFlag width="20px" height="15px" />,
      // },
      // {
      //   id: "fr",
      //   name: "Français - FR",
      //   value: "fr",
      //   icon: <FRFlag width="20px" height="15px" />,
      // },
      // {
      //   id: "it",
      //   name: "Italiano - IT",
      //   value: "it",
      //   icon: <ITFlag width="20px" height="15px" />,
      // },
    ],
  },
};
