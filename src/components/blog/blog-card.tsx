import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import Image from "next/image";

const BlogCard = ({ blog }: any) => {
  const { handle, title, excerpt } = blog.node;

  const { altText, url } = blog.node.image;

  return (
    <Link legacyBehavior href={`${ROUTES.BLOG}/${handle}`}>
      <div className="group">
        <div className=" bg-white border border-gray-200 rounded-lg shadow-product ">
          {/* <img className="rounded-t-lg" src={url} alt={altText} /> */}
          <Image
            src={url}
            alt={altText}
            width={400}
            height={200}
            className="h-36"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 h-40  ">
              {title}{" "}
            </h5>
            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p> */}

            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#262626] rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none cursor-pointer ">
              Read more
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
  );
};

export default BlogCard;
