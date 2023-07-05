import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ROUTES } from "@utils/routes";
import Image from "next/image";

const videosFoldersList = [
  {
    id: 1,
    title: "Mobile Cover Artwork",
    slug: "mobile-cover-artwork",
    image: "/assets/images/folder-cover/mobile-cover.png",
  },
  {
    id: 2,
    title: "Shoe Artwork",
    slug: "shoes-artwork",
    image: "/assets/images/folder-cover/shoes.png",
  },
  {
    id: 3,
    title: "Stone Artwork",
    slug: "stone-artwork",
    image: "/assets/images/folder-cover/stone.png",
  },
  {
    id: 4,
    title: "Ceramic Artwork",
    slug: "ceramic-artwork",
    image: "/assets/images/folder-cover/ceramic.png",
  },
  {
    id: 5,
    title: "Sketching Videos",
    slug: "sketches",
    image: "/assets/images/folder-cover/sketch-book.png",
  },
  {
    id: 6,
    title: "Wooden Artwork",
    slug: "wooden-artwork",
    image: "/assets/images/folder-cover/wood.png",
  },
  {
    id: 7,
    title: "Instruction Video",
    slug: "instruction-video",
    image: "/assets/images/newsletter2.jpg",
  },
  {
    id: 8,
    title: "Other Videos",
    slug: "others",
    image: "/assets/images/newsletter2.jpg",
  },
];

const FolderList = () => {
  const { t } = useTranslation("common");

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
        {" "}
        {t("text-videos")}
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {videosFoldersList?.map((item) => (
          <Link
            href={`${ROUTES.GALLERY}/${item.slug}`}
            legacyBehavior
            key={item.id}
          >
            <a className="group">
              <div className="w-full bg-gray-200 rounded-3xl overflow-hidden ">
                <div className="relative object-fill group-hover:opacity-75 h-72 ">
                  <Image src={item.image} alt={item.title} fill />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {item.title}
              </h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FolderList;
{
  /* <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {videosFoldersList?.map((item) => (
            <Link
              legacyBehavior
              href={`${ROUTES.GALLERY}/${item.slug}`}
              key={item.id}
            >
              <div className="group">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-product ">
                  <img
                    className="rounded-t-lg"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 h-36 ">
                      {item.title}{" "}
                    </h5>
                    <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#262626] rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none cursor-pointer ">
                      Watch Now{" "}
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div> */
}
// <div className="bg-white ">
//   <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//     <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
//       {t("text-videos")}
//     </h2>
//   </div>
// </div>
